import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// c:\Users\dk1146\Downloads\placeholder.png
const MyMapContainer = () => {
    const LatLog=[17.6090699,75.618446]
    const locationIcon = L.icon({
      iconUrl: '/images/placeholder.png', // URL of the custom icon image (you can replace this with any other icon)
      iconSize: [38, 38], // Size of the icon
      iconAnchor: [22, 38], // Point of the icon which will correspond to marker's location
      popupAnchor: [0, -38], // Point from which the popup should open relative to the iconAnchor
    });

  return (
    <MapContainer center={LatLog} zoom={13} style={{ height: '400px', width: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={LatLog} icon={locationIcon} style={{color:"red"}}>
        <Popup>
          JarwardhanOnline.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMapContainer;
