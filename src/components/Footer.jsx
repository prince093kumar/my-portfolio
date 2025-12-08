import React from 'react';
const Footer = ({ darkMode }) => (
  <footer className={`py-8 text-center border-t transition-colors duration-300 ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-500'}`}>
    <p>© 2025 Alex Developer. Built with DevOps principles.</p>
  </footer>
);
export default Footer;