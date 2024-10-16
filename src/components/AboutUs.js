// src/components/AboutUs.js
import React from 'react';
import aboutImage from './about.png'; // Make sure to import the image if you have it in the components folder

function AboutUs() {
  return (
    <section id="about" className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <img src={aboutImage} alt="Team Photo" className="img-fluid rounded mx-auto d-block mb-3" />
      <p className="text-center">
        We are passionate about books and aim to create a platform for readers to share their reviews.
      </p>
    </section>
  );
}

export default AboutUs;
