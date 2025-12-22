import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Sleep Outside Website",
            description: "A full-stack e-commerce application designed for outdoor enthusiasts. Features include a responsive product catalog, shopping cart functionality, secure checkout integration, and an admin dashboard for inventory management.",
            tags: ["HTML/CSS", "JavaScript", "Node.js", "JSON Storage"],
            image: "https://via.placeholder.com/600x400/1e293b/38bdf8?text=Sleep+Outside+Ecommerce",
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Book Borrowing Website",
            description: "Comprehensive library management system allowing users to browse, borrow, and return books. Includes user authentication, real-time availability tracking, and a robust database design for handling transactions.",
            tags: ["Node.js", "Express", "PostgreSQL", "Authentication"],
            image: "https://via.placeholder.com/600x400/1e293b/38bdf8?text=Library+System",
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Task Management App",
            description: "Interactive productivity tool featuring drag-and-drop task organization, persistent database storage, and categorization. Built with a focus on intuitive UI/UX and efficient state management.",
            tags: ["React", "Express", "MongoDB", "Drag-n-Drop"],
            image: "https://via.placeholder.com/600x400/1e293b/38bdf8?text=Task+Manager",
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Contact API Project",
            description: "Secure RESTful API enabling contact management with full CRUD operations. Implements JWT authentication, input validation, and optimized database queries for high performance.",
            tags: ["Node.js", "API Design", "Security", "Swagger"],
            image: "https://via.placeholder.com/600x400/1e293b/38bdf8?text=Contact+API",
            liveLink: "#",
            githubLink: "#"
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="project-card"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1.0)'}
                                />
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.8rem',
                                            padding: '0.25rem 0.75rem',
                                            backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                            color: 'var(--accent)',
                                            borderRadius: '1rem'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    <a href={project.liveLink} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                                        <FaExternalLinkAlt /> Demo
                                    </a>
                                    <a href={project.githubLink} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                                        <FaGithub /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
