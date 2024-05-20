import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Hanna Lisem',
            title: 'Project Manager',
            image: '/images/image1.jpg',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        {
            name: 'Ronne Galle',
            title: 'Designer',
            image: '/images/image2.jpg',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        {
            name: 'Missy Limana',
            title: 'Developer',
            image: '/images/image3.jpg',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        {
            name: 'John Doe',
            title: 'Marketing Specialist',
            image: '/images/image4.jpg',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        {
            name: 'Jane Smith',
            title: 'Product Manager',
            image: '/images/image5.jpg',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
        {
            name: 'Alice Johnson',
            title: 'Sales Manager',
            image: '/images/image6.jpg',
            quote: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
        },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        showArrows: true,
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        autoPlay: true,
        interval: 5000,
        stopOnHover: true,
        centerMode: true,
        centerSlidePercentage: isMobile ? 100 : 33.33,
        swipeable: true,
        dynamicHeight: false,
        emulateTouch: true,
    };

    return (
        <div className="flex flex-col items-center overflow-hidden">
            <h2 className="text-4xl font-bold text-center my-8">Testimonials</h2>
            <Carousel {...settings} className="lg:max-w-5xl md:max-w-3xl overflow-hidden">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 overflow-hidden">
                        <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full mx-auto"
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
    );
};

export default Testimonials;
