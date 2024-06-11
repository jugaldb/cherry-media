import React from 'react'
import { Link } from 'react-router-dom'
import "./HomePage.css"
import TestimonialSlider from './Testimonal';
import Timeline from './Timeline';
import HeroSection from './HeroSection';
import Services from './services';
import AchievementSection from './Achievement';
import GoToTop from './GoToTop';



 
          
function HomePage() {

  return (
    <div>
      <GoToTop />


      <div className="heroSectionWrapper max-[420px]:py-2">
        <div className="container mx-auto">
          <HeroSection /> 
        </div>
      </div>

      <div className="aboutUswrapper py-[30px] max-[520px]:py-[10px]" id='aboutUs' data-aos="fade-up">
        <div className="container mx-auto">
          <div className="aboutUs">
            <div className="aboutUsHeading text-center w-[100%] mx-auto py-6 max-[520px]:w-[100%]">
              <h2 className='text-[33px] font-extrabold'>About Us</h2>
              <p className='max-[978px]:text-[15px] max-[520px]:text-[10px]'>Cherrymedia is a social media management agency specialising in LinkedIn, Instagram, and Twitter. We help service-based business owners build strong online brands, engage their audience, and drive business growth with tailored strategies and expert insights.</p>
            </div>

            <div className="aboutUsItems flex justify-between gap-[35px] py-6 max-[978px]:flex-col">
              <div className="aboutItem bg-[#f3f3f3] px-[10px] py-[25px] pt-[55px] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ff5757] hover:text-[#fff] duration-300 px-6 max-[520px]:hover:transform-none">
                <h4 className='text-[25px] font-extrabold relative before:absolute before:w-[40px] before:h-[1px] before:bg-[#ff5757] before:top-[-6px]'>Who are we?</h4>
                <p>Cherrymedia is a team of passionate social media experts who understand the art and science of online engagement.</p>
              </div>

              <div className="aboutItem bg-[#f3f3f3] px-[10px] py-[25px] pt-[55px] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ff5757] hover:text-[#fff] duration-300 px-6 max-[520px]:hover:transform-none">
                <h4 className='text-[25px] font-extrabold relative before:absolute before:w-[40px] before:h-[1px] before:bg-[#ff5757] before:top-[-6px]'>Our expertise</h4>
                <p>With a team of experts, Cherrymedia offers personalised strategies that elevate your online presence, from crafting engaging content to expanding your network. We got you all.</p>
              </div>

              <div className="aboutItem bg-[#f3f3f3] px-[10px] py-[25px] pt-[55px] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ff5757] hover:text-[#fff] duration-300 px-6 max-[520px]:hover:transform-none">
                <h4 className='text-[25px] font-extrabold relative before:absolute before:w-[40px] before:h-[1px] before:bg-[#ff5757] before:top-[-6px]'>Why choose us?</h4>
                <p>We understand the differences between each platform and how to leverage them for maximum impact. Our tailored approach ensures that your social media profiles stand out and drive real, measurable results.</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="achivmentWrapper py-[30px] max-[520px]:py-[10px]" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="achivmentHeading text-center w-[80%] mx-auto py-6 max-[520px]:w-[100%]">
            <h3 className='text-[33px] font-extrabold'>Our Achievement</h3>
            <p className='max-[978px]:text-[15px] max-[520px]:text-[10px]'>Get the free Newsletter helping 7,500+ Service-Based Biz Owners build Authority online, turn LinkedIn into a 6-figure revenue channel, and create the life & business they love to wake up to.</p>
          </div>

          {/* <div className="achievements flex justify-around py-6 max-[978px]:flex-col max-[978px]:gap-[25px]">

            <div className="achievement text-center bg-[#fff] flex justify-between gap-[10px] items-center max-[978px]:basis-1/4">
              <i class="fa-regular fa-copy text-[40px]  hover:text-[#ff5757]" />
              <h6 className='text-[23px] font-extrabold'>1000+</h6>
              <p>Client Served</p>
            </div>

            <div className="achievement text-center bg-[#fff] flex justify-between gap-[10px] items-center max-[978px]:basis-1/4">
              <i class="fa-solid fa-file-circle-check text-[40px] hover:text-[#ff5757]" />
              <h6 className='text-[23px] font-extrabold'>1100+</h6>
              <p>Positive Reviews</p>
            </div>

            <div className="achievement text-center bg-[#fff] flex justify-between gap-[10px] items-center max-[978px]:basis-1/4">
              <i class="fa-solid fa-face-smile text-[40px] hover:text-[#ff5757]" />
              <h6 className='text-[23px] font-extrabold'>100+</h6>
              <p>Team Members</p>
            </div>

            <div className="achievement text-center bg-[#fff] flex justify-between gap-[10px] items-center max-[978px]:basis-1/4">
              <i class="fa-solid fa-group-arrows-rotate text-[40px] hover:text-[#ff5757]" />
              <h6 className='text-[23px] font-extrabold'>1500+</h6>
              <p>Project Completed</p>
            </div>
          </div> */}

          <AchievementSection />
        </div>
      </div>
      

      <div className="timelineWrapper py-[30px] max-[520px]:py-[10px]">
        <div className="container mx-auto">
          <div className="workProcessHeading text-center w-[80%] mx-auto py-6 max-[520px]:w-[100%]">
            <h3 className='text-[33px] font-extrabold'>Our Process</h3>
            <p className='max-[978px]:text-[15px] max-[520px]:text-[10px]'>We help you by providing personalised plans to grow on LinkedIn, Instagram and Twitter with expert strategies to boost engagement and drive business growth.</p>
          </div>
          <Timeline />
        </div>
      </div>

      <div className="testimonialWrapper py-[30px] max-[520px]:py-[10px]" id='testimonial'>
        <div className="container mx-auto">
          <div className="testi-heading text-center py-6">
            <h3 className='text-[33px] font-extrabold'>Testimonials</h3>
          </div>
          <TestimonialSlider />
        </div>  
      </div>      

      <div className="services py-[30px] max-[520px]:py-[10px]" id='services'>
        <div className="container mx-auto">
            <Services />
        </div>
      </div>


      <div className="FAQwrapper py-[30px] max-[520px]:py-[10px]" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="accordion">
            <h1 className='py-6 font-extrabold'>Frequently Asked Questions</h1>
            <div className="accordion-item" data-aos="fade-up">
              <input type="checkbox" id="accordion1" />
              <label for="accordion1" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>Can you increase from 0 to 10k followers in 2 months?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">We focus on building an engaged, relevant audience through quality content, not arbitrary follower counts. Our approach prioritizes lead generation, networking, and compelling content tailored to your brand.</div>
            </div>

            <div className="accordion-item" data-aos="fade-up">
              <input type="checkbox" id="accordion2" />
              <label for="accordion2" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>How long until I see results?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">You'll see some early traction, but we recommend at least 6 months to see significant brand-building results. Establishing an authentic presence takes consistent effort over time</div>
            </div>

            <div className="accordion-item" data-aos="fade-up">
              <input type="checkbox" id="accordion3" />
              <label for="accordion3" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>Do you handle personal brands, business brands or both? Custom rates?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">We specialize in personal brands for professionals. For business brands, we offer customized packages and rates to manage both personal and business brand presence seamlessly.</div>
            </div>

            <div className="accordion-item" data-aos="fade-up">
              <input type="checkbox" id="accordion4" />
              <label for="accordion4" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>Do you offer SEO-optimized blogs?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">Yes, we offer SEO-optimized blogs at competitive rates. Our skilled writers create engaging content that ranks well in search engines and reinforces your brand voice. With keyword research and optimized on-page elements, our blogs drive organic traffic and establish you as a thought leader.</div>
            </div>

            <div className="accordion-item" data-aos="fade-up">
              <input type="checkbox" id="accordion5" />
              <label for="accordion5" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>How do you measure brand growth and success?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">We set clear KPIs and use advanced analytics to measure your brand's performance across channels. This data-driven approach optimizes strategies, identifies growth opportunities, and quantifies success. Regular reports keep you informed.</div>
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
                <p className='text-[#838383]'>We are a social media management agency specializing in LinkedIn, Instagram and Twitter.</p>
              </div>
              <div className="map">
                 <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487293.4778740955!2d78.07836522305928!3d17.412733230437688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714030867725!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>

            </div>

            <div className='findUs basis-2/4'>
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

            <div className='contactUs basis-1/4'>

              <div className="footerHeading max-[520px]:text-start"><h3 className='font-bold text-[1.5rem]'>Contact Us</h3></div>
              {/* <button className='btn'><Link to='/contact'>Let's Talk</Link></button> */}
               
               <form action="submit" className='flex justify-between flex-col gap-[20px] mt-5'>
                <div className="nameField flex justify-between gap-[10px] max-[520px]:flex-col">
                  <input type="text" className='py-3 rounded ps-2 bg-[#ffffff17] focus:outline-none' placeholder='First Name' name="firstName" id="" />
                  <input type="text" className='py-3 rounded ps-2 bg-[#ffffff17] focus:outline-none' placeholder='Last Name' name="lastName" id="" />
                </div>
                <div className="textField">
                  <textarea className='w-[100%] ps-2 pt-2 rounded bg-[#ffffff17] focus:outline-none' rows="5" placeholder='Share Your Experience' name="textField" id=""></textarea>
                </div>

                <button className='btn w-[40%]'><Link to='/'>Let's Talk</Link></button>

               </form>

            </div>
          </div>


          <div className="copyrightInfo flex justify-between pt-6">
            <div className="socialIcons flex justify-start gap-[10px]">
                  <Link className='hover:text-[#0077B5] text-[20px]' to='https://www.linkedin.com/company/cherrymediahouse/' target="_blank"><i className="fa-brands fa-linkedin" /></Link>
                  <Link className='hover:text-[#000] text-[20px]' to='https://twitter.com/TheCherryMediaa'  target="_blank"><i className="fa-brands fa-x-twitter" /></Link>
                  <Link className='text-[20px]' to='https://www.linkedin.com/company/cherrymediahouse/' target="_blank"><i className="fa-brands fa-instagram" /></Link>
            </div>
            <div className="copyRight">Copyright &copy; Cherry Media</div>
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default HomePage;