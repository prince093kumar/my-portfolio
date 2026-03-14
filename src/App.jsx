import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundSystem from './components/common/BackgroundSystem';
import SectionDivider from './components/common/SectionDivider';
import SkillsArchitecture from './components/SkillsArchitecture';
import Workflow from './components/Workflow';

const App = () => {
  const darkMode = true;
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'workflow', 'projects', 'resume', 'contact', 'certifications', 'achievements'];
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 dark">
      <BackgroundSystem />
      <Navbar
        darkMode={darkMode}
        scrollTo={scrollTo}
        activeSection={activeSection}
      />

      <main className="relative z-0">
        <Hero darkMode={darkMode} scrollTo={scrollTo} />
        <SectionDivider />
        <About darkMode={darkMode} />
        <SectionDivider />
        <SkillsArchitecture />
        <SectionDivider />
        <Workflow />
        <SectionDivider />
        <Projects darkMode={darkMode} />
        <SectionDivider />
        <Resume darkMode={darkMode} />
        <SectionDivider />
        <Certifications darkMode={darkMode} />
        <SectionDivider />
        <Achievements darkMode={darkMode} />
        <SectionDivider />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
