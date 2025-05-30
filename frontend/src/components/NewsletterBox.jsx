import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (event)=>{
    event.preventDefault();
  }
  
    return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% off </p>
        <p className='text-gray-400 mt-3'></p>

        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' action="">
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' name="" id="" required />
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox