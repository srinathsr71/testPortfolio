import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, FolderOpen } from 'lucide-react';
import resumeFile from '../assets/SR_Srinath_Resume.pdf';
import profileImg from '../assets/Profile_photo.jpg';
import heroGraphic from '../assets/hero_graphic.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-holo" style={{ backgroundImage: `url(${heroGraphic})` }}>
            <div className="hero-overlay"></div>
            
            <div className="container hero-holo-container">
                {/* Left Side: Frosted Glass Content Panel */}
                <motion.div 
                    className="hero-holo-content glass-panel"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="holo-badge">
                        <span className="holo-pulse"></span>
                        Available for new opportunities
                    </div>
                    
                    <h1 className="holo-title">
                        I break software<br />
                        <span className="holo-text-glow">so users don't.</span>
                    </h1>
                    
                    <span className="holo-subtitle">S R Srinath · Associate SDET</span>
                    
                    <p className="holo-description">
                        Detail-oriented SDET specializing in Manual, API, and 
                        Automation testing across Salesforce Service Cloud, Banking, 
                        and AI applications. I find bugs before your users do.
                    </p>

                    {/* Stats matching the old vercel link */}
                    <div className="holo-stats-row">
                        <div className="holo-stat-item">
                            <span className="holo-stat-number">3.5+</span>
                            <span className="holo-stat-label">Years Experience</span>
                        </div>
                        <div className="holo-stat-item">
                            <span className="holo-stat-number">200+</span>
                            <span className="holo-stat-label">Bugs Reported</span>
                        </div>
                        <div className="holo-stat-item">
                            <span className="holo-stat-number">6+</span>
                            <span className="holo-stat-label">Products Shipped</span>
                        </div>
                    </div>

                    <div className="holo-actions">
                        <a href="#projects" className="btn-holo btn-holo-primary">
                            <FolderOpen size={18} /> View Projects
                        </a>
                        <a href="#contact" className="btn-holo btn-holo-outline">
                            Contact Me <ArrowRight size={18} />
                        </a>
                        <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn-holo btn-holo-primary">
                            <Eye size={18} /> Resume
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Floating Profile & Tech Cards */}
                <motion.div 
                    className="hero-holo-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="holo-profile-container">
                        <div className="holo-ring holo-ring-1"></div>
                        <div className="holo-ring holo-ring-2"></div>
                        <img src={profileImg} alt="S R Srinath" className="holo-profile-img" />
                        
                        {/* 4 Floating Tech Cards */}
                        <div className="holo-float-card glass-panel tech-card-1">
                            <div className="tech-icon" style={{ background: 'rgba(168,85,247,0.2)' }}>🤖</div>
                            <span>Selenium + Java</span>
                        </div>
                        <div className="holo-float-card glass-panel tech-card-2">
                            <div className="tech-icon" style={{ background: 'rgba(238, 244, 246, 0.2)' }}>☁️</div>
                            <span>Salesforce Service Cloud</span>
                        </div>
                        <div className="holo-float-card glass-panel tech-card-3">
                            <div className="tech-icon" style={{ background: 'rgba(173, 239, 151, 0.2)' }}>🧪</div>
                            <span>API & Microservices</span>
                        </div>
                        <div className="holo-float-card glass-panel tech-card-4">
                            <div className="tech-icon" style={{ background: 'rgba(236,72,153,0.2)' }}>📱</div>
                            <span>Appium Mobile Testing</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
