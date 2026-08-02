import React from 'react';
import { motion } from 'framer-motion';
import './Tools.css';

const Tools = () => {
    const toolCategories = [
        {
            category: 'Testing & QA',
            items: [
                { name: 'Selenium', emoji: '🤖', desc: 'Automation' },
                { name: 'Postman', emoji: '📮', desc: 'API Testing' },
                { name: 'Appium', emoji: '📱', desc: 'Mobile QA' },
                { name: 'Playwright', emoji: '🎭', desc: 'Web QA' },
                { name: 'Charles Proxy', emoji: '🔍', desc: 'Network' },
                { name: 'TestNG', emoji: '📋', desc: 'Test Mgmt' },
            ]
        },
        {
            category: 'Dev & DevOps',
            items: [
                { name: 'JIRA', emoji: '📌', desc: 'Bug Tracking' },
                { name: 'Git', emoji: '🌿', desc: 'Version Control' },
                { name: 'Jenkins', emoji: '🏗️', desc: 'CI/CD' },
                { name: 'Docker', emoji: '🐳', desc: 'Containers' },
                { name: 'Maven', emoji: '📦', desc: 'Build Tool' },
                { name: 'ADB', emoji: '📡', desc: 'Android Bridge' },
            ]
        },
        {
            category: 'Data & AI',
            items: [
                { name: 'AWS', emoji: '☁️', desc: 'Cloud' },
                { name: 'Salesforce', emoji: '⚡', desc: 'CRM Platform' },
                { name: 'SOQL', emoji: '🔍', desc: 'SF Data' },
                { name: 'MySQL', emoji: '🗄️', desc: 'Database' },
                { name: 'Logcat', emoji: '📝', desc: 'Android Logs' },
                { name: 'Copilot', emoji: '🧠', desc:'AI Studio' },
            ]
        }
    ];

    return (
        <section id="tools" className="section tools-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Tools & Technologies
                </motion.h2>
                <motion.p
                    className="tools-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    The tech stack I use daily to deliver quality software
                </motion.p>

                <div className="tools-categories">
                    {toolCategories.map((cat, catIdx) => (
                        <motion.div
                            key={catIdx}
                            className="tool-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                        >
                            <h3 className="tool-category-title">{cat.category}</h3>
                            <div className="tools-grid">
                                {cat.items.map((tool, toolIdx) => (
                                    <motion.div
                                        key={toolIdx}
                                        className="tool-item"
                                        whileHover={{ scale: 1.05, y: -4 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <span className="tool-emoji">{tool.emoji}</span>
                                        <span className="tool-name">{tool.name}</span>
                                        <span className="tool-desc">{tool.desc}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
