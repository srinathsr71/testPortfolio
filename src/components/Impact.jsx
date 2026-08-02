import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Clock, Brain, Activity } from 'lucide-react';
import './Impact.css';

const Impact = () => {
    const impacts = [
        {
            icon: <Clock size={28} />,
            title: "40% Faster Execution",
            text: "Reduced regression suite time significantly by building a modular Appium/Selenium framework.",
            color: "var(--indigo)"
        },
        {
            icon: <Brain size={28} />,
            title: "~4 Hours Saved Daily",
            text: "Demonstrated AI potential via Copilot Studio POC, automating manual log analysis tasks.",
            color: "var(--purple)"
        },
        {
            icon: <Activity size={28} />,
            title: "20% Better Detection",
            text: "Improved early defect detection by incorporating rigorous API & Microservices checks.",
            color: "var(--pink)"
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "100% Data Integrity",
            text: "Ensured flawless Salesforce data synchronization and edge-case routing accuracy.",
            color: "var(--emerald)"
        },
        {
            icon: <Zap size={28} />,
            title: "Zero-Downtime Deployments",
            text: "Integrated CI/CD pipelines (Jenkins) ensuring stable and reliable release cycles.",
            color: "var(--cyan)"
        }
    ];

    return (
        <section id="impact" className="section impact-section">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Impact & <span className="gradient-text">Stats</span>
                </motion.h2>
                <p className="section-desc">
                    Key metrics and measurable achievements from my recent automation engineering roles.
                </p>

                <div className="impact-grid">
                    {impacts.map((item, index) => (
                        <motion.div 
                            className="impact-card glass-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ '--accent': item.color }}
                        >
                            <div className="impact-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3 className="impact-title">{item.title}</h3>
                            <p className="impact-text">{item.text}</p>
                            <div className="impact-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
