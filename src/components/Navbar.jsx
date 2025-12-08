import React from 'react';
import {  Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleTheme, scrollTo, activeSection }) => (
  <nav className={`sticky top-0 z-50 border-b transition-colors duration-300 ${darkMode ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-800'}`}>
    <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
      <div className="font-mono font-bold text-xl flex items-center gap-2">
        <span>My Portfolio</span>
      </div>
      <div className="flex items-center gap-6">
        {['About', 'Projects', 'Resume', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => scrollTo(item.toLowerCase())}
            className={`text-sm font-medium transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
          >
            {item}
          </button>
        ))}
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  </nav>
);
export default Navbar;
