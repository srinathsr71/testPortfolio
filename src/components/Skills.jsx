import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, PenTool, Database } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const [selectedSkills, setSelectedSkills] = useState(new Set());

    const toggleSkill = (categoryIndex, skillIndex) => {
        const skillId = `${categoryIndex}-${skillIndex}`;
        setSelectedSkills(prev => {
            const newSet = new Set(prev);
            if (newSet.has(skillId)) {
                newSet.delete(skillId);
            } else {
                newSet.add(skillId);
            }
            return newSet;
        });
    };

    const skillCategories = [
        {
            title: 'Testing Expertise',
            icon: <Code size={30} />,
            skills: ['Automation Testing', 'API Testing', 'Mobile Testing', 'Functional Testing', 'Regression Testing', 'Backend Testing', 'UAT', 'BDD Cucumber']
        },
        {
            title: 'Automation Frameworks',
            icon: <Server size={30} />,
            skills: ['Selenium WebDriver', 'Appium', 'Playwright (JS)', 'TestNG', 'Page Object Model (POM)', 'Rest Assured']
        },
        {
            title: 'Programming & Databases',
            icon: <Database size={30} />,
            skills: ['Java', 'Python', 'JavaScript', 'MySQL', 'SOQL', 'JSON Path']
        },
        {
            title: 'Tools & Utilities',
            icon: <PenTool size={30} />,
            skills: ['Postman', 'JIRA', 'Bugasura', 'Charles Proxy', 'ADB', 'Logcat', 'Android Studio']
        },
        {
            title: 'DevOps & Cloud',
            icon: <Server size={30} />,
            skills: ['Jenkins CI/CD', 'Git', 'Docker', 'Maven', 'AWS (EC2, VPC)']
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Technical Skills
                </motion.h2>

                <div className="bento-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            className="skill-card"
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <div className="skill-icon">
                                {category.icon}
                            </div>
                            <h3 className="skill-title">{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, skillIndex) => {
                                    const skillId = `${categoryIndex}-${skillIndex}`;
                                    const isSelected = selectedSkills.has(skillId);
                                    return (
                                        <li
                                            key={skillIndex}
                                            className={isSelected ? 'selected' : ''}
                                            onClick={() => toggleSkill(categoryIndex, skillIndex)}
                                        >
                                            {skill}
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
