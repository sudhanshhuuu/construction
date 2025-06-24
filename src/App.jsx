import './App.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import { Routes, Route } from 'react-router-dom';

import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Working from './sections/Working';
import Testimonials from './sections/Testimonials';
import AboutUs from './sections/AboutUs';
import ScrollToTop from './sections/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/working" element={<Working />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
