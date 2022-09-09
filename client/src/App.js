<<<<<<< HEAD
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
=======
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components";
import Home from "./pages/Home";
>>>>>>> a9f12cdc2d0194b53190ff7c95c96fe77a0088b4

export default function App() {
  return (
    <div >
      <div>
<<<<<<< HEAD
    <Navbar className="text-xl font-bold"/>
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/aboutme'  element={<AboutMe />} />
    </Routes>
    
    </div>
=======
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
>>>>>>> a9f12cdc2d0194b53190ff7c95c96fe77a0088b4
    </div>
  );
}
