"use client";

import { useEffect, useState } from "react";

const Hello = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
              );
              const data = await response.json();
              console.log(data);
              setLocation({
                latitude,
                longitude,
                address: data.display_name,
              });
            } catch (error) {
              console.error("Error getting address:", error);
            }
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getCurrentLocation();
  }, []);

  if (!location) {
    return <div>Loading location...</div>;
  }

  return (
    <div>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <p>Address: {location.address}</p>
    </div>
  );
};

export default Hello;
