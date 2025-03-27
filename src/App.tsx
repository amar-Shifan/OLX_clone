import Home from "./components/Home/Home";
import { Route , Routes } from "react-router-dom"
import SellProduct from "./components/SellProduct/SellProduct"
import { ProductProvider } from "./components/Details/ProductContext";
import Details from "./components/Details/Details";


function App() {

  return (
    <>
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Home  />}/>
        <Route path="/sell" element={<SellProduct/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </ProductProvider>
    </>
  )
}

export default App
