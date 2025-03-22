import React from 'react'
import guitar from '../../assets/guitar.png'
import google from '../../assets/google (1).png'
import phone from '../../assets/phone.png'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../firebase/firebase'

type popProp = {
    setLoginPop: any
}
const Login = (props:popProp) => {
    
    const googleSignin = async() => {
        try {
            await signInWithPopup(auth , googleProvider)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
        <div className = "fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-96 sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h1 className='font-semibold text-3xl cursor-pointer' onClick={()=> props?.setLoginPop(false)}>x</h1>
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2 ">
                        <img src={guitar} className='w-20 h-20 ml-32' alt="" />
                        <p className="font-medium text-gray-500  mt-5">Help us to become one of the safest place to buy and sell</p>
                        <div className='flex items-center cursor-pointer border-black border-2 p-2 rounded-md mt-2'>
                            <img src={phone} className='w-8 h-8' alt="" />
                            <h1 className='font-semibold ml-12 '>Continue with Phone</h1> 
                        </div>
                        <div  onClick={googleSignin} className='flex items-center border-black border-2 p-2 rounded-md mt-4 cursor-pointer' >
                            <img src={google} className='w-8 h-8' alt="" />
                            <h1 className='font-semibold ml-12'>Continue with Google</h1> 
                        </div>
                
                        <h1 className='text-center mt-4'>OR</h1>
                        <h1 className='text-center mt-4 cursor-pointer underline font-semibold'>Login with Email</h1>
                        <h1 className='text-center mt-24 text-xs font-semibold'>All your personal details are safe with us.</h1>
                        <h1 className='text-center mt-4 text-xs font-semibold'>If you continue, you are accepting <span className='text-blue-600'>OLX Terms and <br />Conditions and Privacy Policy</span></h1>
                       
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Login
