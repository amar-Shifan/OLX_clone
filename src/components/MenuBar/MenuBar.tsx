import React from 'react'
import arrow from '../../assets/arrow.png'

const MenuBar = () => {
  return (
    <div className='flex shadow-md mt-1 items-center justify-around'>
      <div className='flex md:w-1/4 justify-center'>
        <h1 className='font-bold'>ALL CATEGORIES</h1>
        <img src={arrow} className='w-7 h-7' alt="" />
      </div>
      <div className='flex items-center md:w-3/4 justify-start'>
        <h1 className='ml-4'>Cars</h1>
        <h1 className='ml-4'>Gadgets</h1>
        <h1 className='ml-4'>Laptops</h1>
        <h1 className='ml-4'>Appartments</h1>
        <h1 className='ml-4'>Mobile phone</h1>
        <h1 className='ml-4'>Bikes</h1>
      </div>
    </div>
  )
}

export default MenuBar
