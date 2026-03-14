import React, { useState, useEffect } from "react";
import { Home, User, Code, FileText, Mail, Menu, X, Rocket, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ scrollTo, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' : 'py-8 bg-transparent'}`}>
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-6 transition-all duration-500">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group pl-2"
          onClick={() => scrollTo('home')}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Rocket size={18} fill="currentColor" />
          </div>
          <span className="text-lg font-heading font-bold tracking-tight text-white hidden sm:block">
            Prince<span className="text-gradient">.dev</span>
          </span>
        </motion.div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 bg-surface/50 backdrop-blur-md rounded-full p-1.5 border border-border shadow-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-5 py-2 text-[11px] font-mono font-bold uppercase tracking-widest transition-all relative group rounded-full ${
                activeSection === item.id 
                  ? "text-primary" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              
              {/* Hover Underline Animation */}
              <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-1/2 transition-all duration-300 rounded-full" />
              
              {/* Active Pill Highlight */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-primary/10 shadow-lg shadow-primary/10 rounded-full -z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-3">
          <a 
            href="/resume.pdf"
            download
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all border border-primary/20"
          >
            <Download size={14} />
            Download Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[90] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed inset-x-6 top-28 bg-[#111827]/95 border border-white/10 p-6 rounded-[2.5rem] z-[100] md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollTo(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-mono font-bold uppercase tracking-[0.2em] transition-all ${
                      activeSection === item.id 
                        ? "bg-primary/10 text-primary border border-primary/30 shadow-lg shadow-primary/10" 
                        : "text-slate-400 hover:bg-white/5"
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
                <a 
                  href="/resume.pdf"
                  download
                  className="mt-4 flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-surface border border-border text-primary text-xs font-mono font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/10"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;