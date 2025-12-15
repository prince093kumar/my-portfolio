import React, { useState } from 'react';
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
