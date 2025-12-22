import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile-pic.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--nav-height)'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                gap: '4rem',
                textAlign: 'center'
            }}>
                <style>{`
          @media (min-width: 768px) {
            #hero .container { flex-direction: row; text-align: left; }
            .hero-text { align-items: flex-start !important; }
          }
        `}</style>

                <div className="hero-text" style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem', marginBottom: '0.5rem' }}>
                            Hello, I'm
                        </h2>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1.1, marginBottom: '1rem' }}>
                            Gideon Komla <br /> <span style={{ color: 'var(--text-secondary)' }}>Agbavor</span>
                        </h1>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            Junior Full-Stack Web Developer
                        </h3>
                        <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Crafting end-to-end web solutions with modern technologies – from responsive UIs to robust backends. Passionate about clean code and scalable applications.
                        </p>
                    </motion.div>

                    <motion.div
                        style={{ display: 'flex', gap: '1.5rem' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link" style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link" style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>
                            <FaGithub />
                        </a>
                        <a href="mailto:contact@gideon.dev" className="icon-link" style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>
                            <FaEnvelope />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        style={{ marginTop: '1rem' }}
                    >
                        <a href="#projects" className="btn btn-primary" style={{ marginRight: '1rem' }}>View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image"
                    style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--accent)',
                        boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
                        background: 'var(--bg-secondary)'
                    }}>
                        <img
                            src={profilePic}
                            alt="Gideon Komla Agbavor"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
