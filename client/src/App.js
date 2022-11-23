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
import Contact from "./pages/Contact";
import AddVideo from "./components/Videos/AddVideo";
import CreateAboutMe from './components/Aboutme/CreateAboutMe';
import UpdateAboutme from "./components/Aboutme/UpdateAboutme";

export default function App() {
  return (
    <div>
      <div>
        <Navbar className="text-xl font-bold" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/create-about-me" element={<CreateAboutMe />} />
          {/* <Route path="/update-about-me" element={<UpdateAboutme />} /> */}
          <Route path="/login" element={<LoginPopup />} />
          <Route path="/signup" element={<SignUpPopup />} />
          <Route path="/gallery" element={<ShowGallery />} />
          <Route path="/gallery/add-photo" element={<AddPicture />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos/add-video" element={<AddVideo />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
