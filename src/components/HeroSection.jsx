import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'


function HeroSection() {
  return (


      <div class="section banner banner-section">
            <div class="container banner-row flex justify-between items-center flex-row-reverse max-[978px]:flex-col-reverse">
              <img class="banner-image w-[50%] max-[978px]:w-[100%]" src="images/market.png" alt="Illustration" />
              <div class="banner-inner max-[978px]:w-[100%]">
              <h2 className='text-5xl font-extrabold mt-2 max-[978px]:text-5xl max-[420px]:text-xl'>Monetize Your <span className='text-[#ff5757] max-[420px]:leading-none'>social media</span>.</h2>
              <p className='w-[100%] my-5 max-[978px]:w-[100%]'>Let <strong>Cherry Media</strong> transform your LinkedIn, Instagram, and Twitter into powerful revenue streams.</p>
              <button className='my-6'><Link to='https://calendly.com/muskan-thecherrymedia' target='_blank' className='btn hover:bg-transparent'>schedule a call<i class="fa-solid fa-phone ms-2" /></Link></button>
              </div>
            </div>
        </div>
    
  )
}

export default HeroSection