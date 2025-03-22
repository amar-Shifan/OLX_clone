import React, { useState } from 'react'
import olx_logo from '../../assets/olx.png'
import lens_logo from '../../assets/lens.png'
import arrow from '../../assets/arrow.png'
import search from '../../assets/search.png'
import Login from '../Login/Login'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [loginPop , setLoginPop] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div className="flex items-center justify-between bg-gray-200 shadow-md px-4 py-3 lg:px-6">

        <img src={olx_logo} alt="OLX Logo" className="w-11 h-6" />

        <div className="hidden md:flex items-center bg-white border-2 border-blue-950 w-64 p-2 rounded-[4px] ml-5">
          <img src={lens_logo} alt="Lens" className="w-6 h-5 shadow-md" />
          <input type="text" placeholder="Location" className="pl-4 outline-none flex-1" />
          <img src={arrow} alt="Arrow" className="w-8 h-7" />
        </div>

        <div className="hidden md:flex bg-white h-12 border-2 border-blue-950 w-[400px] md:w-[600px] lg:w-[800px] rounded-[4px] items-center">
          <input type="text" placeholder="Find Cars, Mobile and more" className="ml-3 w-full outline-none" />
          <img src={search} alt="Search Icon" className=" h-12 w-16" />
        </div>

        <div className="hidden md:flex h-12 p-3 cursor-pointer">
          <h1 className="font-semibold">English</h1>
          <img src={arrow} className="w-6 h-5" alt="Dropdown" />
        </div>

        <div onClick={() => setLoginPop(!loginPop)} className="hidden md:flex h-12 p-3 cursor-pointer underline hover:no-underline">
          <h1 className="font-bold text-lg">Login</h1>
        </div>

        <div className="hidden md:flex bg-white items-center h-12 p-3 cursor-pointer rounded-full px-5 border-yellow-300 border-4">
          <h1 className="font-bold text-lg">+ SELL</h1>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-lg p-4">
          <div className="flex items-center bg-white border-2 border-blue-950 p-2 rounded-[4px]">
            <img src={lens_logo} alt="Lens" className="w-6 h-5 shadow-md" />
            <input type="text" placeholder="Location" className="pl-4 outline-none flex-1" />
            <img src={arrow} alt="Arrow" className="w-8 h-7" />
          </div>

          <div className="flex bg-white h-12 border-2 border-blue-950  rounded-[4px] mt-2">
            <input type="text" placeholder="Find Cars, Mobile and more" className="w-full outline-none" />
            <img src={search} alt="Search Icon" className="w-14 h-11 " />
          </div>

          <button className="mt-3 font-semibold">English</button>
          <button onClick={() => setLoginPop(!loginPop)} className="mt-2 font-bold text-lg underline">
            Login
          </button>
          <button className="mt-3 bg-yellow-300 p-3 rounded-full text-lg font-bold">+ SELL</button>
        </div>
      )}

      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  )
}

export default Navbar
