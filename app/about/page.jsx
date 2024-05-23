"use client";
import React from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer.js";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="min-h-screen container mx-auto px-4 py-8 flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-full w-full bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="font-cookie lg:text-6xl md:text-6xl sm:text-5xl text-4xl   text-blue-500">
              About Us
            </h1>
            <h2 className="font-julius lg:text-3xl md:text-4xl sm:text-3xl text-3xl mb-4 text-center text-gray-700">
              Your Trusted Home Service Partner
            </h2>
            <p className="mb-4 text-gray-700">
              At Service Wallah, we understand the importance of a smoothly
              functioning home. With our range of expert services, we ensure
              that your home remains a haven of comfort and convenience.
            </p>
            <p className="mb-4 text-gray-700">
              From air conditioner repairs to fan installations, our skilled
              professionals are adept at handling a variety of household tasks,
              providing you with hassle-free solutions that you can rely on.
            </p>
            <h2 className="font-julius lg:text-3xl md:text-4xl sm:text-3xl text-3xl mb-4  text-gray-700">
              Services We Offer
            </h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li className="text-gray-700">Air Conditioner Repair</li>
              <li className="text-gray-700">Fan Installation and Repair</li>
              <li className="text-gray-700">Electrical Services</li>
              <li className="text-gray-700">Plumbing Solutions</li>
              <li className="text-gray-700">Appliance Maintenance</li>
              <li className="text-gray-700">And much more!</li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
            <div className="relative w-80 h-full md:w-96 md:h-full   shadow-lg  z-10">
              <Image
                src="/image/slider6.jpg" // Replace with the path to your first image
                alt="A person working"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="absolute top-24 left-8 w-80 h-96 md:w-80 md:h-96 shadow-lg    z-20">
              <Image
                src="/image/slider7.jpg" // Replace with the path to your second image
                alt="A person working"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <p className="mt-8 text-gray-600">
          Contact us today to experience the convenience and reliability of
          Service Wallah!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
