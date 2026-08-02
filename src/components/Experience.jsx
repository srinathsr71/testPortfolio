import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Moolya Software Testing Private Limited',
            role: 'Associate SDET',
            period: 'Feb 2023 - Present',
            description: [
                'Executed functional, regression, and backend testing in Salesforce Service Cloud to validate case creation, milestone tracking, and business rule assignments.',
                'Validated dynamic case routing to specific queues based on regional parameters and language criteria.',
                'Conducted backend data validation and executed SOQL queries to verify AI prediction outputs (Nuro7 model) and confidence scores.',
                'Executed end-to-end functional and microservices API testing for customer onboarding modules (ABN, KYC, KYB).',
                'Captured and analyzed mobile logs using ADB and Charles Proxy to isolate microservice failures and latency drops.',
                'Tested core lending workflows and payment processing for Digital Banking Applications.'
            ]
        },
        {
            company: 'Independent Consultant',
            role: 'QA Automation Engineer',
            period: 'Nov 2021 - Dec 2022',
            description: [
                'Developed end-to-end test suites and executed functional, regression, and usability testing across web and mobile app prototypes.',
                'Built modular automation frameworks from scratch using Java, Selenium WebDriver, TestNG, and Page Object Model (POM) design patterns.',
                'Conducted API testing using Postman and Rest Assured, validating query parameters, authentication headers, and JSON response schemas.',
                'Documented detailed test cases, traceability matrices (RTM), and bug reports in JIRA to ensure complete test coverage.',
                'Performed automated mobile testing on Android platforms using Appium.'
            ]
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-icon">
                                <Briefcase size={20} />
                            </div>
                            <div className="timeline-content">
                                <span className="period">{exp.period}</span>
                                <h3 className="role">{exp.role} <span className="company">@ {exp.company}</span></h3>
                                <ul className="description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
