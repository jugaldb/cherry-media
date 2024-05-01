// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const TestimonialSlider = () => {
//     const testimonials = [
//         {
//             id: 1,
//             name: "John Doe",
//             position: "CEO",
//             review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//             image: "https://via.placeholder.com/250x300",
//         },
//         {
//             id: 2,
//             name: "Jane Smith",
//             position: "Marketing Manager",
//             review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
//             image: "https://via.placeholder.com/250x300",
//         },
//         // Add more testimonials as needed
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     return (
//         <Slider {...settings}>
//             {testimonials.map(testimonial => (
//                 <div key={testimonial.id} className="testimonial-item !flex justify-between !w-[60%] gap-[25px] mx-auto py-6 max-[978px]:flex-col max-[978px]:!w-[100%] max-[978px]:mx-auto">
//                     <div className="testimonial-content !w-[100%] max-[978px]:text-center max-[978px]:mx-auto max-[978px]:px-6">
//                         <div className="testimonial-image">
//                             <img className='max-[978px]:mx-auto' src={testimonial.image} alt={testimonial.name} />
//                         </div>
//                         <div className="testimonial-info mt-3">
//                             <h3 className='font-semibold'>{testimonial.name}</h3>
//                             <p>{testimonial.position}</p>
//                         </div>
//                     </div>
//                     <div className="testimonial-review">
//                         <p>{testimonial.review}</p>
//                     </div>
//                 </div>
//             ))}
//         </Slider>
//     );
// };

// export default TestimonialSlider;

import React, { useState } from 'react';
import './HomePage.css'

const TestimonialSlider = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);




    const testimonials = [
       
        {
            id: 1,
            text: "I never knew a product could make such a difference. It's truly life-changing. I never knew a product could make such a difference. It's truly life-changing.",
            author: "Youla Sihfa",
            image: "https://via.placeholder.com/250x300"
        },
        {
            id: 2,
            text: "I never knew a product could make such a difference. It's truly life-changing.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quo explicabo fuga suscipit accusantium reprehenderit doloribus dolore beatae iure iusto!",
            author: "Jane Smith",
            image: "https://via.placeholder.com/250x300"
        },
        {
            id: 3,
            text: "I never knew a product could make such a difference. It's truly life-changing.",
            author: "Jeet Das",
            image: "https://via.placeholder.com/250x300"
        }
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
            onTouchEnd={handleTouchEnd}>
                <div className="testimonial flex justify-between w-[60%] mx-auto gap-[25px] items-center py-6 max-[978px]:flex-col max-[520px]:w-[100%]">
                    <div className="tstAuthor w-[50%]">
                        <img className='w-[250px] h-[300px]' src={testimonials[currentTestimonial].image} alt="" />
                        <p className='text-[20px] font-semibold mt-4'>- {testimonials[currentTestimonial].author}</p>
                    </div>
                    <div className="tstDetails w-[50%]">
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

                <div className="navArrows">
                    <i class="fa-solid fa-arrow-left absolute left-0 bg-[#f1f1f1] p-4 rounded-full bottom-[50%] cursor-pointer" onClick={handlePrevTestimonial} />
                    <i class="fa-solid fa-arrow-right absolute right-0 bg-[#f1f1f1] p-4 rounded-full bottom-[50%] cursor-pointer" onClick={handleNextTestimonial} />
                </div>
        </div>


    );
};

export default TestimonialSlider;
