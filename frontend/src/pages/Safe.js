// src/pages/Safe.js
import React from "react";

function Safe() {
  const tips = [
    "Always wear your seatbelt.",
    "Obey traffic signs and signals.",
    "Avoid using your phone while driving.",
    "Keep a safe distance from other vehicles.",
    "Drive within speed limits.",
    "Report road hazards when you see them.",
    "Always check your mirrors before changing lanes.",
  ];

  const containerStyle = {
    padding: "30px",
    backgroundColor: "#f2f2f2",
    minHeight: "80vh",
  };

  const boxStyle = {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#ff6600",
    marginBottom: "15px",
  };

  const listStyle = {
    lineHeight: "1.8",
    paddingLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={headerStyle}>Stay Safe on the Road</h2>
        <ul style={listStyle}>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Safe;