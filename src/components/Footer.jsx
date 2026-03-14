import React from 'react';
import { Linkedin, Github, Heart, Rocket, Mail, Terminal, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, url: "https://github.com/prince093kumar", label: "GitHub" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/prince093kumar", label: "LinkedIn" },
    { icon: <Mail size={18} />, url: "mailto:princekumar09372@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-[#020617]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-grid" />
      </div>
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center md:justify-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-lg shadow-primary/5">
                <Rocket size={20} className="fill-primary/20" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-white tracking-tight">
                Prince<span className="text-primary">.dev</span>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-base leading-relaxed max-w-md mx-auto md:mx-0"
            >
              Building the next generation of digital experiences through robust full-stack engineering and visionary system architecture.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center md:justify-start gap-2 text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <Terminal size={12} />
              <span>Status: Available_for_projects</span>
            </motion.div>
          </div>

          {/* Navigation/Social */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-[0.4em] opacity-50">Social_Connect</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface/30 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-slate-400 group-hover:text-primary transition-colors">
                    {social.icon}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-slate-500 group-hover:text-white uppercase tracking-widest">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Contact/CTA */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-6">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-[0.4em] opacity-50">Contact_Origin</h3>
            <motion.a
              href="mailto:princekumar09372@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Mail size={16} />
              <span className="text-xs font-mono font-bold uppercase tracking-widest">Send Message</span>
              <ExternalLink size={12} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            <span>© {currentYear}</span>
            <div className="w-1 h-1 rounded-full bg-slate-800" />
            <span>Prince Kumar</span>
            <div className="w-1 h-1 rounded-full bg-slate-800" />
            <span className="text-slate-600">All rights reserved</span>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest"
          >
            Built with <Heart size={12} className="text-primary fill-primary/20 animate-pulse" /> using <span className="text-white">React + Vite</span>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Glow Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
