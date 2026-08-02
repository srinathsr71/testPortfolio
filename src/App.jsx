import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Domains from './components/Domains';
import Impact from './components/Impact';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Skills from './components/Skills';
//import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', next);
      return next;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`app ${theme === 'light' ? 'light' : ''}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Domains />
        <About />
        <Experience />
        <Education />
        <Impact />
        <Projects />
        <Tools />
        <Skills />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
