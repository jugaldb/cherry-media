import React from 'react'
import { Link } from 'react-router-dom'
import "./HomePage.css"
import TestimonialSlider from './Testimonal';
import Timeline from './Timeline';


function HeroSection() {


  
  return (
    <>
      <div className="heroSectionWrapper max-[420px]:py-2">
        <div className="container mx-auto">
          <div className="heroSection flex justify-between items-center h-screen relative max-[978px]:w-[100%] max-[978px]:h-[600px] max-[420px]:h-[100%] max-[520px]:flex-col">
            <div className="heroText w-[70%] max-[978px]:text-center max-[978px]:w-[100%]">
              <h2 className='text-6xl font-extrabold mt-2 max-[978px]:text-5xl max-[420px]:text-xl'>Monetize Your <span className='text-[#ff5757] max-[420px]:leading-none'>LinkedIn</span>.</h2>
              <p className='w-[50%] my-5 max-[978px]:w-[100%]'>Get the free Newsletter helping 7,500+ Service-Based Biz Owners build Authority online.</p>
              <button className='my-6'><Link to='/' className='btn hover:bg-transparent'>Contact Us <i className="fa-solid fa-arrow-right ms-2" /></Link></button>
            </div>

            <div className="heroImgWrapper">
              <img className='heroImg absolute z-[-1] top-[-54%] right-0 w-[70%] max-[520px]:top-[-10%] max-[520px]:left-[15%] max-[520px]:relative' src="images/market.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="aboutUswrapper py-6" id='aboutUs'>
        <div className="container mx-auto">
          <div className="aboutUs">
            <div className="aboutUsHeading text-center w-[80%] mx-auto py-6 max-[320px]:w-[95%]">
              <h2 className='text-[33px] font-extrabold'>About Us</h2>
              <p className='max-[978px]:text-[15px] max-[320px]:text-[10px]'>Get the free Newsletter helping 7,500+ Service-Based Biz Owners build Authority online, turn LinkedIn into a 6-figure revenue channel, and create the life & business they love to wake up to.</p>
            </div>

            <div className="aboutUsItems flex justify-between gap-[35px] py-6 max-[978px]:flex-col">
              <div className="aboutItem bg-[#f3f3f3] px-[10px] py-[25px] pt-[55px] rounded-lg hover:bg-[#ff5757] hover:text-[#fff] px-6">
                <h4 className='text-[25px] font-extrabold relative before:absolute before:w-[40px] before:h-[1px] before:bg-[#ff5757] before:top-[-6px]'>Who we are?</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga architecto labore eius voluptas suscipit doloremque eligendi ipsa quia vero.</p>
              </div>

              <div className="aboutItem bg-[#f3f3f3] px-[10px] py-[25px] pt-[55px] rounded-lg hover:bg-[#ff5757] hover:text-[#fff] px-6">
                <h4 className='text-[25px] font-extrabold relative before:absolute before:w-[40px] before:h-[1px] before:bg-[#ff5757] before:top-[-6px]'>Who we are?</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga architecto labore eius voluptas suscipit doloremque eligendi ipsa quia vero.</p>
              </div>

              <div className="aboutItem bg-[#f3f3f3] px-[10px] py-[25px] pt-[55px] rounded-lg hover:bg-[#ff5757] hover:text-[#fff] px-6">
                <h4 className='text-[25px] font-extrabold relative before:absolute before:w-[40px] before:h-[1px] before:bg-[#ff5757] before:top-[-6px]'>Who we are?</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga architecto labore eius voluptas suscipit doloremque eligendi ipsa quia vero.</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="achivmentWrapper py-6">
        <div className="container mx-auto">
          <div className="achivmentHeading text-center w-[80%] mx-auto py-6 max-[320px]:w-[95%]">
            <h3 className='text-[33px] font-extrabold'>Our Achievement</h3>
            <p className='max-[978px]:text-[15px] max-[320px]:text-[10px]'>Get the free Newsletter helping 7,500+ Service-Based Biz Owners build Authority online, turn LinkedIn into a 6-figure revenue channel, and create the life & business they love to wake up to.</p>
          </div>

          <div className="achievements flex justify-around py-6 max-[978px]:flex-col max-[978px]:gap-[25px]">

            <div className="achievement text-center max-[978px]:basis-1/4">
              <i class="fa-regular fa-copy text-[40px]  hover:text-[#ff5757]" />
              <h6 className='text-[23px] font-extrabold'>1000+</h6>
              <p>Client Served</p>
            </div>

            <div className="achievement text-center max-[978px]:basis-1/4">
              <i class="fa-solid fa-file-circle-check text-[40px] hover:text-[#ff5757]" />
              <h6 className='text-[23px] font-extrabold'>1100+</h6>
              <p>Positive Reviews</p>
            </div>

            <div className="achievement text-center max-[978px]:basis-1/4">
              <i class="fa-solid fa-face-smile text-[40px] hover:text-[#ff5757]" />
              <h6 className='text-[23px] font-extrabold'>100+</h6>
              <p>Team Members</p>
            </div>

            <div className="achievement text-center max-[978px]:basis-1/4">
              <i class="fa-solid fa-group-arrows-rotate text-[40px] hover:text-[#ff5757]" />
              <h6 className='text-[23px] font-extrabold'>1500+</h6>
              <p>Project Completed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="timelineWrapper">
        <div className="container mx-auto">
          <div className="workProcessHeading text-center w-[80%] mx-auto py-6 max-[320px]:w-[95%]">
            <h3 className='text-[33px] font-extrabold'>Our Process</h3>
            <p className='max-[978px]:text-[15px] max-[320px]:text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus ducimus commodi amet laudantium omnis similique minus, nihil, corporis, enim dolores sit! Nam consequuntur a earum autem, quaerat enim ad?</p>
          </div>
          <Timeline />
        </div>
      </div>

      <div className="testimonialWrapper py-6" id='testimonial'>
        <div className="container mx-auto">
          <div className="testi-heading text-center py-6">
            <h3 className='text-[33px] font-extrabold'>Testimonials</h3>
          </div>
          <TestimonialSlider />
        </div>  
      </div>      

      <div className="services py-6" id='services'>
        <div className="container mx-auto">
          <div className="testi-heading text-center py-6">
            <h3 className='text-[33px] font-extrabold'>Services</h3>
          </div>


          <ul className="serviceItems grid grid-cols-3 gap-x-4 gap-y-4 text-center py-6 relative">
              <li><Link className='serviceItem' to='/'>Hello WOrk</Link>
                <div className="serviceDetails absolute w-[100%] h-[100%] top-0 left-0 bg-[#ff5757] py-2 px-2">
                  <h4 className='mb-3'>Demo Service</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque velit consequatur, sunt incidunt obcaecati, itaque tenetur commodi quaerat illum nostrum accusamus rerum fugit facilis. Est praesentium impedit eaque sit quam dolorum, nemo, quo blanditiis iusto natus reiciendis aspernatur. Aliquid, explicabo at? Similique odio provident veritatis rem velit! Fuga, sunt.</p>
                </div>
              </li>
              <li><Link className='serviceItem' to='/'>Hello WOrk</Link>
              <div className="serviceDetails absolute w-[100%] h-[100%] top-0 left-0 bg-[#ff5757] py-2 px-2"><h4 className='mb-3'>Demo Service 2</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque velit consequatur, sunt incidunt obcaecati, itaque tenetur commodi quaerat illum nostrum accusamus rerum fugit facilis. Est praesentium impedit eaque sit quam dolorum, nemo, quo blanditiis iusto natus reiciendis aspernatur. Aliquid, explicabo at? Similique odio provident veritatis rem velit! Fuga, sunt.</p></div>
              </li>
              <li><Link className='serviceItem' to='/'>Hello WOrk</Link>
              <div className="serviceDetails absolute w-[100%] h-[100%] top-0 left-0 bg-[#ff5757] py-2 px-2"><h4 className='mb-3'>Demo Service 3</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque velit consequatur, sunt incidunt obcaecati, itaque tenetur commodi quaerat illum nostrum accusamus rerum fugit facilis. Est praesentium impedit eaque sit quam dolorum, nemo, quo blanditiis iusto natus reiciendis aspernatur. Aliquid, explicabo at? Similique odio provident veritatis rem velit! Fuga, sunt.</p></div>
              </li>
              <li><Link className='serviceItem' to='/'>Hello WOrk</Link>
              <div className="serviceDetails absolute w-[100%] h-[100%] top-0 left-0 bg-[#ff5757] py-2 px-2"><h4 className='mb-3'>Demo Service 4</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque velit consequatur, sunt incidunt obcaecati, itaque tenetur commodi quaerat illum nostrum accusamus rerum fugit facilis. Est praesentium impedit eaque sit quam dolorum, nemo, quo blanditiis iusto natus reiciendis aspernatur. Aliquid, explicabo at? Similique odio provident veritatis rem velit! Fuga, sunt.</p></div>
              
              </li>
              <li><Link className='serviceItem' to='/'>Hello WOrk</Link>
              <div className="serviceDetails absolute w-[100%] h-[100%] top-0 left-0 bg-[#ff5757] py-2 px-2"><h4 className='mb-3'>Demo Service 5</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque velit consequatur, sunt incidunt obcaecati, itaque tenetur commodi quaerat illum nostrum accusamus rerum fugit facilis. Est praesentium impedit eaque sit quam dolorum, nemo, quo blanditiis iusto natus reiciendis aspernatur. Aliquid, explicabo at? Similique odio provident veritatis rem velit! Fuga, sunt.</p></div>
              </li>
              <li><Link className='serviceItem' to='/'>Hello WOrk</Link></li>
              
          </ul>
        </div>
      </div>


      <div className="FAQwrapper py-6">
        <div className="container mx-auto">
          <div className="accordion">
            <h1 className='py-6 font-extrabold'>Frequently Asked Questions</h1>
            <div className="accordion-item">
              <input type="checkbox" id="accordion1" />
              <label for="accordion1" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>What is SEO, and why is it important for online businesses?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">SEO, or Search Engine Optimization, is the practice of optimizing a website to improve its visibility on search engines like Google. It involves various techniques to enhance a site's ranking in search results. SEO is crucial for online businesses as it helps drive organic traffic, increases visibility, and ultimately leads to higher conversions.</div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="accordion2" />
              <label for="accordion2" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>How long does it take to see results from SEO efforts?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">The timeline for seeing results from SEO can vary based on several factors, such as the competitiveness of keywords, the current state of the website, and the effectiveness of the SEO strategy. Generally, it may take several weeks to months before noticeable improvements occur. However, long-term commitment to SEO is essential for sustained success.</div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="accordion3" />
              <label for="accordion3" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>What are the key components of a successful SEO strategy?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">A successful SEO strategy involves various components, including keyword research, on-page optimization, quality content creation, link building, technical SEO, and user experience optimization. These elements work together to improve a website's relevance and authority in the eyes of search engines.</div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="accordion4" />
              <label for="accordion4" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>How does mobile optimization impact SEO?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">Mobile optimization is crucial for SEO because search engines prioritize mobile-friendly websites. With the increasing use of smartphones, search engines like Google consider mobile responsiveness as a ranking factor. Websites that provide a seamless experience on mobile devices are more likely to rank higher in search results.</div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="accordion5" />
              <label for="accordion5" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>What is the role of backlinks in SEO, and how can they be acquired?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">Backlinks, or inbound links from other websites to yours, play a significant role in SEO. They are considered a vote of confidence and can improve a site's authority. Quality over quantity is crucial when acquiring backlinks. Strategies for obtaining backlinks include creating high-quality content, guest posting, reaching out to industry influencers, and participating in community activities. It's important to focus on natural and ethical link-building practices.</div>
            </div>

          </div>
        </div>
      </div>


      <div className="footerWrapper bg-[#161616] text-[#fff] py-6 max-[520px]:px-[20px]">
        <div className="container mx-auto">
          <div className="footer flex justify-between gap-[100px] py-6 max-[520px]:flex-col">

            <div className='companyDetails basis-2/4'>
              <div className="logo">
                <Link to="/">
                  <h3 className="logoName text-[23px] font-bold">Cherry Media<span className="text-[#ff5757] text-3xl">.</span></h3>
                </Link>
              </div>

              <div className="details my-3">
                <p className='text-[#838383]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, recusandae!</p>
              </div>
              <div className="map">
                 <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487293.4778740955!2d78.07836522305928!3d17.412733230437688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714030867725!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>

            </div>

            <div className='findUs basis-1/4'>
              <div className="footerHeading">
                <h3 className='font-bold text-[1.5rem]'>Find Us</h3>
              </div>
              <div className="address my-3">
                <h6 className=''>Address:</h6>
                <p className='text-[#838383]'>Block 2 - 1202, My Home Vihanga, My Home Vihanga Road, GachiBowli, Hyderabad, 500032</p>
              </div>
              <div className="email">
                <h6 className=''>E-mail:</h6>
                <p className='text-[#838383]'>contact@muskanagarwal.co.in</p>
              </div>

              <div className="phone my-3">
                <h6 className=''>Phone No:</h6>
                <p className='text-[#838383]'>+91-70818 27226</p>
              </div>
            </div>

            <div className='contactUs basis-3/4'>

              <div className="footerHeading max-[520px]:text-start"><h3 className='font-bold text-[1.5rem]'>Contact Us</h3></div>
{/* 
              <div className="nameInput my-3 flex justify-center max-[520px]:justify-between max-[520px]:flex-col max-[520px]:gap-[20px]">
                <input className='py-3 px-2 rounded-[2px] me-2 focus:outline-none text-[#838383] max-[520px]:m-0' type="text" placeholder='First Name' />
                <input className='py-3 px-2 rounded-[2px] focus:outline-none text-[#838383]' type="text" placeholder='Last Name' />
              </div>
              <div className="experienceInput text-center my-4">
                <textarea className='py-3 px-2 rounded-[2px] w-[100%] focus:outline-none text-[#838383] max-[520px]:w-[100%]' type="text" placeholder='Your Experience!' />
              </div>
              <button className='btn focus:outline-none hover:text-[#fff] block py-[15px] px-[50px] max-[520px]:inline-block' ><Link to='/'>Submit</Link></button> */}
              


                  <iframe title='form' className='w-[100%] h-[100%]' src="https://docs.google.com/forms/d/e/1FAIpQLSfgwbg1uM_cCDC_lIny3YJwNsuMkVOfFW1ZLQzGOtJU6c4ZaA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" />
              
              
               
            </div>
          </div>


          <div className="copyrightInfo flex justify-between pt-6">
            <div className="socialIcons flex justify-start gap-[10px]">
                  <Link className='hover:text-[#0077B5] text-[20px]' to='https://www.linkedin.com/company/cherrymediahouse/' target="_blank"><i className="fa-brands fa-linkedin" /></Link>
                  <Link className='hover:text-[#000] text-[20px]' to='https://twitter.com/TheCherryMediaa'  target="_blank"><i className="fa-brands fa-x-twitter" /></Link>
                  <Link className='text-[20px]' to='/' target="_blank"><i className="fa-brands fa-instagram" /></Link>
            </div>
            <div className="copyRight">Copyright &copy; Cherry Media</div>
          </div>
        </div>

      
      </div>
    </>
  )
}

export default HeroSection;