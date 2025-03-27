import React, { useState } from 'react'
import { addProduct } from '../../services/productService';
import { auth } from '../../firebase/firebase';

const SellProduct = () => {
    const [ product , setProduct ] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        location: "",
        userId:"",
        userName:"",
        image: ""
    })

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct({...product , [e.target.name]: e.target.value})
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            setImageFile(e.target.files[0])
        }
    }

    

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setUploading(true);
  
      try {
          const user = auth.currentUser;
          if (!user) {
              alert("You must be logged in to sell a product!");
              setUploading(false);
              return;
          }
  
          // ✅ Convert productData to FormData
          const formData = new FormData();
          formData.append("name", product.name);
          formData.append("description", product.description);
          formData.append("price", product.price.toString());
          formData.append("category", product.category);
          formData.append("location", product.location);
          formData.append("userName", user.displayName || "");
          if (imageFile) formData.append("image", imageFile); // Append file
  
          // ✅ Use `formData` instead of `productData`
          const response = await addProduct(formData);
  
          if (response && response.success) {
              alert("Product added successfully!");
              setProduct({
                  name: "",
                  description: "",
                  price: "",
                  category: "",
                  location: "",
                  userId: "",
                  userName: "",
                  image: "",
              });
              setImageFile(null);
          } else {
              alert("Failed to add product!");
          }
      } catch (error) {
          console.error(error);
          alert("Error adding product");
      } finally {
          setUploading(false);
      }
  };
  

  return (
    <div>
      <div className='max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg mt-10'>
        <h2 className='text-2xl font-semibold mb-4'>Sell Your Product</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type="text" name='name' placeholder='Title' value={product.name} onChange={handleChange} className='border p-2 rounded-md' required />
            <textarea name="description" placeholder='Description' value={product.description} onChange={handleChange} className='border p-2 rounded-md' required />
            <input type="number" name='price' placeholder='Price' value={product.price} onChange={handleChange} className='border p-2 rounded-md' required />
            <input type="text" name='category' placeholder='Category' value={product.category} onChange={handleChange} className='border p-2 rounded-md' required />
            <input type="text" name='location' placeholder='Location' value={product.location} onChange={handleChange} className='border p-2 rounded-md' required />
            <input type="file" accept="image/*" onChange={handleFileUpload} className="border p-2 rounded-md" required />

            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" disabled={uploading}>
                {uploading ? "Uploading..." : "Submit"}
            </button>
        </form>

      </div>
    </div>
  )
}

export default SellProduct
