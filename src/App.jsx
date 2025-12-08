import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const toggleTheme = () => setDarkMode(!darkMode);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'dark bg-slate-900' : 'bg-slate-50'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} scrollTo={scrollTo} activeSection={activeSection} />
      <Hero darkMode={darkMode} scrollTo={scrollTo} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Resume darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};
export default App;
