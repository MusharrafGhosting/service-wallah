import { useEffect, useState } from 'react';

const testimonials = [
    {
        name: 'Maria Kate',
        image: '/image/testimonial/img1.webp',
        testimonial:
            'In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum magna. Proin gravida, justo et imperdiet tristique turpis nisi viverra.',
    },
    {
        name: 'John Doe',
        image: '/image/testimonial/img2.webp',
        testimonial:
            'Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus metus quis, elementum nunc.',
    },
    {
        name: 'Anna Deynah',
        image: '/image/testimonial/img3.webp',
        testimonial:
            'Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi vitae ex arcu sit amet erat.',
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 20000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []); // Empty dependency array to run only once

    return (
        <div className="container my-12 mx-auto md:px-6">
            <section className="  text-center">
                <div className="relative" id="carouselExampleCaptions">
                    <div className="relative w-full overflow-hidden">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out ${index === activeIndex ? 'block' : 'hidden'
                                    }`}
                            >
                                <img
                                    className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                                    src={testimonial.image}
                                    alt="avatar"
                                />
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                                        <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
                                        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                                            {testimonial.testimonial}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none"
                        type="button"
                        onClick={() =>
                            setActiveIndex((prevIndex) =>
                                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
                            )
                        }
                    >
                        <span className="inline-block h-8 w-8">
                            <svg
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                className="text-neutral-600 text-black dark:text-neutral-300"
                            >
                                <path
                                    fill="currentColor"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                />
                            </svg>
                        </span>
                        <span className="absolute -m-px h-px w-px overflow-hidden    whitespace-nowrap border-0 p-0 clip-rect(0,0,0,0)">
                            Previous
                        </span>
                    </button>
                    <button
                        className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none"
                        type="button"
                        onClick={() =>
                            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
                        }
                    >
                        <span className="inline-block h-8 w-8">
                            <svg
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                className="text-neutral-600 text-black dark:text-neutral-300"
                            >
                                <path
                                    fill="currentColor"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </span>
                        <span className="absolute -m-px h-px w-px overflow-hidden  whitespace-nowrap border-0 p-0 clip-rect(0,0,0,0)">
                            Next
                        </span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
