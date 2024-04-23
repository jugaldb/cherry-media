import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSlider = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            position: "CEO",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: "https://via.placeholder.com/250x300",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Marketing Manager",
            review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            image: "https://via.placeholder.com/250x300",
        },
        // Add more testimonials as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-item !flex justify-between !w-[60%] gap-[25px] mx-auto py-6 max-[978px]:flex-col max-[978px]:!w-[100%] max-[978px]:mx-auto">
                    <div className="testimonial-content !w-[100%] max-[978px]:text-center max-[978px]:mx-auto max-[978px]:px-6">
                        <div className="testimonial-image">
                            <img className='max-[978px]:mx-auto' src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className="testimonial-info mt-3">
                            <h3 className='font-semibold'>{testimonial.name}</h3>
                            <p>{testimonial.position}</p>
                        </div>
                    </div>
                    <div className="testimonial-review">
                        <p>{testimonial.review}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default TestimonialSlider;
