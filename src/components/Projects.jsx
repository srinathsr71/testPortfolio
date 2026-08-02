import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, Video, Cloud, Brain, MessageCircle } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const projects = [
        {
            icon: <Cloud  size={28} />,
            title: 'Keysight Service Cloud AI Applications',
            description: 'Tested Salesforce Service Cloud to validate case creation, milestone tracking, and dynamic case routing to specific queues based on regional parameters and language criteria.',
            strategy: ['Functional Testing', 'Regression Testing', 'Backend Testing', 'AI Validation'],
            tools: ['Salesforce Service Cloud', 'SOQL Queries', 'Coveo', 'Nuro7 AI'],
            challenges: 'Validating dynamic case routing and AI prediction outputs (Nuro7 model) combined with Coveo integration required rigorous testing to ensure data consistency across multiple systems.',
            solution: 'Conducted extensive backend data validation by executing complex SOQL queries to verify AI prediction outputs, confidence scores, and automated field updates. Ensured seamless case distribution via Omni-Channel routing.',
            results: 'Improved data integrity, prevented AI prediction mismatches in live environments, and ensured smooth case routing workflows.',
            color: '#12def0'
        },
        {
            icon: <Brain  size={28} />,
            title: 'Core Banking System (CBS) & Digital Banking Application',
            description: 'Executed end-to-end functional, regression, and microservices API testing for customer onboarding modules (ABN, KYC, KYB). Validated core lending workflows and payment processing integrations.',
            strategy: ['API Testing', 'Microservices Validation', 'Functional Testing', 'Regression Testing'],
            tools: ['Postman', 'Rest Assured', 'ADB', 'Charles Proxy', 'Stripe', 'Equifax'],
            challenges: 'Ensuring seamless 3rd-party identity integrations and isolating microservice failures or network latency issues during critical banking transactions.',
            solution: 'Performed thorough API schema validation for microservices. Captured and analyzed mobile logs using ADB and Charles Proxy to isolate drop-offs and latency. Verified interest calculation algorithms and repayment schedules.',
            results: 'Secured core banking transactions and minimized transaction drop-offs. Ensured 100% compliance with identity and payment gateway (Stripe) requirements.',
            color: '#8b5cf6'
        },
        {
            icon: <Video size={28} />,
            title: 'Koovers Web and Mobile Applications',
            description: 'Designed, developed, and maintained scalable UI automation frameworks. Automated mobile testing on Android platforms to validate critical end-to-end user journeys.',
            strategy: ['UI Automation', 'Mobile Automation', 'Data-driven Testing', 'Regression Testing'],
            tools: ['Selenium WebDriver', 'Java', 'TestNG', 'BDD Cucumber', 'Appium', 'Jenkins'],
            challenges: 'Maintaining automated test stability and expanding edge-case test coverage for diverse datasets across web and mobile platforms.',
            solution: 'Built modular automation frameworks using Page Object Model (POM). Managed test datasets using JSON and Apache POI (Excel) for data-driven testing. Integrated suites into Jenkins CI/CD.',
            results: 'Generated Extent Reports for clear visibility. Expanded edge-case coverage and significantly reduced manual testing effort.',
            color: '#0eee42'
        },
        {
            icon: <MessageCircle size={28} />,
            title: 'Veera(Mobile Browser) For Android',
            description: 'Developed and executed manual test cases covering functional, regression, and UAT scenarios for Android mobile browser builds.',
            strategy: ['Functional Testing', 'API Testing', 'UAT', 'Defect Management'],
            tools: ['Postman', 'JIRA', 'Bugasura', 'ADB Logs'],
            challenges: 'Tracking network traffic issues and isolating defects in rapid mobile browser builds required quick turnarounds and root-cause analysis.',
            solution: 'Performed API testing on RESTful endpoints. Logged, tracked, and managed defects using JIRA and Bugasura, capturing ADB logs and network traffic to assist developers.',
            results: 'Enabled rapid developer root-cause analysis and improved overall mobile browser stability and response accuracy.',
            color: '#10b981'
        },
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    QA Case Studies
                </motion.h2>
                <motion.p
                    className="projects-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Real-world testing scenarios, challenges solved, and measurable quality improvements
                </motion.p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            style={{ '--project-color': project.color }}
                        >
                            <div className="project-header">
                                <div className="project-icon" style={{ color: project.color }}>
                                    {project.icon}
                                </div>
                                {/* <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.docs} target="_blank" rel="noopener noreferrer" aria-label="Documentation" title="Docs">
                                        <ExternalLink size={18} />
                                    </a>
                                </div> */}
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-strategy">
                                {project.strategy.map((s, i) => (
                                    <span key={i} className="strategy-tag">{s}</span>
                                ))}
                            </div>

                            <div className="project-tools">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="tool-tag">{tool}</span>
                                ))}
                            </div>

                            <button
                                className="expand-btn"
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                aria-expanded={expandedIndex === index}
                            >
                                {expandedIndex === index ? (
                                    <><ChevronUp size={16} /> Hide Details</>
                                ) : (
                                    <><ChevronDown size={16} /> View Details</>
                                )}
                            </button>

                            {expandedIndex === index && (
                                <motion.div
                                    className="project-details"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="detail-block">
                                        <h4>🔍 Challenge</h4>
                                        <p>{project.challenges}</p>
                                    </div>
                                    <div className="detail-block">
                                        <h4>💡 Solution</h4>
                                        <p>{project.solution}</p>
                                    </div>
                                    <div className="detail-block">
                                        <h4>📈 Results</h4>
                                        <p>{project.results}</p>
                                    </div>
                                </motion.div>
                            )}

                            <div className="project-glow" style={{ background: project.color }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
