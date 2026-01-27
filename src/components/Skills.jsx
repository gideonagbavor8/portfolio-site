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
                { name: "Next.js", icon: <SiNextdotjs /> },
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "REST API", icon: <span style={{ fontWeight: 'bold' }}>api</span> },
            ]
        },
        {
            category: "Database",
            items: [
                { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
                { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
                { name: "Prisma", icon: <SiPrisma /> },
            ]
        },
        {
            category: "Tools & Other",
            items: [
                { name: "Git", icon: <FaGitAlt color="#F05032" /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "Responsive", icon: <span>📱</span> },
                { name: "Auth", icon: <span>🔒</span> },
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
                            className="skill-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <h3>{category.category}</h3>
                            <div className="skill-items-container">
                                {category.items.map((skill, sIdx) => (
                                    <div key={sIdx} className="skill-item">
                                        <span className="skill-icon">{skill.icon}</span>
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
