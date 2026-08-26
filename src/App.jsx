import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer'; // <--- Footer'ni import qilish
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="bg-[#030712] min-h-screen text-white font-sans selection:bg-indigo-500 selection:text-white relative">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer /> {/* <--- Footer'ni shu yerga qo'shamiz */}
      <ScrollToTop />
    </div>
  );
}