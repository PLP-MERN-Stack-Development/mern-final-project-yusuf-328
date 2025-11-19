import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { io } from "socket.io-client";

// Fix default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Connect to backend socket
const BACKEND_URL =
"https://road-hazard-report.onrender.com"; //<-- deployed backend
const socket = io(BACKEND_URL);

function MapView() {
  const [hazards, setHazards] = useState([]);

  useEffect(() => {
    // Initial fetch from backend
    const fetchHazards = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/hazards`);
        const data = await res.json();
        setHazards(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHazards();

    // Listen for new hazards from Socket.IO
    socket.on("newHazard", (hazard) => {
      setHazards((prev) => {
        // Avoid duplicates
        if (prev.some((h) => h._id === hazard._id)) return prev;
        return [...prev, hazard];
      });
    });

    // Clean up on unmount
    return () => {
      socket.off("newHazard");
    };
  }, []);

  return (
    <div style={{ height: "80vh", width: "100%", padding: "20px" }}>
      <h2>Hazard Map</h2>
      <MapContainer
        center={[6.5244, 3.3792]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {hazards.map((hazard) => (
          <Marker
            key={hazard._id}
            position={[parseFloat(hazard.latitude), parseFloat(hazard.longitude)]}
          >
            <Popup>
              <strong>Type:</strong> {hazard.type} <br />
              <strong>Severity:</strong> {hazard.severity} <br />
              <strong>Description:</strong> {hazard.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;