import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Correct X logo in react-icons

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem 1rem 2rem 1rem', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <a href="https://www.linkedin.com/in/gideon-k-agbavor" className="icon-link" style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/gideonagbavor8" className="icon-link" style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaGithub />
                    </a>
                    <a href="https://x.com/gideon_agbavor" className="icon-link" style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaXTwitter />
                    </a>
                    <a href="mailto:gideonagbavor8@gmail.com" className="icon-link" style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                        <FaEnvelope />
                    </a>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    &copy; {new Date().getFullYear()} Gideon Komla Agbavor. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
