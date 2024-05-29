"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { IoMdInformationCircleOutline } from "react-icons/io";
import React, { useEffect, useState } from "react";
import {
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Textarea,
  Typography,
} from "@material-tailwind/react";

function Shipping() {
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    address: "",
    date: "",
    time: "",
  });

  const [dates, setDates] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Create handler functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.time <= getCurrentTime()) {
      alert("Please select a time after the current time");
      return;
    }
    console.log(formData);
  };

  // Function to generate the four days including the current date
  const getFourDays = () => {
    const today = new Date();
    const fourDaysArray = [today];

    for (let i = 1; i < 4; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      fourDaysArray.push(nextDate);
    }

    return fourDaysArray.map((date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    });
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const getAddress = async ({ lat, lng }) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          address: data.results[0].formatted_address,
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          address: "Address not found",
        }));
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const gettingUser = async () => {
    const id = localStorage.getItem("token");
    const response = await fetch(`/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setFormData((prevFormData) => ({
      ...prevFormData,
      fullname: data.name || "Name",
      phoneNumber: data.phoneNumber || "Phone Number",
      email: data.email || "Email",
    }));
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    gettingUser();
    const dates = getFourDays();
    setDates(dates);
    const location = JSON.parse(localStorage.getItem("location"));
    getAddress(location);

    // Set the initial date in formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: dates[0],
    }));
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <Nav />
      <div className="flex flex-col md:flex-row justify-center gap-20 p-8">
        <div className="w-full md:w-1/3">
          <h2 className="font-julius lg:text-4xl md:text-4xl sm:text-3xl text-3xl mb-4 text-gray-700">
            SUMMARY
          </h2>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={item.icon?.url}
                  alt="Product"
                  className="w-24 h-24 mr-3 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm">Qty: {item.quantity}</p>
                  <p className="text-sm font-bold text-teal-500">
                    ₹{item.price}.00
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-px w-full bg-gray-300 mt-4"></div>

          <div className="flex flex-col gap-4 p-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                ₹
                {cartItems
                  .reduce(
                    (acc, product) => acc + product.price * product.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Convenience Fee</span>
              <span>₹18.00</span>
            </div>
            <div className="flex justify-between font-bold text-xl text-gray-700">
              <span>Total</span>
              <span>
                ₹
                {(
                  cartItems.reduce(
                    (acc, product) => acc + product.price * product.quantity,
                    0
                  ) + 18
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="font-julius text-center lg:text-4xl md:text-4xl sm:text-3xl text-3xl mb-4 text-gray-700">
            SHIPPING
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              label="Full name"
              className="bg-white"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              maxLength={30}
              minLength={4}
            />
            <Input
              label="Phone number"
              className="bg-white"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              maxLength={10}
              minLength={10}
            />
            <Textarea
              label="Address"
              className="bg-white"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              minLength={4}
            />
            <List className="grid grid-cols-2 2xl:grid-cols-4 bg-white rounded-lg">
              {dates.map((date) => (
                <ListItem key={date} className="p-0">
                  <label
                    htmlFor={date}
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="date"
                        value={date}
                        onChange={handleChange}
                        checked={formData.date === date}
                        id={date}
                        ripple={false}
                        required
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="font-medium text-blue-gray-400"
                    >
                      {date}
                    </Typography>
                  </label>
                </ListItem>
              ))}
            </List>
            <input
              type="time"
              name="time"
              value={formData.time}
              required
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-sm text-gray-600 flex items-center gap-1">
              <IoMdInformationCircleOutline />
              <p>
                Your privacy is important to us. We will only contact you if
                there is an issue with your order.
              </p>
            </div>
            <button
              className="w-full bg-black text-white p-2 rounded mt-4"
              type="submit"
            >
              SAVE & CONTINUE
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shipping;
