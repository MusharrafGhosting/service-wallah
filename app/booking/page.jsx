"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Booking = () => {

  const checkingAuthorization = async () => {
    const id = localStorage.getItem("token");
    if (!id) {
      window.location.href = "/";
      return;
    }
    const response = await fetch(`/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data) {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    checkingAuthorization();
  }, []);

  return (
    <div className="userpage-bg min-h-screen">
      <Nav />
      {/* Users Booking Section */}
      {/* <div className="max-w-5xl bg-white bg-opacity-25 shadow-lg shadow-indigo-900/40 backdrop-blur-sm backdrop-filter backdrop-opacity-1 rounded-lg border border-opacity-20 border-white mx-auto my-8 p-6">
        <header className="mb-8 flex flex-col sm:flex-row items-center justify-center mx-auto gap-2">
          <h1 className="font-julius text-center lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-gray-700 font-bold">
            Booking Details
          </h1>
        </header>

        <section className="mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/image/hero5.webp"
              className="rounded-md"
              alt="Booking"
              width={96} // Adjust the width and height as needed
              height={96}
            />
            <h3 className="font-julius lg:text-3xl md:text-2xl sm:text-2xl text-3xl text-gray-700 font-bold">
              AC Installer
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-2">
            <div className="mb-4 sm:mb-0 leading-9">
              <p>
                Full Name: <strong className="text-gray-600">Atul Kumar</strong>
              </p>
              <p>
                Phone: <strong className="text-gray-600">+91 9508973152</strong>
              </p>
              <p>
                Address:{" "}
                <strong className="text-gray-600">
                  Bashist colony anishabad patna-800002
                </strong>
              </p>
              <p>
                Booking #: <strong className="text-gray-600">0000011</strong>
              </p>
              <p>
                Booking Date:{" "}
                <strong className="text-gray-600">02-29-2024</strong>
              </p>
              <p className="text-gray-800 font-bold flex items-center gap-2">
                Status:{" "}
                <span className="text-teal-500 rounded-md">Confirmed</span>
              </p>
            </div>
            <div className="leading-9">
              <p>
                Available Date:{" "}
                <strong className="text-gray-600">
                  Sunday 11. August, 2024
                </strong>
              </p>
              <p>
                Timing: <strong className="text-gray-600">10:00 AM</strong>
              </p>
              <p>
                Quantity: <strong className="text-gray-600">1</strong>
              </p>
              <p className="text-gray-800 font-bold flex items-center gap-2">
                Verification OTP: <span className="text-teal-500">1234</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b font-julius lg:text-2xl md:text-xl sm:text-xl text-xl text-gray-700 font-bold">
                  Summary
                </th>
                <th className="py-2 px-4 border-b text-right font-julius lg:text-2xl md:text-xl sm:text-xl text-xl text-gray-700 font-bold"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Subtotal</td>
                <td className="py-2 px-4 border-b text-right">₹600.00</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Convenience Fee</td>
                <td className="py-2 px-4 border-b text-right">₹18.00</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-bold">Total</td>
                <td className="py-2 px-4 text-right font-bold">₹618.00</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <p className="font-bold text-red-600">
            Note: Order can be cancelled up to 10 minutes before the scheduled
            time.
          </p>
          <div className="flex justify-end">
            <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded">
              Cancel Order
            </button>
          </div>
        </section>
      </div> */}
      {/* Service provider Booking Section */}
      
      <Footer />
    </div>
  );
};

export default Booking;
