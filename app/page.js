"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ServiceSection from "../components/ServiceSection";
import { BsPersonFillAdd } from "react-icons/bs";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Carousel } from "@material-tailwind/react";
import { FaUserPlus } from "react-icons/fa";
import { WiStars } from "react-icons/wi";

import Video from "../components/Video";
import Testimonials from "../components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="flex flex-col lg:flex-row">
        {/* Left half */}
        <div className="lg:w-1/2 pb-4 md:pb-20 pt-4 md:px-10 px-4 flex items-center">
          <div className="w-full">
            <p className="text-xl mb-1">Get Your Work done in a</p>
            <h1 className="lg:text-8xl md:text-7xl sm:text-7xl text-6xl text-center text-blue-500 font-junge">
              Professional
            </h1>
            <span className="flex w-full justify-center">
              <svg
                width="450"
                height="60"
                viewBox="0 0 518 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_112_69)">
                  <path
                    d="M50.4788 51.2511C68.428 47.9447 54.2816 50.3745 88.2408 44.617C92.6221 43.8766 117.908 40.1574 118.269 40.1149C162.5 34.6 180.945 32.2426 245.974 29.4128C288.447 28.8638 276.568 28.9447 296.772 29.1702C323.523 29.4723 316.368 29.1872 338.038 31.1149C359.057 32.9872 353.088 32.4043 359.057 33.166C399.399 38.3149 383.527 36.017 423.744 42.5957C423.781 42.6 452.563 48.0766 471.308 52.7319L490.841 57.5787C491.449 57.7277 491.939 56.8894 492.241 56.3489C494.089 53.0255 494.73 46.4085 493.944 44.6426C501.855 45.3787 506.053 45.9362 511.62 45.6043C512.587 45.5447 513.553 45.2979 514.509 45.1191C517.017 43.9702 518.865 32.6468 517.261 30.834C516.687 30.1318 515.959 29.6794 515.177 29.5404C513.065 27.5026 510.664 26.0234 508.11 25.1872C506.539 24.7106 505.724 24.7234 499.301 24.2C490.706 23.5021 492.702 23.0979 476.176 19.7702C435.363 11.5362 390.403 4.34043 349.147 1.84681C282.172 -2.19149 211.552 2.26809 144.787 10.2596C62.068 16.5745 11.8818 28.0085 9.88346 28.2128C9.32712 28.2785 8.7914 28.518 8.32223 28.9106C7.69445 29.434 7.31647 30.4085 6.9615 31.217C5.13403 35.3872 4.83493 40.9149 5.40684 42.7745C4.60157 43.3234 3.80288 43.9021 2.99761 44.4383C1.38051 45.5064 -0.893962 54.5957 0.364883 58.0979C0.644261 58.6596 0.894058 59.1191 1.25561 59.5957C1.50212 59.9191 1.91625 60 2.28438 60C4.72318 60 44.5592 52.366 50.4788 51.2511Z"
                    fill="url(#paint0_linear_112_69)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_112_69"
                    x1="517.861"
                    y1="30.1664"
                    x2="0"
                    y2="30.1664"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB800" />
                    <stop offset="1" stopColor="#FFE600" />
                  </linearGradient>
                  <clipPath id="clip0_112_69">
                    <rect
                      width="518"
                      height="60"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 60)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <h3 className="text-center text-3xl lg:text-4xl font-julius">
              Manner
            </h3>
            <div className="flex w-full flex-col md:flex-row justify-center flex-nowrap items-center gap-4 mt-8">
              <Link
                href={"/services"}
                className="px-6 py-4 w-full md:w-fit outline transition-all duration-700 flex justify-center items-center rounded-md gap-1 hoverbg-gradient-to-r hover:from-transparent hover:to-transparent hover:text-blue-600 outline-none hover:outline-blue-600 hover:outline-2 bg-gradient-to-tr from-blue-400 to-blue-600 font-semibold text-white"
              >
                Find a Service <RxDoubleArrowRight size={18} />
              </Link>
              <Link
                href={`/service-provider/create`}
                className="px-6 py-4 w-full md:w-fit transition-all flex gap-1 items-center justify-center duration-700 rounded-md hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white outline outline-2 outline-blue-500 text-blue-500 font-semibold"
              >
                Become a Service provider <BsPersonFillAdd />
              </Link>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center mt-12 gap-1">
              <div className="flex gap-2 items-center">
                <img
                  className="w-20 md:w-24"
                  src="/image/hero-child.png"
                  alt=""
                />
                <div>
                  <div className="mb-2 text-blue-600 font-bold text-2xl md:text-3xl">
                    2+ Lakhs
                  </div>
                  <div className="font-medium text-sm md:text-base">
                    Happy Customers
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full md:w-1/4">
                <img
                  className="max-w-full text-center rounded-lg w-20 md:w-24"
                  src="/image/start.png"
                  alt=""
                />
                <h3 className="text-blue-600 font-bold text-lg md:text-xl">
                  4.7
                </h3>
                <p className="font-medium text-sm md:text-base">
                  Service Rating
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right half */}
        <div className="lg:w-1/2 py-5 px-5 hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-4">
              <img
                className="  ml-auto rounded-lg"
                src="/image/hero1.webp"
                alt=""
              />
              <div className="ml-auto">
                <img
                  className="float-right     rounded-lg"
                  src="/image/hero3.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <img
                className="  h-full rounded-lg"
                src="/image/hero2.webp"
                alt=""
              />
            </div>
            <div className="grid gap-4">
              <div className="ml-auto">
                <img
                  className="h-full rounded-lg"
                  src="/image/hero4.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <img
                className="    w-full rounded-lg"
                src="/image/hero5.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* MObile View Carosel */}
        <Carousel
          className="md:hidden"
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="/image/slider1.jpg"
            alt="image 1"
            className="h-[32rem] w-full object-cover"
          />
          <img
            src="/image/slider2.jpg"
            alt="image 2"
            className="h-[32rem] w-full object-cover"
          />
          <img
            src="/image/slider3.jpg"
            alt="image 3"
            className="h-[32rem] w-full object-cover"
          />
          <img
            src="/image/slider4.jpg"
            alt="image 4"
            className="h-[32rem] w-full object-cover"
          />
          <img
            src="/image/slider5.jpg"
            alt="image 5"
            className="h-[32rem] w-full object-cover"
          />
          <img
            src="/image/slider6.jpg"
            alt="image 5"
            className="h-[32rem] w-full object-cover"
          />
          <img
            src="/image/slider7.jpg"
            alt="image 5"
            className="h-[32rem] w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-4 px-4">
        <h1 className="font-julius lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-center text-gray-700">
          FOR ALL YOUR NEEDS WE PROVIDES
        </h1>
        <h2 className="font-cookie w-full md:w-auto flex justify-center md:justify-start lg:text-6xl md:text-6xl sm:text-5xl text-5xl text-center text-blue-500 ">
          Best Services
        </h2>
      </div>
      <div className="px-4 lg:px-20 pb-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/ac.svg"
            className="w-14 h-14 object-cover"
          />
          <div>AC Repairing & Installation</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/washing-machine.svg"
            className="w-14 h-14 object-cover"
          />
          <div>Washing Machine Repairing</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/refrigerator.svg"
            className="w-14 h-14 object-cover"
          />
          <div>Refrigerator Repairing</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/water-purifier.svg"
            className="w-14 h-14 object-cover"
          />
          <div>Water Purifier Repairing</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/cooler.svg"
            className="w-14 h-14 object-cover"
          />
          <div>Room Cooler Repairing</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/Microwave.svg"
            className="w-14 h-14 object-cover"
          />
          <div>Microwave Repair</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/fan.svg"
            className="w-14 h-14 object-cover"
          />
          <div>Fan Installation & Repairing</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/cctv.svg"
            className="w-14 h-14 object-cover"
          />
          <div>CCTV Installation & Repair</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/house wireing.svg"
            className="w-14 h-14 object-cover"
          />
          <div>House Wiring</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/electricity-maintanance.svg"
            className="w-14 h-14 object-cover"
          />
          <div>Electrical Maintenance</div>
        </div>

        <div className="bg-gray-300 p-4 flex flex-col items-center gap-2 rounded-lg">
          <img
            src="/image/service-logos/Lightning.svg"
            className="w-14 h-14 object-cover"
          />
          <div>Light Installation & Repairing</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-4 px-4">
        <h1 className="font-julius lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-center text-gray-700">
          COMPLETE THE TASK WITH
        </h1>
        <h2 className="font-cookie lg:text-6xl md:text-6xl sm:text-5xl text-4xl text-center text-blue-500">
          Experienced Professionals
        </h2>
      </div>
      <Video />
      <div className="w-full flex flex-col justify-center items-center py-4 px-4">
        <h1 className="font-julius lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-center flex text-gray-700 mb-2  ">
          <WiStars color="orange" />
          How to book a service
          <WiStars color="orange" />
        </h1>
        <img
          className=" lg:w-96  md:w-96 sm:w-80 w-64"
          src="/image/line2.svg"
          alt=""
        />
      </div>
      <div className="px-4 lg:px-20 pb-6 w-full ">
        <ServiceSection />
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-3xl">
        <button className="lg:w-full md:w-full sm:w-full w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-md mb-6">
          Book a Service »
        </button>
        <div className="flex items-center lg:w-full md:w-full sm:w-full w-full mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-gray-500 font-medium">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button className="lg:w-full md:w-full sm:w-full w-full border border-blue-500 text-blue-500 font-semibold py-3 px-6 rounded-md flex items-center justify-center">
          Become a service provider{" "}
          <span className="ml-2">
            <FaUserPlus />
          </span>
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-4 px-4">
        <h1 className="font-julius  lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-center text-gray-700">
          SOME REVIEWS OF OUR
        </h1>
        <h2 className="font-cookie lg:text-6xl md:text-6xl sm:text-5xl text-5xl text-center text-blue-500">
          Satisfied Customers
        </h2>
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
