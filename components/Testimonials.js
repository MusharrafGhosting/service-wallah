import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Maria Kate",
    image:
      "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915892.jpg?t=st=1716364756~exp=1716368356~hmac=6861a2a425d375a48ca9f795b11f41a4f960f25bad703b6898d9b2959c3d23ca&w=360",
    testimonial:
      "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum magna. Proin gravida, justo et imperdiet tristique turpis nisi viverra.",
  },
  {
    name: "John Doe",
    image: "https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?t=st=1716364719~exp=1716368319~hmac=546ca7bf121267955fa0beaa40b7945c65ddc621f33d8bbe5734070783a628cf&w=996",
    testimonial:
      "Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus metus quis, elementum nunc.",
  },
  {
    name: "Anna Deynah",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi vitae ex arcu sit amet erat.",
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
                className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              >
                <img
                  className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-32 h-32 object-cover"
                  src={testimonial.image}
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-lg font-bold">
                      {testimonial.name}
                    </h5>
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
              setActiveIndex(
                (prevIndex) => (prevIndex + 1) % testimonials.length
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
