import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
function HeroSection() {
  return (
    <>
      <div className="heroSectionWrapper">
        <div className="container mx-auto">
          <div className="heroSection flex justify-between items-center h-screen relative max-[978px]:w-[100%] max-[978px]:h-[600px]">
            <div className="heroText w-[70%] max-[978px]:text-center max-[978px]:w-[100%]">
              <h1 className='text-6xl font-extrabold max-[978px]:text-5xl'>Build Authority.</h1>
              <h2 className='text-6xl font-extrabold mt-2 max-[978px]:text-5xl'>Monetize <span className='text-[#ff5757]'>Your LinkedIn</span>.</h2>
              <p className='w-[70%] my-5 max-[978px]:w-[100%]'>Get the free Newsletter helping 7,500+ Service-Based Biz Owners build Authority online, turn LinkedIn into a 6-figure revenue channel, and create the life & business they love to wake up to.</p>
              <button><Link to='/'  className='btn'>Contact Us <i className="fa-solid fa-arrow-right ms-2" /></Link></button>
            </div>

            <div className="heroImgWrapper max-[978px]:hidden">
              <img className='heroImg absolute top-0 right-0' src="images/hero-image 1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection