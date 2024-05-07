import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'


function HeroSection() {
  return (


      <div class="section banner banner-section">
            <div class="container banner-row flex justify-between items-center flex-row-reverse max-[978px]:flex-col-reverse">
              <img class="banner-image w-[50%] max-[978px]:w-[100%]" src="images/market.png" alt="Illustration" />
              <div class="banner-inner max-[978px]:w-[100%]">
              <h2 className='text-5xl font-extrabold mt-2 max-[978px]:text-5xl max-[420px]:text-xl'>Monetize Your <span className='text-[#ff5757] max-[420px]:leading-none'>LinkedIn</span>.</h2>
              <p className='w-[70%] my-5 max-[978px]:w-[100%]'>Get the free Newsletter helping 7,500+ Service-Based Biz Owners build Authority online.</p>
              <button className='my-6'><Link to='/' className='btn hover:bg-transparent'>Contact Us <i className="fa-solid fa-arrow-right ms-2" /></Link></button>
              </div>
            </div>
        </div>
    
  )
}

export default HeroSection