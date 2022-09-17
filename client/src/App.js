import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import LoginPopup from "./components/LoginPopup";
import SignUpPopup from "./components/SignUpPopup";
import { ShowGallery, AddPicture, Footer } from "./components";
import Videos from "./pages/Videos";

export default function App() {
  return (
    <div>
      <div>
        <Navbar className="text-xl font-bold" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/login" element={<LoginPopup />} />
          <Route path="/signup" element={<SignUpPopup />} />
          <Route path="/gallery" element={<ShowGallery />} />
          <Route path="/gallery/add-picture" element={<AddPicture />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
