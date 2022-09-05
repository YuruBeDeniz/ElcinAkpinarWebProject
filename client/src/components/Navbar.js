import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
    <Link to='/'>Home</Link>
    <Link to='/aboutme'>About Me</Link>
    <Link to='/gallery'>Gallery</Link>
    <Link to='/videos'>Videos</Link>
    </div>
  )
}
