import Main from "./components/Main/main"
import { Route , Routes } from "react-router-dom"
import SellProduct from "./components/SellProduct/SellProduct"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/sell" element={<SellProduct/>}/>
      </Routes>
    </>
  )
}

export default App
