import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'About'} text2={'Us'} />
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At Hanan Accessories, we take pride in offering beautifully crafted, handmade jewelry and accessories that reflect elegance and individuality. Each piece is carefully designed and created by skilled artisans, ensuring unique, high-quality craftsmanship that stands out from mass-produced items. Our commitment to handmade artistry means every detail is thoughtfully considered, from the selection of materials to the final finishing touches. </p>
            <p>Whether you're looking for a statement piece or a subtle accent, Hanan Accessories brings you timeless, handcrafted designs that celebrate creativity and personal style. Discover the charm of handmade elegance—where every piece tells a story.</p>
          </div>
          <div className='text-xl py-4'>
            <Title text1={'Why'} text2={'Choose Us'} />
          </div>
          <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p>We meticulously select and checked each product to ensure it meets our quality standards</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p>With our user-friendly interface and hassle-free ordering process </p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p>We make sure to keep in touch with our customers </p>
            </div>
          </div>
          <NewsletterBox />
        </div>
    </div>
  )
}

export default About