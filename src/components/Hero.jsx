import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile-pic.jpg';

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--nav-height)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle background glow effect */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 60%)',
                filter: 'blur(60px)',
                zIndex: -1,
                opacity: 0.6
            }} />
            
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                gap: '3rem',
                textAlign: 'center',
                zIndex: 1
            }}>
                <style>{`
                  @media (min-width: 768px) {
                    #hero .container { 
                        flex-direction: row; 
                        text-align: left; 
                        justify-content: space-between;
                    }
                    .hero-text { 
                        align-items: flex-start !important; 
                        flex: 1.2 !important;
                    }
                    .hero-image {
                        flex: 0.8 !important;
                        justify-content: flex-end !important;
                    }
                  }
                  
                  .gradient-text {
                      background: linear-gradient(135deg, var(--accent) 0%, #8b5cf6 100%);
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                  }
                  
                  .social-icon {
                      font-size: 1.8rem;
                      color: var(--text-secondary);
                      transition: var(--transition);
                  }
                  
                  .social-icon:hover {
                      color: var(--accent);
                      transform: translateY(-3px);
                  }
                  
                  .blob-image {
                      animation: morph 8s ease-in-out infinite;
                      background-position: 50%;
                      background-repeat: no-repeat;
                      background-size: cover;
                      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                      transition: all 1s ease-in-out;
                      box-shadow: 0 10px 30px -10px rgba(2, 132, 199, 0.4);
                  }
                  
                  @keyframes morph {
                      0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                      50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
                      100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                  }
                `}</style>

                <motion.div 
                    className="hero-text" 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.2rem'
                    }}
                >
                    <motion.div variants={itemVariants} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        backgroundColor: 'var(--accent-soft)',
                        border: '1px solid rgba(2, 132, 199, 0.2)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                    }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
                        Available for Work
                    </motion.div>

                    <motion.h1 variants={itemVariants} style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                        fontWeight: '800', 
                        lineHeight: 1.1, 
                        letterSpacing: '-1px' 
                    }}>
                        Hi, I'm <br />
                        <span className="gradient-text">Gideon Agbavor</span>
                    </motion.h1>

                    <motion.h3 variants={itemVariants} style={{ 
                        fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
                        color: 'var(--text-secondary)',
                        fontWeight: '500'
                    }}>
                        Full-Stack Developer & Security Pro
                    </motion.h3>

                    <motion.p variants={itemVariants} style={{ 
                        maxWidth: '600px', 
                        fontSize: '1.05rem', 
                        color: 'var(--text-secondary)', 
                        lineHeight: '1.7',
                        marginTop: '0.5rem',
                        marginBottom: '1rem'
                    }}>
                        I build scalable, secure web applications leveraging modern JavaScript ecosystems and AI-powered workflows. Passionate about crafting resilient backend architectures and engaging digital experiences.
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ 
                        display: 'flex', 
                        gap: '1.2rem',
                        marginBottom: '1rem' 
                    }}>
                        <a href="https://linkedin.com/in/gideonagbavor8" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/gideonagbavor8" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="mailto:gideonagbavor8@gmail.com" className="social-icon">
                            <FaEnvelope />
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} style={{ 
                        display: 'flex', 
                        gap: '1rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <a href="#projects" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>Latest Work</a>
                        <a href="#contact" className="btn btn-outline" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>Get in Touch</a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    style={{ 
                        flex: 1, 
                        display: 'flex', 
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    {/* Abstract design elements behind image */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        border: '2px solid var(--accent)',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                        transform: 'rotate(-5deg) scale(1.05)',
                        opacity: 0.3,
                        zIndex: -1
                    }}></div>
                    
                    <div className="blob-image" style={{
                        width: 'clamp(250px, 30vw, 380px)',
                        height: 'clamp(250px, 30vw, 380px)',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '4px solid var(--bg-secondary)',
                        background: 'var(--bg-secondary)'
                    }}>
                        <img
                            src={profilePic}
                            alt="Gideon Komla Agbavor"
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
