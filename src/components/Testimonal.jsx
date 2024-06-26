// import React, { useState } from 'react';
// import './HomePage.css'

// const TestimonialSlider = () => {
//     const [currentTestimonial, setCurrentTestimonial] = useState(0);
//     const [touchStartX, setTouchStartX] = useState(null);




//     const testimonials = [
       
//         {
//             id: 1,
//             text: `I had found Muskan on LinkedIn for my personal brand development a year back. Working with Muskan for sometime now and she’s one of the most professional individuals I’ve met in this industry. 
//             Her commitment towards quality of work and clarity in communication is something  that has helped us sky rocket our growth and it’s all with the help of Muskan!`,
//             author: "Burhanuddin Abuwala",
//             position:"CEO of Abuwala & Co.",
//             image: "images/burhan.jpg"
//         },
//         {
//             id: 2,
//             text: "I never knew a product could make such a difference. It's truly life-changing.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quo explicabo fuga suscipit accusantium reprehenderit doloribus dolore beatae iure iusto!",
//             author: "Alok Verma",
//             position:" CEO & Founder of Success Tea Consultants",
//             image: "images/alok.mp4"
//         },
//         {
//             id: 3,
//             text: "I never knew a product could make such a difference. It's truly life-changing.",
//             author: "Jeet Das",
//             position:"Part time Photographer",
//             image: "https://via.placeholder.com/250x300"
//         }
//     ];
//     const handleNextTestimonial = () => {
//         setCurrentTestimonial((prevTestimonial) => (prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1));
//     };

//     const handlePrevTestimonial = () => {
//         setCurrentTestimonial((prevTestimonial) => (prevTestimonial === 0 ? testimonials.length - 1 : prevTestimonial - 1));
//     };

//     const handleTouchStart = (e) => {
//         setTouchStartX(e.touches[0].clientX);
//     };

//     const handleTouchMove = (e) => {
//         if (touchStartX === null) {
//             return;
//         }
//         const currentX = e.touches[0].clientX;
//         const diff = touchStartX - currentX;
//         if (diff > 50) {
//             handleNextTestimonial();
//             setTouchStartX(null);
//         } else if (diff < -50) {
//             handlePrevTestimonial();
//             setTouchStartX(null);
//         }
//     };

//     const handleTouchEnd = () => {
//         setTouchStartX(null);
//     };

//     const handleDotClick = (index) => {
//         setCurrentTestimonial(index);
//     };

//     return (
//         <div className="testimonial-slider"
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}  data-aos="fade-up">
//                 <div className="testimonial flex justify-between w-[60%] mx-auto gap-[25px] items-center py-6 max-[978px]:flex-col max-[1000px]:w-[80%] max-[520px]:w-[100%]">
//                     <div className="tstAuthor w-[50%]">
//                         <div className="imgCover w-[250px] h-[300px] max-[520px]:w-[147px] max-[520px]:h-[147px]">
//                             {/* <img className='w-[100%] h-[100%] object-cover' src={testimonials[currentTestimonial].image} alt="" /> */}
//                              {testimonials[currentTestimonial].image ? (
//                             <img className='w-[100%] h-[100%] object-cover' src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].author} />
//                         ) : (
//                             <video className='w-[100%] h-[100%] object-cover' controls>
//                                 <source src={testimonials[currentTestimonial].video} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         )} 
//                         </div>
//                         <p className='text-[20px] font-semibold mt-4'>- {testimonials[currentTestimonial].author}</p>
//                         <p className='text-[15px]'>- {testimonials[currentTestimonial].position}</p>
//                     </div>
//                     <div className="tstDetails w-[50%]">
//                         <p>{testimonials[currentTestimonial].text}</p>
//                     </div>
//                 </div>
//                 <div className="dots">
//                     {testimonials.map((testimonial, index) => (
//                         <span
//                             key={testimonial.id}
//                             className={index === currentTestimonial ? 'dot active' : 'dot'}
//                             onClick={() => handleDotClick(index)}
//                         />
//                     ))}
//                 </div>

//                 <div className="navArrows text-[25px]">
//                     <i class="fa-solid fa-chevron-left absolute left-0 p-4 rounded-full top-[130px] cursor-pointer hover:text-[#ff5757] animate-bounce" onClick={handlePrevTestimonial}/>
//                     <i class="fa-solid fa-chevron-right absolute right-0  p-4 rounded-full top-[130px] cursor-pointer hover:text-[#ff5757] animate-bounce" onClick={handleNextTestimonial}/>
                 
