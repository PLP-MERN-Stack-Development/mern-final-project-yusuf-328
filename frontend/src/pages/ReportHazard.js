// src/pages/ReportHazard.js
import React, { useState } from "react";

function ReportHazard() {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hazardData = { type, description, latitude, longitude, severity };

    try {
      const response = await fetch("http://localhost:5000/api/hazards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hazardData),
      });

      const data = await response.json();
      alert("Hazard reported successfully!");
      console.log(data);

      // reset form
      setType("");
      setDescription("");
      setLatitude("");
      setLongitude("");
      setSeverity("");
    } catch (error) {
      console.error("Error reporting hazard:", error);
      alert("Failed to report hazard. Try again.");
    }
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff6600",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f2f2f2", minHeight: "80vh" }}>
      <h2 style={{ textAlign: "center", color: "#ff6600" }}>Report Road Hazard</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="e.g., Pothole, Broken Light"
          style={inputStyle}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the hazard"
          style={inputStyle}
          required
        />

        <label>Latitude</label>
        <input
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="6.5244"
          style={inputStyle}
          required
        />

        <label>Longitude</label>
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="3.3792"
          style={inputStyle}
          required
        />

        <label>Severity</label>
        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          style={inputStyle}
          required
        >
          <option value="">Select severity</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit" style={buttonStyle}>Submit Hazard</button>
      </form>
    </div>
  );
}

export default ReportHazard;