// components/WorldMap.tsx
"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";



import styles from "../styles/WorldMap.module.css";

interface Country {
  id: string;
  label: string;
  isOrigin?: boolean;
}

interface WorldMapProps {
  countries: Country[];
}

// Approximate lat/lng for each country (used for marker placement)
const countryCoords: Record<string, [number, number]> = {
  india: [20.5937, 78.9629],
  usa: [38.0, -97.0],
  uk: [55.3781, -3.4360],
  uae: [23.4241, 53.8478],
  china: [35.8617, 104.1954],
  singapore: [1.3521, 103.8198],
  kenya: [-0.0236, 37.9062],
  russia: [61.5240, 105.3188],
  germany: [51.1657, 10.4515],
  australia: [-25.2744, 133.7751],
  japan: [36.2048, 138.2529],
  brazil: [-14.2350, -51.9253],
  south_africa: [-30.5595, 22.9375],
};

const INDIA_CENTER: [number, number] = countryCoords["india"];

export default function WorldMap({ countries }: WorldMapProps) {
  return (
    <MapContainer
      center={INDIA_CENTER}
      zoom={2}
      scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      {/* Dark themed tile layer */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution=""
      />


      {/* Render gold markers for each country */}
      {countries.map((c) => {
        const coords = countryCoords[c.id];
        if (!coords) return null;
        const isOrigin = c.isOrigin ?? false;
        return (
          <CircleMarker
            key={c.id}
            center={coords}
            radius={isOrigin ? 8 : 5}
            pathOptions={{
              color: "#C9A84C",
              fillColor: "#C9A84C",
              fillOpacity: 1,
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
              {c.label}
            </Tooltip>
          </CircleMarker>
        );
      })}

      {/* Animated routes from India to each destination using AntPath */}
      {countries
        .filter((c) => !c.isOrigin)
        .map((c) => {
          const dest = countryCoords[c.id];
          if (!dest) return null;
          return (
            <Polyline
              key={`route-${c.id}`}
              positions={[INDIA_CENTER, dest]}
              pathOptions={{
                color: "#1A6B1A",
                weight: 2,
                dashArray: "6 6",
                className: "animated-path",
              }}
            />
          );
        })}

      <div
        style={{
          position: "absolute",
          bottom: "5px",
          right: "10px",
          fontSize: "10px",
          opacity: 0.6,
          color: "#aaa",
          zIndex: 1000,
        }}
      >
        © OpenStreetMap
      </div>
    </MapContainer>
  );
}
