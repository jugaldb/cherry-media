import React from 'react'
import './services.css'
function Services() {
  return (
    

      <div class="min-h-screen text-center py-20 px-8 xl:px-0 flex flex-col justify-center" data-aos="fade-up">
        <span class="text-gray-400 text-lg max-w-lg mx-auto capitalize flex items-center">what we're offering
        </span>
        <div className="services-heading text-center mb-[50px]">
            <h3 className='text-[33px] font-extrabold'>Services</h3>
        </div>
        <div class="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div class="card text-black p-10 relative max-[520px]:bg-[#ff5757]">
            <div class="circle">
            </div>
            <div class="relative lg:pr-52">
              <h2 class="capitalize mb-4 text-2xl xl:text-3xl max-[520px]:!text-[#fff]">uI/uX <br /> creative design</h2>
              <p class="text-gray-400 max-[520px]:text-[#fff]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
            <div class="icon"></div>
          </div>
          <div class="card  p-10 relative max-[520px]:bg-[#ff5757]">
            <div class="circle">
            </div>
            <div class="relative lg:pl-48">
              <h2 class="capitalize mb-4 text-2xl xl:text-3xl max-[520px]:!text-[#fff]">visual <br /> graphic design</h2>
              <p class="text-gray-400 max-[520px]:text-[#fff]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>
          <div class="card p-10 relative max-[520px]:bg-[#ff5757]">
            <div class="circle">
            </div>
            <div class="relative lg:pr-44">
              <h2 class="capitalize mb-4 text-2xl xl:text-3xl max-[520px]:!text-[#fff]">strategy & <br />digital marketing</h2>
              <p class="text-gray-400 max-[520px]:text-[#fff]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>
          <div class="card p-10 relative max-[520px]:bg-[#ff5757]">
            <div class="circle">
            </div>
            <div class="relative lg:pl-48">
              <h2 class="capitalize mb-4 text-2xl xl:text-3xl max-[520px]:!text-[#fff]">effective<br /> business growth</h2>
              <p class="text-gray-400 max-[520px]:text-[#fff]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>
        </div>

      </div>

      )
}

      export default Services