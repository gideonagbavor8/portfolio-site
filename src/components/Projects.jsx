import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import your project images
import ecommerceImg from '../assets/projects/ecommerce_dashboard.png';
import libraryImg from '../assets/projects/library_system.png';
import taskFlowImg from '../assets/projects/taskflow.jpeg';
import contactAPIImg from '../assets/projects/contactsapi.jpeg';
// Add more imports as you add more images:
// import taskManagerImg from '../assets/projects/task_manager.png';
// import contactAPIImg from '../assets/projects/contact_api.png';

const Projects = () => {
    const projects = [
        {
            title: "Sleep Outside Website",
            description: "A frontend e-commerce application designed for outdoor enthusiasts. Features include a responsive product catalog, shopping cart functionality, secure checkout integration, and an admin dashboard for inventory management.",
            tags: ["HTML/CSS", "JavaScript", "Node.js", "JSON Storage"],
            image: ecommerceImg,
            liveLink: "https://sleep-outside14.netlify.app/",
            githubLink: ""
        },
        {
            title: "Book Borrowing Website",
            description: "Comprehensive library management system allowing users to browse, borrow, and return books. Includes user authentication, real-time availability tracking, and a robust database design for handling transactions.",
            tags: ["Node.js", "Express", "PostgreSQL", "Authentication"],
            image: libraryImg,
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Task Flow App",
            description: "A full-stack task management application built with Next.js, TypeScript, and PostgreSQL. Features user authentication, real-time task CRUD operations, and a modern responsive UI with dark mode support.",
            tags: ["React", "Express", "MongoDB"],
            image: taskFlowImg,
            liveLink: "https://taskflow-app-v2.vercel.app/",
            githubLink: "https://github.com/gideonagbavor8/taskflow-app-v2"
        },
        {
            title: "Contact API Project",
            description: "Secure RESTful API enabling contact management with full CRUD operations. Implements JWT authentication, input validation, and optimized database queries for high performance.",
            tags: ["Node.js", "API Design", "Security", "Swagger"],
            image: contactAPIImg,
            liveLink: "https://contacts-api-8w2w.onrender.com/api-docs",
            githubLink: "https://github.com/gideonagbavor8/contacts-api"
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
                        <div
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
