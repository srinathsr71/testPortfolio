import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="about-text-centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>
                        Hello! I'm S R Srinath, an SDET / QA Engineer with 3.5+ years of experience in Manual, API, and Automation testing across Salesforce Service Cloud, Banking, and AI applications.
                    </p>
                    <p>
                        My journey in QA has led me to design scalable test frameworks from scratch, improve test coverage, and integrate CI/CD pipelines (Jenkins, Git) for high-quality release readiness.
                    </p>
                    <p>
                        Today, I specialize in building modular automation using Java, Selenium WebDriver, TestNG, and Page Object Model (POM). I have a proven track record of reducing regression execution times by 40% and improving defect detection rates by 20%.
                    </p>
                    <p>
                        I actively focus on AI & Data Integrity, having built Proof-of-Concepts (POC) using Microsoft Copilot Studio to automate Salesforce SOQL queries, and validated dynamic case routing and AI prediction outputs in production.
                    </p>
                    <p>
                        Core QA Tools I Use:
                    </p>
                    <ul className="skills-list">
                        <li>Selenium & Java</li>
                        <li>Appium Mobile</li>
                        <li>Salesforce Service Cloud</li>
                        <li>Postman & Rest Assured</li>
                        <li>Jenkins CI/CD</li>
                        <li>Playwright (JS)</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

