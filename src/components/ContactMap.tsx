"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { JSX } from "react";

// Fix default marker issue in Next.js
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function ContactMap(): JSX.Element {
  const position: LatLngExpression = [12.944969, 77.568449]; 

  return (
   <MapContainer
  center={position}
  zoom={15}
  className="h-[420px] w-full rounded-3xl shadow-xl border border-border"
  scrollWheelZoom={false}
>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={markerIcon}>
        <Popup>
          Equilibrate AI <br /> Bangalore Office
        </Popup>
      </Marker>
    </MapContainer>
  );
}