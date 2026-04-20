import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaServer, FaLock, FaShieldAlt, FaKey, FaDatabase, FaLinux, FaRobot, FaBrain, FaSearch, FaBug, FaNetworkWired, FaSyncAlt, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiPostgresql, SiMysql, SiPrisma, SiTailwindcss, SiTypescript, SiDjango, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages & Frameworks",
            items: [
                { name: "Python", icon: <FaPython color="#3776AB" /> },
                { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
                { name: "C#", icon: <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#239120', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>C#</span> },
                { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
                { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
                { name: "React", icon: <FaReact color="#61DAFB" /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "Django", icon: <SiDjango color="#092E20" /> },
            ]
        },
        {
            category: "Databases & ORM",
            items: [
                { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
                { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
                { name: "Prisma", icon: <SiPrisma /> },
                { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
            ]
        },
        {
            category: "Cybersecurity",
            items: [
                { name: "Network Security", icon: <FaShieldAlt color="#FF5733" /> },
                { name: "Risk Assessment", icon: <FaSearch /> },
                { name: "Vulnerabilities", icon: <FaBug /> },
                { name: "SIEM tools", icon: <FaServer /> },
                { name: "IDS", icon: <FaNetworkWired /> },
                { name: "Linux", icon: <FaLinux /> },
                { name: "SQL", icon: <FaDatabase /> },
            ]
        },
        {
            category: "Web & Security",
            items: [
                { name: "REST APIs", icon: <FaCode /> },
                { name: "JWT", icon: <FaKey /> },
                { name: "OAuth", icon: <FaKey /> },
                { name: "Secure Coding", icon: <FaLock /> },
            ]
        },
        {
            category: "Tools & Workflow",
            items: [
                { name: "Git", icon: <FaGitAlt color="#F05032" /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "Agile/Scrum", icon: <FaSyncAlt /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
            ]
        },
        {
            category: "AI-Augmented Dev",
            items: [
                { name: "LangChain", icon: <FaBrain color="#FFD700" /> },
                { name: "CrewAI", icon: <FaRobot /> },
                { name: "Cursor", icon: <FaRobot /> },
                { name: "Claude", icon: <FaBrain /> },
                { name: "GitHub Copilot", icon: <FaGithub /> },
                { name: "v0.dev", icon: <FaRobot /> },
                { name: "Midjourney", icon: <FaBrain /> },
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
