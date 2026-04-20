import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events to shrink/style the navbar dynamically
  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar + some padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  // Framer motion variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      height: 'var(--nav-height)',
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
      }}>
        <div className="logo" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'var(--accent)',
          cursor: 'pointer'
        }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
          Gideon.Dev
        </div>

        {/* Desktop Menu */}
        <ul style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }} className="desktop-menu">
           <style>{`
            @media (max-width: 768px) {
              .desktop-menu { display: none !important; }
              .mobile-toggle { display: block !important; }
            }
            @media (min-width: 769px) {
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                style={{
                  color: 'var(--text-secondary)',
                  fontWeight: '500',
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={toggleMenu} style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
          <div style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--bg-secondary)',
            padding: '2rem',
                display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            {navLinks.map((link) => (
              <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)}
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-primary)',
                  width: '100%',
                  textAlign: 'center',
                  padding: '0.5rem'
                }}
                >
                  {link.name}
              </a>
              ))}
          </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;