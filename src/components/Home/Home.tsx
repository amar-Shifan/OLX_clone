import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import MenuBar from '../MenuBar/MenuBar'
import { collection , getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase';

interface Product {
  id:string;
  title:string;
  description:string;
  price:number;
  category:string;
  location:string;
  imageUrl:string;
  userId:string;
  userName:string
}
  

const Home = () => {

  const [products , setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async() => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productArray = querySnapshot.docs.map(doc => ({id:doc.id , ...doc.data()})) as Product[]
      setProducts(productArray)
    };
    fetchProducts();
  } ,[])
  return (
    <div>
      <Navbar/>
      <MenuBar/>
      <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
            <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <h3 className="text-lg font-semibold">{product.userName}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-lg font-bold mt-2">₹{product.price}</p>
            <p className="text-sm text-gray-500">{product.category} • {product.location}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home
