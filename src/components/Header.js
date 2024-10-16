// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-dark text-white text-center py-3">
      <h1>Book Review Hub</h1>
      <nav>
        <a href="#hero" className="text-white me-3">Home</a>
        <a href="#books" className="text-white me-3">Books</a>
        <a href="#about" className="text-white me-3">About Us</a>
        <a href="#contact" className="text-white">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
