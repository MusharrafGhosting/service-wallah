import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Hanna Lisem',
            title: 'Project Manager',
            image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        {
            name: 'Ronne Galle',
            title: 'Designer',
            image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        {
            name: 'Ronne Galle',
            title: 'Designer',
            image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        {
            name: 'Ronne Galle',
            title: 'Designer',
            image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        {
            name: 'Ronne Galle',
            title: 'Designer',
            image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        // Add other testimonials
    ];
    const getCenterSlidePercentage = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 540) {
            return 100; // Mobile view
        } else if (screenWidth <= 1024) {
            return 50; // Tablet view
        } else {
            return 33.33; // Desktop view
        }
    };
    const settings = {
        showArrows: true,
        showThumbs: false, // Updated to false for mobile view
        showStatus: false,
        infiniteLoop: true,
        autoPlay: true,
        interval: 5000,
        stopOnHover: true,
        centerMode: true,
        centerSlidePercentage: getCenterSlidePercentage(),
        swipeable: true,
        dynamicHeight: false,
        emulateTouch: true,
    };

    return (
        <div className="flex flex-col items-center">
            <div className="overflow-x-hidden w-screen p-4">
                <Carousel {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name} 
                                    className="w-10 h-10 rounded-full mx-auto object-cover"
                                />
                                <div className="text-center mt-4">
                                    <h3 className="text-xl font-semibold text-blue-600">{testimonial.name}</h3>
                                    <p className="text-gray-500">{testimonial.title}</p>
                                    <p className="mt-4 text-gray-700">&quot;{testimonial.quote}&quot;</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;
