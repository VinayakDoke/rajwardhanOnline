import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    
    const latitude= 17.6090699;
    const longitude=75.618446;
    // AIzaSyDE1HP7Ns_EfgbaYUSsaJi1wNVcp_r1ouY

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDE1HP7Ns_EfgbaYUSsaJi1wNVcp_r1ouY', // Replace with your API key
  });

  if (loadError) return <div>Error loading maps.</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '400px',
      }}
      center={{ lat: latitude, lng: longitude }}
      zoom={14}
    >
      {/* <Marker position={{ lat: latitude, lng: longitude }} /> */}
      <Marker
        position={{ lat: latitude, lng: longitude }}
        icon={{
          url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Example custom icon URL
          scaledSize: new window.google.maps.Size(40, 40), // Resize the icon if needed
        }}
      />
    </GoogleMap>
  );
};

export default Map;
