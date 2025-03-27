import React from 'react'

const Footer = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-3 px-40 py-10 mt-20 bg-slate-200 w-full'>
      <div className='p-5'>
        <h1 className='font-bold mb-3'>Popular Locations</h1>
        <p className='opacity-70 text-xs'>Kolkata</p>
        <p className='opacity-70 text-xs'>Mumbai</p>
        <p className='opacity-70 text-xs'>Mumbai</p>
        <p className='opacity-70 text-xs'>Mumbai</p>
      </div>
      <div className='p-5'>
        <h1 className='font-bold mb-3'>Trending Locations</h1>
        <p className='opacity-70 text-xs'>Kolkata</p>
        <p className='opacity-70 text-xs'>Mumbai</p>
        <p className='opacity-70 text-xs'>Mumbai</p>
        <p className='opacity-70 text-xs'>Bhubaneshwar</p>
      </div>
      <div className='p-5'>
        <h1 className='font-bold mb-3'>About Us</h1>
        <p className='opacity-70 text-xs'>Tech@OLX</p>
        
      </div>
      <div className='p-5'>
        <h1 className='font-bold mb-3'>OLX</h1>
        <p className='opacity-70 text-xs'>Kolkata</p>
        <p className='opacity-70 text-xs'>Mumbai</p>
        <p className='opacity-70 text-xs'>Legal & Privacy information</p>
        <p className='opacity-70 text-xs'>Vulnerability Disclosure Program</p>
      </div>
    </div>
  )
}

export default Footer
