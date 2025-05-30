import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
    

  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    The best hand made accessories in town
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy&Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+961-71735291</li>
                <li>contact@hananaccessories.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr className='text-[#86580a]' />
            <p className='py-5 text-sm text-center'>Copyright {new Date().getFullYear()} &copy; All rights are reserved for Hananaccessories </p>
        </div>
    </div>
  )
}

export default Footer