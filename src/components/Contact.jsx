import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [notification, setNotification] = useState(null); // { type: 'success' | 'error', message: '' }

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setNotification({ type: 'success', message: data.message || 'Message sent successfully!' });
            } else {
                setStatus('error');
                setNotification({ type: 'error', message: data.message || 'Failed to send message.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setNotification({ type: 'error', message: 'An error occurred. Please try again.' });
        } finally {
            if (status !== 'success') setStatus('');
        }
    };

    return (
        <section id="contact" style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '2rem', position: 'relative' }}>
            <div className="container" style={{ padding: '5rem 1rem' }}>
                <h2 className="section-title">Get In Touch</h2>

                <style>{`
                    .contact-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 3rem;
                        align-items: center;
                    }
                    .contact-divider {
                        display: none;
                    }
                    @media (min-width: 768px) {
                        .contact-grid {
                            grid-template-columns: 1fr auto 1fr;
                            gap: 4rem;
                        }
                        .contact-text {
                            text-align: left !important;
                            padding-right: 0;
                        }
                        .contact-divider {
                            display: block;
                            width: 2px;
                            height: 100%;
                            min-height: 300px;
                            background: linear-gradient(to bottom, transparent, var(--accent), transparent);
                            opacity: 0.5;
                            filter: blur(1px); /* Adds a soft blurry glow effect */
                        }
                    }
                `}</style>

                <div className="contact-grid">
                    <div className="contact-text" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's build something exceptional together</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            I am currently open to new opportunities covering freelance engagements and junior full-stack roles. Whether you have a specific project in mind, a role to fill, or just want to connect—I'd love to hear from you. My inbox is always open!
                        </p>
                        <a href="mailto:contact@gideon.dev" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.9rem 2rem', display: 'inline-block' }}>
                            Email Me Directly
                        </a>
                    </div>

                    <div className="contact-divider"></div>

                    <div style={{
                        width: '100%',
                        maxWidth: '500px',
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid var(--text-secondary)',
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'var(--text-primary)',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid var(--text-secondary)',
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'var(--text-primary)',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Your Message"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid var(--text-secondary)',
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'var(--text-primary)',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={status === 'sending'}
                                style={{ width: '100%', marginTop: '0.5rem', opacity: status === 'sending' ? 0.7 : 1 }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Notification Toast */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 50, x: '-50%' }}
                        style={{
                            position: 'fixed',
                            bottom: '2rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: notification.type === 'success' ? '#10B981' : '#EF4444',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '2rem',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            zIndex: 1000,
                            minWidth: '300px',
                            justifyContent: 'center'
                        }}
                    >
                        {notification.type === 'success' ? <FaCheckCircle size={20} /> : <FaExclamationCircle size={20} />}
                        <span style={{ fontWeight: 500 }}>{notification.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
