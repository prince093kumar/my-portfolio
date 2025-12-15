import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import profileImg from '../assets/profile_img.jpg';

const Hero = ({ darkMode, scrollTo }) => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "DevOps Enthusiast",
    "Php Developer",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roles, roleIndex]);

  return (
    <section
      id="home"
      className={`relative py-32 px-4 text-center overflow-hidden flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${darkMode
        ? "bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        : "bg-slate-50"
        }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Gradients */}
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 animate-pulse ${darkMode ? "bg-blue-600" : "bg-blue-400"
          }`} />
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 animate-pulse delay-1000 ${darkMode ? "bg-purple-600" : "bg-purple-400"
          }`} />
      </div>

      <div className="relative max-w-4xl mx-auto space-y-8 z-10 perspective-1000">

        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative inline-block mb-8 group"
        >
          {/* Standard Glow Ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 blur opacity-30 group-hover:opacity-100 transition duration-500 animate-spin-slow" />
          <img
            src={profileImg}
            alt="Prince Kumar"
            className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 shadow-2xl transition-transform duration-500 group-hover:scale-105 ${darkMode ? "border-slate-800" : "border-white"
              }`}
          />
        </motion.div>

        {/* Text Content - Aligned with Resume Theme */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 animate-gradient-x">
              Prince Kumar
            </span>
          </h1>

          <div className="h-10 md:h-12 flex items-center justify-center overflow-hidden">
            <span className={`text-xl md:text-4xl font-bold ${darkMode ? "text-purple-400" : "text-purple-600"}`}>
              {text}
              <span className="animate-pulse text-purple-500">|</span>
            </span>
          </div>

          <p className={`mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"
            }`}>
            Building scalable, high-performance web applications with precision.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6 pt-6"
        >
          <button
            onClick={() => scrollTo && scrollTo("projects")}
            className="group relative px-8 py-3 rounded-full font-bold text-base text-white bg-blue-600 overflow-hidden shadow-lg hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => scrollTo && scrollTo("contact")}
            className={`px-8 py-3 rounded-full font-bold text-base border-2 transition-all hover:-translate-y-1 hover:shadow-lg ${darkMode
              ? "border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white"
              : "border-slate-200 bg-white/50 hover:bg-white text-slate-800"
              }`}
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
