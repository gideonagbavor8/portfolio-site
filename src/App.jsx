import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Analytics from "@vercel/analytics/next"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Analytics />
    </div>
  );
}

export default App;
