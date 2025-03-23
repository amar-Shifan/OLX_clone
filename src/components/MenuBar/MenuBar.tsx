import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import arrow from '../../assets/arrow.png'

const CategoriesNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex shadow-md mt-1 items-center justify-between px-4 py-2">
      {/* Left Section - All Categories */}
      <div className="flex md:w-1/4 justify-center cursor-pointer">
        <h1 className="font-bold">ALL CATEGORIES</h1>
        <img src={arrow} className="w-7 h-7 ml-2" alt="Arrow" />
      </div>

      {/* Desktop Categories */}
      <div className="hidden md:flex items-center md:w-3/4 justify-start">
        <h1 className="ml-4">Cars</h1>
        <h1 className="ml-4">Gadgets</h1>
        <h1 className="ml-4">Laptops</h1>
        <h1 className="ml-4">Apartments</h1>
        <h1 className="ml-4">Mobile Phones</h1>
        <h1 className="ml-4">Bikes</h1>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden -z-10 absolute top-16 left-0 w-full bg-white shadow-lg p-4">
          <h1 className="py-2 cursor-pointer">Cars</h1>
          <h1 className="py-2 cursor-pointer">Gadgets</h1>
          <h1 className="py-2 cursor-pointer">Laptops</h1>
          <h1 className="py-2 cursor-pointer">Apartments</h1>
          <h1 className="py-2 cursor-pointer">Mobile Phones</h1>
          <h1 className="py-2 cursor-pointer">Bikes</h1>
        </div>
      )}
    </div>
  );
};

export default CategoriesNav;
