import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'
function Timeline() {
  return (
    <>
        
        <div className='py-6 verticalCss'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255, 87, 87, 1)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255, 87, 87, 1)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(30, 30, 30, 1)', color: '#fff' }}
              // icon={<i class="fa-solid fa-briefcase" />}
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              contentStyle={{ background: 'rgb(255, 87, 87, 1)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255, 87, 87, 1)' }} 
              iconStyle={{background: 'rgb(30, 30, 30, 1)', color: '#fff' }}
              
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              contentStyle={{ background: 'rgb(255, 87, 87, 1)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255, 87, 87, 1)' }} 
              iconStyle={{background: 'rgb(30, 30, 30, 1)', color: '#fff' }}
              
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>



            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              contentStyle={{ background: 'rgb(255, 87, 87, 1)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255, 87, 87, 1)' }} 
              iconStyle={{background: 'rgb(30, 30, 30, 1)', color: '#fff' }}
              
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>



            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              contentStyle={{ background: 'rgb(255, 87, 87, 1)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255, 87, 87, 1)' }} 
              iconStyle={{background: 'rgb(30, 30, 30, 1)', color: '#fff' }}
              
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            

            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
              <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
              <p>
                Strategy, Social Media
              </p>
            </VerticalTimelineElement> */}

            {/* <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
              <h4 className="vertical-timeline-element-subtitle">Certification</h4>
              <p>
                Creative Direction, User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
              <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
              <p>
                Creative Direction, Visual Design
              </p>
            </VerticalTimelineElement> */}
            
          </VerticalTimeline>
        </div>

        <div className='py-[200px] horizonCss'>
            <div className="horizenLine flex justify-around">
              <div className="process relative w-[30px] h-[30px] rounded-[50px] bg-[#1e1e1e]">
                <div className="processDetails absolute bg-[#ff5757] w-[300px] p-[10px] text-[#fff] rounded-lg top-[-148px] left-[-130px]">
                  <h6 className='mb-2 font-extrabold'>Demo Word Heding</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, rem.</p>
                </div>
              </div>

              <div className="process relative w-[30px] h-[30px] rounded-[50px] bg-[#1e1e1e]">
                <div className="processDetails absolute bg-[#ff5757] w-[300px] p-[10px] text-[#fff] rounded-lg bottom-[-148px] left-[-130px]">
                    <h6 className='mb-2 font-extrabold'>Demo Word Heding</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, rem.</p>
                </div>
              </div>

              <div className="process relative w-[30px] h-[30px] rounded-[50px] bg-[#1e1e1e]">
                <div className="processDetails absolute bg-[#ff5757] w-[300px] p-[10px] text-[#fff] rounded-lg top-[-148px] left-[-130px]">
                  <h6 className='mb-2 font-extrabold'>Demo Word Heding</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, rem.</p>
                </div>
              </div>
              
              <div className="process relative w-[30px] h-[30px] rounded-[50px] bg-[#1e1e1e]">
                <div className="processDetails absolute bg-[#ff5757] w-[300px] p-[10px] text-[#fff] rounded-lg bottom-[-148px] left-[-130px]">
                  <h6 className='mb-2 font-extrabold'>Demo Word Heding</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, rem.</p>
                </div>
              </div>

              <div className="process relative w-[30px] h-[30px] rounded-[50px] bg-[#1e1e1e]">
                <div className="processDetails absolute bg-[#ff5757] w-[300px] p-[10px] text-[#fff] rounded-lg top-[-148px] left-[-130px]">
                  <h6 className='mb-2 font-extrabold'>Demo Word Heding</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, rem.</p>
                </div>
              </div>

            </div>
        </div>

    </>
  )
}

export default Timeline