"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { IoMdInformationCircleOutline } from "react-icons/io";
import React, { useState } from "react";

function Shipping() {
  // Initialize state variables
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    date: '',
    time: ''
  });

  // Create handler functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div>
      <Nav />
      <div className="flex flex-col md:flex-row justify-between p-8">
        <div className="w-full md:w-2/3 pr-0 md:pr-8">
          <h2 className="font-julius lg:text-4xl md:text-4xl sm:text-3xl text-3xl mb-4 text-gray-700">
            01. SHIPPING
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
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
            <button className="w-full bg-black text-white p-2 rounded mt-4" type="submit">
              SAVE & CONTINUE
            </button>
          </form>
          <h2 className="font-julius lg:text-4xl md:text-4xl sm:text-3xl text-3xl mb-4 mt-4 text-gray-700">
            02. PAYMENT
          </h2>
          <h2 className="font-julius lg:text-4xl md:text-4xl sm:text-3xl text-3xl mb-4 text-gray-700">
            03. ORDER REVIEW
          </h2>
        </div>
        <div className="w-full md:w-1/3 pl-0 md:pl-8 mt-8 md:mt-0">
          <h2 className="font-julius lg:text-4xl md:text-4xl sm:text-3xl text-3xl mb-4 text-gray-700">
            SUMMARY
          </h2>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$137.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>International Shipping</span>
              <span>$18.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$155.00</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">IN YOUR CART</h2>
          <div className="space-y-4">
            {[
              { color: "Blue", size: "S", qty: 1, price: 59 },
              { color: "Pink", size: "S", qty: 1, price: 39 },
              { color: "Brown", size: "S", qty: 1, price: 39 },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={`https://via.placeholder.com/50`}
                  alt="Product"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="font-bold">Breathable slim sport vest</h3>
                  <p className="text-sm">Color: {item.color}</p>
                  <p className="text-sm">Size: {item.size}</p>
                  <p className="text-sm">Qty: {item.qty}</p>
                  <p className="text-sm font-bold">${item.price}.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shipping;
