import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)'
                }}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        I am a dedicated Junior Full-Stack Web Developer currently pursuing a <strong>Web and Computer Programming Certificate</strong> at <strong>BYU-Idaho</strong>, with an expected completion in December 2026. My journey in tech is driven by a passion for building scalable applications and writing clean, maintainable code that solves real-world problems.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        With a strong foundation in both frontend and backend technologies, I enjoy the challenge of crafting seamless user experiences backed by robust server-side logic. Beyond coding, I actively contribute to the developer community, having recently served as a <strong>Content Advisory Board Member at LogRocket</strong>, where I helped shape technical content for developers worldwide.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        I am constantly learning and adapting to modern web trends, ensuring that every project I touch is built with performance, accessibility, and user satisfaction in mind.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
