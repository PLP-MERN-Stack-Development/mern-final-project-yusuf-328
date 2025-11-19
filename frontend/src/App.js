import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReportHazard from "./pages/ReportHazard";
import MapView from "./pages/MapView";
import "./App.css";  // <- import your CSS here
import Safe from "./pages/Safe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportHazard />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/safety" element={<Safe />} />
      </Routes>
    </Router>
  );
}

export default App;