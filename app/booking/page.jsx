"use client"
import Nav from "@/components/Nav";
import React, { useEffect } from "react";

const Booking = () => {
  const chechingAuthorization = async () => {
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
    chechingAuthorization();
  }, []);
  return (
    <div className="userpage-bg min-h-screen">
      <Nav /> Booking
    </div>
  );
};

export default Booking;
