"use client";
import Nav from "@/components/Nav";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import {
  Button,
  Carousel,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Service = () => {
  const { id } = useParams();
  const [subService, setSubService] = useState({
    bookings: [],
    images: [],
    icon: {},
    status: "",
    name: "",
    rank: 0,
    createdAt: "",
  });

  const [service, setService] = useState({});
  const [totalEarning, setTotalEarning] = useState(0);
  const [formattedDate, setFormattedDate] = useState("");

  const getService = async () => {
    try {
      const res = await fetch(`/api/services/${id}`);
      const data = await res.json();
      setSubService(data);
      setService(data);
      setTotalEarning(data.totalEarning || 0);
      setFormattedDate(new Date(data.createdAt).toLocaleDateString());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    <div>
      <Nav />
      <div className="px-4 md:px-20 my-6 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="lg:w-2/3 w-full p-4 grid grid-cols-1 gap-4 rounded-lg">
            <h2 className="lg:text-5xl md:text-5xl sm:text-5xl text-4xl leading-tight text-gray-700 font-bold">
              AC Service and Repair
            </h2>
            <div className="flex gap-2 items-center">
              <div className="whitespace-nowrap text-sm">Choose a service</div>
              <div className="h-px bg-gray-300 w-full"></div>
            </div>
            <div className="flex flex-col w-3/4 max-h-40 overflow-auto gap-4">
              <Button
                variant="outlined"
                className="flex bg-gray-200 items-center justify-between px-4 py-2 rounded-lg shadow-md"
              >
                <img
                  src="ac-installation-image-url"
                  alt="AC Installation"
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <span>AC Installation</span>
              </Button>
              <Button
                variant="outlined"
                className="flex bg-gray-200 items-center justify-between px-4 py-2 rounded-lg shadow-md"
              >
                <img
                  src="ac-repairing-image-url"
                  alt="AC Repairing"
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <span>AC Repairing</span>
              </Button>
              <Button
                variant="outlined"
                className="flex bg-gray-200 items-center justify-between px-4 py-2 rounded-lg shadow-md"
              >
                <img
                  src="ac-repairing-image-url"
                  alt="AC Repairing"
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <span>AC Repairing</span>
              </Button>
              <Button
                variant="outlined"
                className="flex bg-gray-200 items-center justify-between px-4 py-2 rounded-lg shadow-md"
              >
                <img
                  src="ac-repairing-image-url"
                  alt="AC Repairing"
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <span>AC Repairing</span>
              </Button>
            </div>
          </div>
          <Carousel
            className="rounded-md w-full max-h-auto overflow-hidden"
            loop
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            {subService.images?.map((image) => {
              return (
                <img
                  key={image.name}
                  src={image.url}
                  alt=""
                  className="h-96 w-full object-cover"
                />
              );
            })}
          </Carousel>
        </div>
        <div className="w-full flex flex-col justify-center items-center py-4 px-4">
          <h1 className="font-julius lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-center text-gray-700 font-bold">
          AC Service and Repair
          </h1>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {subService.subServices?.map((service, index) => (
            <Card className="w-full max-w-xs shadow-lg" key={index}>
              <CardHeader floated={false} color="blue-gray">
                <img
                  src={service.icon.url}
                  alt="Service Icon"
                  className="object-cover w-full h-48"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-1 flex flex-col justify-start gap-2">
                  <div>
                    <span
                      className={`border ${
                        service.status === "active"
                          ? "bg-teal-100"
                          : "bg-red-100"
                      }  text-xs ${
                        service.status === "active"
                          ? "text-teal-700"
                          : "text-red-700"
                      }  px-2 py-1 rounded-full`}
                    >
                      {service.status}
                    </span>
                  </div>
                  <Typography variant="h6" color="blue-gray" className="font-medium">
                    {service.name}
                  </Typography>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((star, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-5 w-5 ${
                        i < service.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 17.27l5.18 3.73-1.64-5.67L20 9.91l-5.68-.49L12 4 9.68 9.42 4 9.91l4.46 5.42-1.64 5.67L12 17.27z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <Typography color="gray" className="ml-2">
                    | {service.reviews.length} Reviews
                  </Typography>
                </div>
                <div className="text-2xl font-bold text-teal-500">
                  ₹{service.price}
                </div>
              </CardBody>
              <CardFooter className="pt-0 flex flex-col gap-2">
                <Button
                  size="lg"
                  fullWidth={true}
                  variant="gradient"
                  color="indigo"
                  className="flex gap-1 items-center justify-center"
                >
                  Add +
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
