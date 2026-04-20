import React from 'react';
import { FaUniversity, FaCertificate, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
    const educationItems = [
        {
            title: "Bachelor of Applied Technology – Software Development",
            institution: "Brigham Young University–Idaho",
            period: "Expected 2026",
            description: "Major in Applied Technology with a focus on Software Development and modern Web Technologies.",
            icon: <FaUniversity />
        },
        {
            title: "Google Cybersecurity Professional Certificate",
            institution: "Google",
            period: "Issued Apr 2026",
            description: (
                <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <li>Completed a 9-course program covering Python, Linux, SQL, SIEM, and IDS.</li>
                    <li>Developed hands-on skills in identifying vulnerabilities and mitigating security risks.</li>
                </ul>
            ),
            icon: <FaShieldAlt />
        },
        {
            title: "Additional Technical Certifications",
            institution: "BYU-Idaho & ALX",
            period: "2024 – 2025",
            description: (
                <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <li><strong>BYU-Idaho:</strong> Web Development, Web & Computer Programming, Backend Web Development (2024–2025)</li>
                    <li><strong>ALX:</strong> AI Starter Kit (2025)</li>
                </ul>
            ),
            icon: <FaCertificate />
        }
    ];

    return (
        <section id="education">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {educationItems.map((item, index) => (
                        <motion.div
                            key={index}
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
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div style={{
                                fontSize: '2rem',
                                color: 'var(--accent)',
                                padding: '1rem',
                                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                borderRadius: '1rem',
                                flexShrink: 0
                            }}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '0.2rem' }}>{item.institution}</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: '500' }}>{item.period}</p>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    {item.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
