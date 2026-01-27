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
                        I am a <strong>Software Developer</strong> with hands-on experience in full-stack web development, backend architecture, and collaborative project execution. Skilled in <strong>HTML, CSS, JavaScript, Python, React, Node.js, Express, MongoDB, PostgreSQL, Django, Next.js,</strong> and RESTful APIs.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        I have a proven ability to write clean, scalable code and troubleshoot web applications, with experience in <strong>Agile workflows</strong>, Git version control, and responsive design. Additionally, I am trained in <strong>Google Cybersecurity fundamentals</strong>, including network security, risk assessment, and secure authentication practices.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
