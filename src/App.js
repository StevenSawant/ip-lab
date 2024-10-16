// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BookList from './components/BookList';
import Calculator from './components/Calculator';
import AboutUs from './components/AboutUs';  // Import AboutUs component
import ContactUs from './components/ContactUs'; // Import ContactUs component
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BookList />
      <Calculator />
      <AboutUs />  {/* Add AboutUs component here */}
      <ContactUs /> {/* Add ContactUs component here */}
      <Footer />
    </div>
  );
}

export default App;
