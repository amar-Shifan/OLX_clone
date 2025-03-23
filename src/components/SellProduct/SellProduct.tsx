import React, { useState } from 'react'
import { db } from '../../firebase/firebase'
import { addDoc , collection , serverTimestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const SellProduct = () => {
    const [ product , setProduct ] = useState({
        title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    imageUrl: ""
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

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        setUploading(true)
        try {
            let imageUrl = "";

            if(imageFile) {
                const storage = getStorage()
                const storageRef = ref(storage , `products/${imageFile.name}`)
                const uploadTask = uploadBytesResumable(storageRef , imageFile)
                await new Promise<void>((res , rej) => {
                    uploadTask.on(
                        'state_changed',
                        (error) => rej(error),
                        async() => {
                            imageUrl = await getDownloadURL(uploadTask.snapshot.ref)
                            res();
                        }
                    )
                })
            }

            await addDoc(collection(db , "products") , {
                ...product ,
                price: Number(product.price),
                imageUrl,
                createdAt: serverTimestamp()
            })
            alert('product added successfully')
            setUploading(false)
        } catch (error) {
            console.log(error)
            alert('error')
        }
    }
  return (
    <div>
      <div className='max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg mt-10'>
        <h2 className='text-2xl font-semibold mb-4'>Sell Your Product</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type="text" name='title' placeholder='Title' value={product.title} onChange={handleChange} className='border p-2 rounded-md' required />
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
