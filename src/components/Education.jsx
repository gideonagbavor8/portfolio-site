import React from 'react';
import { FaUniversity, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    <motion.div
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            display: 'flex',
                            gap: '1.5rem',
                            alignItems: 'flex-start'
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{
                            fontSize: '2rem',
                            color: 'var(--accent)',
                            padding: '1rem',
                            backgroundColor: 'rgba(56, 189, 248, 0.1)',
                            borderRadius: '1rem'
                        }}>
                            <FaUniversity />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Bachelor of Applied Science</h3>
                            <p style={{ color: 'var(--accent)', fontWeight: '500', marginBottom: '0.5rem' }}>BYU-Idaho</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>2024 – 2027 (Expected)</p>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Major in Applied Technology with a focus on Software Development and Web Technologies.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            display: 'flex',
                            gap: '1.5rem',
                            alignItems: 'flex-start'
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div style={{
                            fontSize: '2rem',
                            color: 'var(--accent)',
                            padding: '1rem',
                            backgroundColor: 'rgba(56, 189, 248, 0.1)',
                            borderRadius: '1rem'
                        }}>
                            <FaCertificate />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Web Developement Certificate</h3>
                            <p style={{ color: 'var(--accent)', fontWeight: '500', marginBottom: '0.5rem' }}>BYU-Idaho</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>2024 – 2026</p>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Specialized certification in full-stack web development, covering modern frameworks and database management.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
