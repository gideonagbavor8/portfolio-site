import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: "Freelance Full-Stack Web Developer",
            organization: "Self-Employed",
            period: "2024 – Present",
            description: "Designing and developing custom web solutions for diverse clients. Managing the entire software development lifecycle, from requirements gathering to deployment and maintenance.",
            icon: <FaBriefcase />,
            type: 'work'
        },
        {
            title: "Content Advisory Board Member",
            organization: "LogRocket",
            period: "2024 (Completed)",
            description: "Reviewed technical articles and provided strategic feedback on content quality, accuracy, and relevance for a global audience of developers. Contributed to maintaining high editorial standards.",
            icon: <FaBriefcase />,
            type: 'work'
        },
        {
            title: "Web & Computer Programming Certificate",
            organization: "BYU-Idaho",
            period: "2024 – 2026 (Expected)",
            description: "Intensive coursework focused on modern web development including frontend frameworks, backend logic, database management, and algorithm design.",
            icon: <FaGraduationCap />,
            type: 'education' // Although requested in Experience, it fits the timeline flow
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
