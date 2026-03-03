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

const App = () => {
  // Enforce Dark Mode permanently
  const darkMode = true;
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'resume', 'contact'];

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
    <div className="min-h-screen font-sans transition-colors duration-300 dark bg-slate-900 text-slate-100">
      <Navbar
        darkMode={darkMode}
        scrollTo={scrollTo}
        activeSection={activeSection}
      />

      <main>
        <Hero darkMode={darkMode} scrollTo={scrollTo} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Resume darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
