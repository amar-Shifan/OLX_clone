import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import MenuBar from '../MenuBar/MenuBar'
import { fetchProducts } from '../../services/productService'
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Details/ProductContext";
import Footer from '../Footer/Footer';

interface Product {
  name: string;
  description:string;
  price:number;
  category:string;
  location: string;
  userId:string;
  userName:string;
  image: string;
}
  

const Home = () => {

  const [products , setProducts] = useState<Product[]>([]);
  const { setSelectedProduct } = useProduct();
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts().then(setProducts)
  },[])
  
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    navigate("/details"); 
  };

  return (
    <div>
      <Navbar/>
      <MenuBar/>
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {products.map(product => (
            <div key={product.name} onClick={() => handleProductClick(product)} className="bg-white p-4 border border-spacing-1 shadow-md rounded-lg">
              <img src={`http://localhost:3000/${product.image}`} alt={product.name} className="w-full h-40 object-cover rounded-sm mb-4" />
              <p className="text-lg font-bold mt-2">₹{product.price}</p>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category} • {product.location}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
