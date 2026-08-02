import React from 'react';
import { Building, Shield, Landmark, Cloud, Smartphone, Monitor, Code } from 'lucide-react';
import './Domains.css';

const Domains = () => {
    const domains = [
        { name: "Salesforce CRM, AI & Copilot Agents", icon: <Cloud size={24} /> },
        { name: "CBS (Core Banking System) & FinTech", icon: <Landmark size={24} /> },
        { name: "E-Commerce & Mobile Applications", icon: <Smartphone size={24} /> },
    ];

    return (
        <section id="domains" className="domains-section">
            <div className="container">
                <h2 className="domains-wow-title">
                    Architecting Quality Across <span className="gradient-text">High-Impact Domains</span>
                </h2>
                <div className="marquee-wrapper">
                    <div className="marquee">
                        {/* Render multiple times for a continuous loop of just 3 items */}
                        {[...domains, ...domains, ...domains, ...domains].map((domain, index) => (
                            <div className="domain-item" key={index}>
                                <span className="domain-icon">{domain.icon}</span>
                                <span className="domain-name">{domain.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Domains;
