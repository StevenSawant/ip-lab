// src/components/ContactUs.js
import React from 'react';
import contactImage from './contact.jpg'; // Make sure to import the image if you have it in the components folder

function ContactUs() {
  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <img src={contactImage} alt="Office Location" className="img-fluid rounded mx-auto d-block mb-3" />
      <p className="text-center">Email: contact@bookreviewhub.com</p>
      <p className="text-center">Phone: +123-456-7890</p>
    </section>
  );
}

export default ContactUs;
