// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const boxes = [
    { title: "Report Hazard", route: "/report", color: "#ff7043" }, // reddish-orange
    { title: "View on Map", route: "/map", color: "#ffd54f" },       // yellow
    { title: "Stay Safe", route: "/safety", color: "#4db6ac" },     // teal
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ff9800", // bright orange background
        color: "#fff",
        padding: "60px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Welcome to Road Hazard Tracker
      </h1>
      <p style={{ textAlign: "center", marginBottom: "50px", fontSize: "18px" }}>
        Report hazards, view them on the map, and stay safe!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {boxes.map((box) => (
          <div
            key={box.title}
            onClick={() => navigate(box.route)}
            style={{
              minWidth: "200px",
              padding: "40px 20px",
              backgroundColor: box.color,
              borderRadius: "15px",
              cursor: "pointer",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "18px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
          >
            {box.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;