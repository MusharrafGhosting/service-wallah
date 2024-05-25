"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";

const ServiceShow = ({topServices}) => {
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
  
  return (
    <div className="container mx-auto py-8">
      <Slider {...settings}>
        {topServices.map((service) => (
          <div key={service._id} className="px-2">
            <div className="max-w-sm mx-auto bg-white p-6 shadow-lg rounded-lg overflow-hidden h-96 flex flex-col justify-between">
              <div>
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
                <div>
                  <div className="flex gap-2 items-center my-2">
                    <div className="whitespace-nowrap text-sm">
                      {service.name}
                    </div>
                    <div className="h-px bg-gray-300 w-full"></div>
                  </div>
                  <div className="flex flex-col   max-h-44 overflow-auto no-scrollbar gap-4">
                    {service.subServices?.map((sub, i) => {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-4   bg-gray-100 p-3 rounded-md"
                        >
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
              </div>
              <Link href={`/services/${service._id}`} target="_blank">
                <button className="flex items-center gap-1 justify-center w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  View
                  <IoMdOpen />
                </button>
              </Link>
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
      className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-700 text-white rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <MdChevronRight className="w-6 h-6" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-700 text-white rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <MdChevronLeft className="w-6 h-6" />
    </div>
  );
};

export default ServiceShow;
