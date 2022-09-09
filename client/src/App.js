import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


export default function App() {
  return (
    <div className="text-xl font-bold">
      <div>
    <Navbar />
    <Routes>
      <Route path='/'  element={<Home />} />
    </Routes>
    
    </div>
    </div>
  );
}