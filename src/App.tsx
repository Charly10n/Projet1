import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'LTC immobilier | Premium Real Estate Agency';
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Properties />
      <Services />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;