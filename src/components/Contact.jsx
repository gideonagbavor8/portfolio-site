import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer id="contact" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '2rem' }}>
            <div className="container" style={{ padding: '5rem 1rem' }}>
                <h2 className="section-title">Get In Touch</h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '3rem'
                }}>
                    <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Available for freelance & junior roles</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <a href="mailto:contact@gideon.dev" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Say Hello
                        </a>
                    </div>

                    <div style={{
                        width: '100%',
                        maxWidth: '500px',
                        backgroundColor: 'var(--bg-primary)',
                        padding: '2rem',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                                <input type="text" placeholder="Your Name" style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--bg-secondary)',
                                    backgroundColor: 'var(--bg-secondary)',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                                <input type="email" placeholder="email@example.com" style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--bg-secondary)',
                                    backgroundColor: 'var(--bg-secondary)',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
                                <textarea rows="4" placeholder="Your Message" style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--bg-secondary)',
                                    backgroundColor: 'var(--bg-secondary)',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Send Message</button>
                        </form>
                    </div>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                            <a href="https://linkedin.com" className="icon-link" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com" className="icon-link" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                <FaGithub />
                            </a>
                            <a href="mailto:contact@gideon.dev" className="icon-link" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                <FaEnvelope />
                            </a>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            &copy; {new Date().getFullYear()} Gideon Komla Agbavor. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
