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
        <footer id="contact" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '2rem', position: 'relative' }}>
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
                                        border: '1px solid var(--bg-secondary)',
                                        backgroundColor: 'var(--bg-secondary)',
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
                                        border: '1px solid var(--bg-secondary)',
                                        backgroundColor: 'var(--bg-secondary)',
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
                                        border: '1px solid var(--bg-secondary)',
                                        backgroundColor: 'var(--bg-secondary)',
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

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                            <a href="https://www.linkedin.com/in/gideon-k-agbavor" className="icon-link" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/gideonagbavor8" className="icon-link" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                <FaGithub />
                            </a>
                            <a href="mailto:gideonagbavor8@gmail.com" className="icon-link" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                <FaEnvelope />
                            </a>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            &copy; {new Date().getFullYear()} Gideon Komla Agbavor. All rights reserved.
                        </p>
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
        </footer>
    );
};

export default Contact;
