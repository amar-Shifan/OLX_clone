import Home from "./components/Home/Home";
import { Route , Routes } from "react-router-dom"
import SellProduct from "./components/SellProduct/SellProduct"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home  />}/>
        <Route path="/sell" element={<SellProduct/>}/>
      </Routes>
    </>
  )
}

export default App
