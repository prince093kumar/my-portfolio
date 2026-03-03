import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import CodeCard from './CodeCard';
import profilePic from '../assets/profile_img.png';

const Hero = ({ darkMode, scrollTo }) => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "DevOps Enthusiast",
    "PHP Developer",
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
      className={`relative pt-32 pb-20 px-4 md:px-8 overflow-hidden flex items-center min-h-screen transition-colors duration-300 ${darkMode
        ? "bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        : "bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"
        }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Gradients */}
        <div className={`absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-30 animate-pulse ${darkMode ? "bg-blue-600" : "bg-blue-300"}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-30 animate-pulse delay-1000 ${darkMode ? "bg-purple-600" : "bg-purple-300"}`} />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 w-full">

        {/* Text Content - Responsive Left Aligned */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8 order-2 lg:order-1 mt-8 lg:mt-0"
        >
          <div className="space-y-4">
            <h2 className={`text-xl md:text-2xl font-medium tracking-wide text-[#3B82F6]`}>
              Welcome to my portfolio
            </h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-8">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-50"></div>
                <img
                  src={profilePic}
                  alt="Prince Kumar"
                  className={`relative w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 shadow-xl ${darkMode ? 'border-slate-800' : 'border-white'}`}
                />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Hi, I'm{" "}
                <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 animate-gradient-x">
                  Prince Kumar
                </span>
              </h1>
            </div>
          </div>

          <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
            <span className={`text-2xl md:text-4xl font-bold ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              {text}
              <span className="animate-pulse text-purple-500">|</span>
            </span>
          </div>

          <p className={`text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed text-[#94A3B8]`}>
            I engineer scalable, high-performance web applications with precision, turning complex problems into elegant code.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={() => scrollTo && scrollTo("projects")}
              className="w-full sm:w-auto group relative px-8 py-4 rounded-full font-bold text-base text-white bg-[#3B82F6] overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollTo && scrollTo("contact")}
              className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base border transition-all hover:-translate-y-1 hover:shadow-lg bg-transparent border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10`}
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Column: Code Card Profile */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[500px] mx-auto order-1 lg:order-2 perspective-1000 z-20 group"
        >
          {/* Decorative Elements around card */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-700" />

          {/* Aesthetic Glow Behind CodeCard */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

          {/* Tilting container effect */}
          <div className="relative z-10 transform transition-transform duration-500 md:group-hover:-translate-y-2 md:group-hover:rotate-1">
            <CodeCard />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
