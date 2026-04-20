import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: "AI & Tech Intern (Full-Stack Focus)",
            organization: "DFX/Upper Echelon",
            period: "Nov 2025 – Feb 2026",
            description: (
                <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li>Delivered end-to-end full-stack features using Next.js, React, Tailwind, Prisma, and PostgreSQL.</li>
                    <li>Ranked Top 4 on weekly performance leaderboards while shipping production-ready prototypes.</li>
                    <li>Utilized AI coding agents to accelerate UI generation, code refactoring, and API integration.</li>
                    <li>Built investor-ready applications and pitch assets using Midjourney, Gamma, and Perplexity.</li>
                </ul>
            ),
            icon: <FaBriefcase />,
            type: 'work'
        },
        {
            title: "Content Advisory Board Member",
            organization: "LogRocket",
            period: "Aug 2025 – Present",
            description: (
                <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li>Reviewed and validated technical web development content for accuracy and industry standards.</li>
                    <li>Recommended UI/UX improvements that resulted in a 15% increase in user engagement.</li>
                    <li>Collaborated with cross-functional teams to enhance responsive design and overall site performance.</li>
                </ul>
            ),
            icon: <FaBriefcase />,
            type: 'work'
        },
        {
            title: "Data Service Specialist",
            organization: "Springboard",
            period: "Oct 2024 – Oct 2025",
            description: (
                <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li>Reviewed and refined complex datasets, reducing data discrepancies by 15%.</li>
                    <li>Improved data completeness, contributing to a 20% increase in verified records.</li>
                    <li>Implemented quality control workflows that improved user satisfaction by 30%.</li>
                </ul>
            ),
            icon: <FaBriefcase />,
            type: 'work'
        }
    ];

    return (
        <section id="experience" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        backgroundColor: 'var(--accent)',
                        opacity: 0.3
                    }}></div>

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            style={{
                                position: 'relative',
                                paddingLeft: '60px',
                                marginBottom: '3rem'
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                        >
                            {/* Timeline Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--bg-primary)',
                                border: '2px solid var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent)',
                                zIndex: 1
                            }}>
                                {exp.icon}
                            </div>

                            <div style={{
                                backgroundColor: 'var(--bg-primary)', // Contrast against bg-secondary section
                                padding: '1.5rem',
                                borderRadius: '0.5rem',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '1rem',
                                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                    color: 'var(--accent)',
                                    fontSize: '0.8rem',
                                    marginBottom: '0.5rem',
                                    fontWeight: '600'
                                }}>
                                    {exp.period}
                                </span>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{exp.title}</h3>
                                <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{exp.organization}</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
