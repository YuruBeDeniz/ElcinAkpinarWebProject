import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

export default function App() {
  return (
    <div >
      <div>
    <Navbar className="text-xl font-bold"/>
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/aboutme'  element={<AboutMe />} />
    </Routes>
    
    </div>
    </div>
  );
}