"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { IoMdInformationCircleOutline } from "react-icons/io";
import React from "react";

function Shipping() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col md:flex-row justify-between p-8">
        <div className="w-full md:w-2/3 pr-0 md:pr-8">
          <h2 className="font-julius lg:text-4xl md:text-4xl sm:text-3xl text-3xl mb-4 text-gray-700">
            01. SHIPPING
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Apt, suite, etc. (optional)"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="p-2 border border-gray-300 rounded">
                <option>Country</option>
              </select>
              <input
                type="text"
                placeholder="State"
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-1">
              <IoMdInformationCircleOutline />
              <p>
                Your privacy is important to us. We will only contact you if
                there is an issue with your order.
              </p>
            </div>
            <button className="w-full bg-black text-white p-2 rounded mt-4">
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
