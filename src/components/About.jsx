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
                        I am a <strong>Full-Stack Web Developer and Cybersecurity Professional</strong> with experience building scalable applications and AI-powered development workflows. I am highly skilled in <strong>backend architecture, RESTful APIs, secure authentication</strong>, and modern JavaScript and Python ecosystems.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Certified in the <strong>NIST framework</strong> and holding a <strong>Google Cybersecurity Professional Certificate</strong>, I have practical knowledge of risk assessment, network security, and secure coding practices. I have a proven track record of delivering production-ready features in Agile environments while leveraging AI tools to consistently improve development velocity.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
