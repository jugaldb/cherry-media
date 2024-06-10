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
              <h2 class="capitalize mb-4 text-2xl xl:text-3xl max-[520px]:!text-[#fff]">LinkedIn Management</h2>
              <p class="text-gray-400 max-[520px]:text-[#fff]">Optimize your profile for visibility with tailored headlines, summaries, and posts. Drive engagement, nurture your network, and generate quality leads.</p>
            </div>
            <div class="icon"></div>
          </div>
          <div class="card  p-10 relative max-[520px]:bg-[#ff5757]">
            <div class="circle">
            </div>
            <div class="relative lg:pl-48">
              <h2 class="capitalize mb-4 text-2xl xl:text-3xl max-[520px]:!text-[#fff]">Instagram Management</h2>
              <p class="text-gray-400 max-[520px]:text-[#fff]">Create a visually striking presence with custom content, compelling captions, and strategic hashtags. Track growth with monthly analytics and optimize continually.</p>
            </div>
          </div>
          <div class="card p-10 relative max-[520px]:bg-[#ff5757]">
            <div class="circle">
            </div>
            <div class="relative lg:pr-44">
              <h2 class="capitalize mb-4 text-2xl xl:text-3xl max-[520px]:!text-[#fff]">Website Development</h2>
              <p class="text-gray-400 max-[520px]:text-[#fff]">Build a custom website reflecting your brand with a sleek design and seamless functionality. Serve as a comprehensive digital hub for your brand.</p>
            </div>
          </div>
          <div class="card p-10 relative max-[520px]:bg-[#ff5757]">
            <div class="circle">
            </div>
            <div class="relative lg:pl-48">
              <h2 class="capitalize mb-4 text-2xl xl:text-3xl max-[520px]:!text-[#fff]">PR</h2>
              <p class="text-gray-400 max-[520px]:text-[#fff]">Amplify your brand through strategic PR. Secure media placements, craft compelling narratives and maintain key media relationships for consistent visibility.</p>
            </div>
          </div>
        </div>

      </div>

      )
}

      export default Services