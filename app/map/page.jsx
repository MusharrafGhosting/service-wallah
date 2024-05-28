"use client"
import { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: -34.397,
  lng: 150.644,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC5U0I-ke6cvtuhSAKLUZup6ykt-zHUdis",
    libraries,
  });

  const [currentLocation, setCurrentLocation] = useState(center);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          console.log(position.coords.latitude, position.coords)
        },
        () => {
          console.error('Error getting the location');
        }
      );
    } else {
      console.error('Geolocation not supported');
    }
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={currentLocation}
      >
        <Marker position={currentLocation} />
      </GoogleMap>
    </div>
  );
}
