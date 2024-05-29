"use client";
import Nav from "@/components/Nav";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Drawer, Rating, Textarea } from "@material-tailwind/react";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { VscDebugContinue } from "react-icons/vsc";

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

const sliderSettings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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
        // dots: true,
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

const reviews = [
  {
    id: 1,
    name: "Musharraf Jamal",
    review: "Service provider were soo delicate to his work.",
    rating: 4,
    img: "/image/hero1.webp", // Replace with the path to your first image
  },
  {
    id: 2,
    name: "Angila",
    review: "Good in work but behavior is not friendly at all.",
    rating: 3,
    img: "/image/hero1.webp", // Replace with the path to your second image
  },
  {
    id: 3,
    name: "Angila",
    review: "Good in work but behavior is not friendly at all.",
    rating: 3,
    img: "/image/hero1.webp", // Replace with the path to your second image
  },
  {
    id: 4,
    name: "Musharraf Jamal",
    review: "Service provider were soo delicate to his work.",
    rating: 4,
    img: "/image/hero1.webp", // Replace with the path to your first image
  },
  {
    id: 5,
    name: "Musharraf Jamal",
    review: "Service provider were soo delicate to his work.",
    rating: 4,
    img: "/image/hero1.webp", // Replace with the path to your first image
  },
];

