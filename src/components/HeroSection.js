// src/components/HeroSection.js
import React from 'react';
import bookImage from './image.png';  // Import your image

function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center bg-light p-5">
      <div className="text-start w-50">
        <h2>Discover and Review Your Favorite Books</h2>
        <p>Join our community of book lovers. Review classics, discover hidden gems, and share your thoughts.</p>
      </div>
      <img src={bookImage} alt="Books" className="img-fluid rounded w-50" />  {/* Use the imported image */}
    </section>
  );
}

export default HeroSection;