//                 </div>
//         </div>


//     );
// };

// export default TestimonialSlider;



import React, { useState } from 'react';
import './HomePage.css';

const TestimonialSlider = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);

    const testimonials = [
        {
            id: 1,
            text: `I had found Muskan on LinkedIn for my personal brand development a year back. Working with Muskan for sometime now and she’s one of the most professional individuals I’ve met in this industry. 
            Her commitment towards quality of work and clarity in communication is something  that has helped us sky rocket our growth and it’s all with the help of Muskan!`,
            author: "Burhanuddin Abuwala",
            position: "CEO of Abuwala & Co.",
            image: "images/burhan.jpg",
        },
        {
            id: 2,
            text: "I never knew a product could make such a difference. It's truly life-changing. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quo explicabo fuga suscipit accusantium reprehenderit doloribus dolore beatae iure iusto!",
            author: "Alok Verma",
            position: "CEO of Success Tea Consultants",
            video: "images/alok.mp4",
        },
        {
            id: 3,
            text: "I never knew a product could make such a difference. It's truly life-changing.",
            author: "Adithya Pandravada",
            position: "Founder @Pinkmoongifts",
            image: "images/adithya.jpeg",
        },
        {
            id: 4,
            text: "I never knew a product could make such a difference. It's truly life-changing.",
            author: "Tirath Doshi",
            position: "Head - UL & Term Agency @Bajaj",
            image: "images/tirath.jpg",
        },
    ];

    const handleNextTestimonial = () => {
        setCurrentTestimonial((prevTestimonial) => (prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1));
    };

    const handlePrevTestimonial = () => {
        setCurrentTestimonial((prevTestimonial) => (prevTestimonial === 0 ? testimonials.length - 1 : prevTestimonial - 1));
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (touchStartX === null) {
            return;
        }
        const currentX = e.touches[0].clientX;
        const diff = touchStartX - currentX;
        if (diff > 50) {
            handleNextTestimonial();
            setTouchStartX(null);
        } else if (diff < -50) {
            handlePrevTestimonial();
            setTouchStartX(null);
        }
    };

    const handleTouchEnd = () => {
        setTouchStartX(null);
    };

    const handleDotClick = (index) => {
        setCurrentTestimonial(index);
    };

    return (
        <div className="testimonial-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd} data-aos="fade-up">
            <div className="testimonial flex justify-between w-[60%] mx-auto gap-[25px] items-center py-6 max-[978px]:flex-col max-[1000px]:w-[80%] max-[520px]:w-[100%] max-[520px]:text-center">
                <div className="tstAuthor w-[50%] max-[520px]:w-[80%]">
                    <div className="imgCover w-[250px] h-[300px] max-[520px]:w-[147px] max-[520px]:mx-auto max-[520px]:h-[147px]">
                        {testimonials[currentTestimonial].image ? (
                            <img className='w-[100%] h-[100%] object-cover' src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].author} />
                        ) : (
                            <video className='w-[100%] h-[100%] object-cover' autoPlay controls>
                                <source src={testimonials[currentTestimonial].video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                    <p className='text-[20px] font-semibold mt-4 max-[668px]:text-[14px]'>{testimonials[currentTestimonial].author}</p>
                    <p className='text-[15px] max-[668px]:text-[12px]'>{testimonials[currentTestimonial].position}</p>
                </div>
                <div className="tstDetails w-[50%] max-[520px]:w-[80%] max-[668px]:text-[12px]">
                    <p>{testimonials[currentTestimonial].text}</p>
                </div>
            </div>
            <div className="dots">
                {testimonials.map((testimonial, index) => (
                    <span
                        key={testimonial.id}
                        className={index === currentTestimonial ? 'dot active' : 'dot'}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
            <div className="navArrows text-[25px]">
                <i className="fa-solid fa-chevron-left absolute left-0 p-4 rounded-full top-[130px] cursor-pointer hover:text-[#ff5757] animate-bounce" onClick={handlePrevTestimonial} />
                <i className="fa-solid fa-chevron-right absolute right-0 p-4 rounded-full top-[130px] cursor-pointer hover:text-[#ff5757] animate-bounce" onClick={handleNextTestimonial} />
            </div>
        </div>
    );
};

export default TestimonialSlider;