const ReviewCard = ({ name, review, rating, img }) => (
  <div className="w-full md:w-1/2 p-2">
    <div className="bg-white p-4 h-52 shadow rounded-lg flex items-start space-x-4">
      <div className="relative w-12 h-12">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold">{name}</h3>
            <div className="flex items-center">
              <Rating value={4} />
            </div>
          </div>
        </div>
        <p className="text-gray-600">{review}</p>
      </div>
    </div>
  </div>
);
const Service = () => {
  const { id } = useParams();

  const [service, setService] = useState({});
  const [totalEarning, setTotalEarning] = useState(0);
  const [formattedDate, setFormattedDate] = useState("");
  const [newReview, setNewReview] = useState({
    image: {
      url: "",
      name: "",
    },
    name: "",
    review: "",
    rating: 0,
  });

  const getService = async () => {
    try {
      const res = await fetch(`/api/services/${id}`);
      const data = await res.json();
      setService(data);
      setFormattedDate(new Date(data.createdAt).toLocaleDateString());
    } catch (err) {
      console.log(err);
    }
  };
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    // Assuming you have an endpoint to submit a review
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newReview,
          serviceId: id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        // Add the new review to the existing reviews
        setService((prev) => ({
          ...prev,
          reviews: [...prev.reviews, data],
        }));
        // Reset the new review form
        setNewReview({
          name: "",
          review: "",
          rating: 0,
        });
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const handleAddingCart = (subService) => {
    const existingItem = cartItems.find((item) => item._id === subService._id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === subService._id // Use _id here
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...subService, quantity: 1 }]);
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, { ...subService, quantity: 1 }])
      );
      openDrawer();
    }
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getService();
    setLoading(false);
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);
  return (
    <>
      <div
        className={`grid place-items-center min-h-screen absolute w-full bg-white transition-all duration-700 top-0 ${
          loading ? "opacity-100" : "opacity-0"
        } ${loading ? "z-50" : "-z-50"}`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="loaction-loader"></div>
          <div className="text-2xl font-julius">Loading</div>
        </div>
      </div>
      <div
        className={`${
          loading ? "hidden" : "bloack"
        } transition-all duration-700`}
      >
        <Nav cartItems={cartItems} />
        <Drawer
          open={open}
          onClose={closeDrawer}
          className="p-4 shadow-lg"
          dismiss={{ enabled: false }}
          overlay={false}
          size={400}
          placement="right"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Cart Services
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => {
              return (
                <div key={item._id} className="flex items-center gap-2">
                  <img
                    src={item.icon?.url} // Replace with actual path
                    alt="Service Icon"
                    className="w-28 h-28 object-cover rounded shadow"
                  />
                  <div>
                    <h2 className="text-xl leading-tight text-gray-700 font-bold w-full">
                      {item.name}
                    </h2>
                    <Typography color="teal" variant="h5">
                      ₹{item.price}
                    </Typography>
                    <Button color="red" variant="text">
                      Remove
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              size="sm"
              variant="outlined"
              className="rounded flex items-center gap-1"
              onClick={closeDrawer}
            >
              Continue Browsing <VscDebugContinue />
            </Button>
            <Link href={"/cart"}>
              <Button
                size="sm"
                color="gray"
                variant="gradient"
                className="rounded flex items-center gap-1"
              >
                Cart <FaCartShopping />
              </Button>
            </Link>
          </div>
        </Drawer>
        <div className="px-4 md:px-20 my-6 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-2/3 p-4 flex flex-col justify-center gap-6 rounded-lg">
              <div className="flex items-center gap-2">
                <img
                  src={service.icon?.url} // Replace with actual path
                  alt="Service Icon"
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h2 className="lg:text-4xl md:text-5xl sm:text-5xl  text-4xl leading-tight text-gray-700 font-bold  ">
                    {service.name}
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 items-center  ">
                <div className="whitespace-nowrap text-sm">
                  Reviews & Ratings
                </div>
                <div className="h-px bg-gray-300 w-full"></div>
              </div>
              <div className="flex items-start gap-6 ">
                <div className="flex flex-col w-full items-center gap-2 bg-white h-fit  shadow-lg rounded-lg p-4 cursor-pointer hover:scale-105 transition-all">
                  <img
                    src="/icons/cargo.png" // Replace with actual path
                    alt="Bookings Icon"
                    className="w-20 object-cover"
                  />
                  <span className="text-gray-600 text-xl">8,000 Bookings</span>
                </div>
                <div className="flex flex-col w-full items-center gap-2 bg-white h-fit  shadow-lg rounded-lg p-4 cursor-pointer hover:scale-105 transition-all">
                  <img
                    src="/icons/star.png" // Replace with actual path
                    alt="Star Icon"
                    className="w-20 object-cover"
                  />
                  <span className="text-gray-600 text-xl">
                    4.3 | 120 reviews
                  </span>
                </div>
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
              {service.images?.map((image) => {
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
          <div className="container mx-auto">
            {service.subServices?.length <= 4 ? (
              service.subServices?.map((subService, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10"
                >
                  <Card className="mb-3 max-w-60">
                    <CardHeader floated={false}>
                      <img
                        src={subService.icon?.url}
                        alt="Service Icon"
                        className="object-cover md:w-full h-48 shadow-lg"
                      />
                    </CardHeader>
                    <CardBody>
                      <div className="mb-1 flex flex-col justify-start gap-2">
                        <div>
                          <span
                            className={`border ${
                              subService.status === "active"
                                ? "bg-teal-100"
                                : "bg-red-100"
                            } text-xs ${
                              subService.status === "active"
                                ? "text-teal-700"
                                : "text-red-700"
                            } px-2 py-1 rounded-full`}
                          >
                            {subService.status}
                          </span>
                        </div>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {subService.name}
                        </Typography>
                      </div>
                      <div className="text-2xl font-bold text-teal-500">
                        ₹{subService.price}
                      </div>
                    </CardBody>
                    <CardFooter className="pt-0 flex flex-col gap-2">
                      <Button
                        size="lg"
                        fullWidth={true}
                        variant="gradient"
                        color="indigo"
                        className="flex gap-2 items-center justify-center"
                        onClick={() => handleAddingCart(subService)}
                        disabled={cartItems.some(
                          (sub) => sub._id === subService._id
                        )}
                      >
                        {cartItems.some((sub) => sub._id === subService._id) ? (
                          <span>Item Added</span>
                        ) : (
                          <span>Add to cart</span>
                        )}
                        <FaCartArrowDown size={20} />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))
            ) : (
              <Slider {...sliderSettings}>
                {service.subServices?.map((subService, index) => (
                  <div key={index} className="px-3">
                    <Card className="mb-3">
                      <CardHeader floated={false}>
                        <img
                          src={subService.icon.url}
                          alt="Service Icon"
                          className="object-cover md:w-full h-48"
                        />
                      </CardHeader>
                      <CardBody>
                        <div className="mb-1 flex flex-col justify-start gap-2">
                          <div>
                            <span
                              className={`border ${
                                subService.status === "active"
                                  ? "bg-teal-100"
                                  : "bg-red-100"
                              } text-xs ${
                                subService.status === "active"
                                  ? "text-teal-700"
                                  : "text-red-700"
                              } px-2 py-1 rounded-full`}
                            >
                              {subService.status}
                            </span>
                          </div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-medium"
                          >
                            {subService.name}
                          </Typography>
                        </div>
                        <div className="text-2xl font-bold text-teal-500">
                          ₹{subService.price}
                        </div>
                      </CardBody>
                      <CardFooter className="pt-0 flex flex-col gap-2">
                        <Button
                          size="lg"
                          fullWidth={true}
                          variant="gradient"
                          color="indigo"
                          className="flex gap-2 items-center justify-center"
                          onClick={() => handleAddingCart(subService)}
                          disabled={cartItems.some(
                            (sub) => sub._id === subService._id
                          )}
                        >
                          {cartItems.some(
                            (sub) => sub._id === subService._id
                          ) ? (
                            <span>Item Added</span>
                          ) : (
                            <span>Add to cart</span>
                          )}

                          <FaCartArrowDown size={20} />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 ">
          <div className="flex items-center md:flex-row flex-col justify-between mb-4">
            <h2 className="text-2xl font-bold mb-4">Reviews by users</h2>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Rating value={4} />
              </div>
              <span className="ml-2 text-gray-700">(4 reviews)</span>
            </div>
          </div>
          <div className="overflow-auto h-96">
            <div className="flex flex-wrap m-2 ">
              {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-gray-100 ">
          <div className="w-9/12 mb-8">
            <div className="p-4 bg-white shadow rounded-lg space-x-4">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Submit Your Review
              </h3>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <label className="block text-lg font-medium text-gray-700">
                    Rating
                  </label>
                  <Rating value={4} />
                </div>
                <Textarea
                  label="Message"
                  value={newReview.review}
                  color="blue-gray"
                  onChange={(e) =>
                    setNewReview({ ...newReview, review: e.target.value })
                  }
                  required
                  rows="5"
                />
                <div className="flex justify-end">
                  <Button type="submit" color="blue">
                    Submit Review
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Service;
