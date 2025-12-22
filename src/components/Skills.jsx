import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiPostgresql, SiMysql, SiPrisma, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            items: [
                { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
                { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
                { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
                { name: "React", icon: <FaReact color="#61DAFB" /> },
                { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
                { name: "Express", icon: <SiExpress color="#ffffff" /> },
                { name: "REST API", icon: <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>api</span> },
            ]
        },
        {
            category: "Database",
            items: [
                { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
                { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
                { name: "Prisma", icon: <SiPrisma color="#ffffff" /> },
            ]
        },
        {
            category: "Tools & Other",
            items: [
                { name: "Git", icon: <FaGitAlt color="#F05032" /> },
                { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
                { name: "Responsive", icon: <span style={{ fontSize: '1.2rem' }}>📱</span> },
                { name: "Auth", icon: <span style={{ fontSize: '1.2rem' }}>🔒</span> },
            ]
        }
    ];

    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="skill-category"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <h3 style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '1.5rem', display: 'inline-block' }}>{category.category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {category.items.map((skill, sIdx) => (
                                    <div key={sIdx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '2rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        <span style={{ fontSize: '1.2rem' }}>{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
