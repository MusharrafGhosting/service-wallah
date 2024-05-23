"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTools } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from "next/link";

const ServiceShow = () => {
  const cards = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/300x200?sig=1",
      title: "AC Services",
      service: "AC Installation",
      description: "AC Services",
      link: "https://example.com",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/300x200?sig=2",
      title: "Plumbing Services",
      service: "Leak Fixing",
      description: "Plumbing Services",
      link: "https://example.com",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/300x200?sig=3",
      title: "Electrical Services",
      service: "Wiring",
      description: "Electrical Services",
      link: "https://example.com",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/random/300x200?sig=4",
      title: "Cleaning Services",
      service: "House Cleaning",
      description: "Cleaning Services",
      link: "https://example.com",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/random/300x200?sig=5",
      title: "Gardening Services",
      service: "Lawn Mowing",
      description: "Gardening Services",
      link: "https://example.com",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/random/300x200?sig=6",
      title: "Painting Services",
      service: "Interior Painting",
      description: "Painting Services",
      link: "https://example.com",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [topServices, setTopServices] = useState([]);
  const gettingServices = async () => {
    try {
      const fetchedData = await fetch("/api/services", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await fetchedData.json();
      function getTopBookedServices(services, topN) {
        return services
          .sort((a, b) => b.rank - a.rank)
          .filter((service) => service.status === "active" && service.subServices?.length > 0)
          .slice(0, topN);
      }

      const topBookedServices = getTopBookedServices(response, 10);

      setTopServices(topBookedServices);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    gettingServices();
  }, []);
  return (
    <div className="container mx-auto py-8">
      <Slider {...settings}>
        {topServices.map((service) => (
          <div key={service._id} className="px-2">
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={service.icon?.url}
                    alt={service.name}
                    className="w-16 h-16 rounded mr-4 object-cover drop-shadow-lg"
                  />
                  <h2 className="ml-4 text-xl font-semibold text-gray-800">
                    {service.name}
                  </h2>
                </div>
                <div className="mb-4">
                  <div className="flex gap-2 items-center my-2">
                    <div className="whitespace-nowrap text-sm">
                      {service.name}
                    </div>
                    <div className="h-px bg-gray-300 w-full"></div>
                  </div>
                  <div className="flex flex-col   max-h-40 overflow-auto no-scrollbar gap-4">
                    {service.subServices?.map((sub, i) => {
                      return (
                        <div key={i} className="flex items-center gap-4   bg-gray-100 p-3 rounded-md">
                          <img
                            src={sub.icon?.url}
                            alt={sub.name}
                            className="w-16 h-16 rounded mr-4 drop-shadow-lg object-cover"
                          />
                          <span className="text-gray-800 font-medium">
                            {sub.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Link href={`/services/${service._id}`} target="_blank">
                  <button className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    View <span className="inline-block ml-2">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-700 text-white rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <MdChevronRight className="w-6 h-6" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-700 text-white rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <MdChevronLeft className="w-6 h-6" />
    </div>
  );
};

export default ServiceShow;
