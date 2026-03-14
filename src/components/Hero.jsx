import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Mail, Terminal, ChevronDown, Code2 } from "lucide-react";
import { FaReact, FaNodeJs, FaJsSquare, FaDatabase, FaPython } from "react-icons/fa";
import { SiPhp, SiDocker, SiTailwindcss, SiTypescript } from "react-icons/si";
import { fadeInUp, staggerContainer } from "../utils/animations";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

const FloatingIcon = ({ icon: Icon, color, mouseX, mouseY, delay, className, depth = 1 }) => {
  const xOffset = useSpring(useTransform(mouseX, [-1000, 1000], [-30 * depth, 30 * depth]), { stiffness: 50, damping: 20 });
  const yOffset = useSpring(useTransform(mouseY, [-1000, 1000], [-30 * depth, 30 * depth]), { stiffness: 50, damping: 20 });
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ x: xOffset, y: yOffset }}
      className={`absolute flex items-center justify-center bg-surface/50 backdrop-blur-md border border-border shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-10 hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300 ${className}`}
    >
      <Icon className={`text-3xl md:text-4xl ${color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
    </motion.div>
  );
};

const TechCard = ({ children, className, delay = 0 }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`tech-card relative overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="relative z-10 h-full w-full" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const MESSAGES = [
  "Building scalable web applications...",
  "MERN Stack Developer.",
  "API & Backend Enthusiast."
];

const Hero = ({ scrollTo }) => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }, [mouseX, mouseY]);

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentMessage = MESSAGES[typingIndex];
      
      if (!isDeleting) {
        setText(currentMessage.substring(0, text.length + 1));
        if (text.length === currentMessage.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentMessage.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % MESSAGES.length);
        }
      }
    }, isDeleting ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, typingIndex]);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background"
    >
      
      {/* Dynamic Particles Background (Falling Stars) */}
      <div className="absolute inset-0 z-0">
        {init && (
          <Particles
            id="tsparticles"
            options={{
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#e2e8f0" },
              links: { enable: false },
              move: {
                direction: "bottom-right",
                enable: true,
                outModes: { default: "out" },
                random: true,
                speed: 1.5,
                straight: true,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 60,
              },
              opacity: { 
                value: { min: 0.1, max: 0.8 },
                animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
              },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
        )}
      </div>

      {/* Subtle Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* Identity & Actions Block (Left - 8 cols) */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="md:col-span-8 md:row-span-2 p-8 md:p-12 flex flex-col justify-between tech-card"
          >
            <div className="space-y-8">
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success text-xs font-mono uppercase tracking-widest"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_8px_#22c55e] animate-pulse" />
                System Ready for New Challenges
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-3">
                <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight text-foreground leading-[1.1]">
                  PRINCE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-sweep">KUMAR</span>
                </h1>
                <p className="text-lg md:text-xl font-mono text-muted-foreground tracking-tight">
                  Software Engineer & Full Stack Architect
                </p>
              </motion.div>

              <motion.p variants={fadeInUp} className="max-w-xl text-base text-muted-foreground leading-relaxed">
                Designing and shipping high-performance digital experiences. Specialist in MERN ecosystem, distributed systems, and modern API architectures.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-12">
              <button 
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono font-bold uppercase tracking-wider text-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all flex items-center gap-2 group/btn"
              >
                <span>Compile Projects</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-lg bg-surface border border-border text-foreground font-mono font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-all flex items-center gap-2 group/btn"
              >
                Initialize Connect 
                <Mail size={16} className="group-hover/btn:scale-110 transition-transform text-secondary" />
              </button>
            </motion.div>
          </motion.div>

          {/* Interactive Right Column Stack (5 cols) */}
          <div className="md:col-span-4 relative flex items-center justify-center min-h-[400px]">
            
            {/* Main Floating Terminal */}
            <TechCard className="p-6 md:p-8 flex flex-col bg-black/80 w-full max-w-sm border-primary/20 shadow-[0_0_40px_rgba(56,189,248,0.1)] z-20" delay={0.2}>
              <div className="space-y-4 font-mono w-full">
                <div className="flex gap-2 mb-6 border-b border-border pb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <div className="flex gap-3 text-sm flex-col">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Terminal size={16} /> <span>~/system/status</span>
                  </div>
                  <div className="text-secondary opacity-80 pl-6">
                    [OK] Modules Loaded<br/>
                    [OK] Database Connected<br/>
                    [OK] APIs Active
                  </div>
                  <div className="flex gap-2 text-sm mt-4">
                    <span className="text-success font-bold">➜</span>
                    <span className="text-secondary opacity-70">~/portfolio$</span>
                  </div>
                  <span className="text-foreground min-h-[3em] font-medium leading-relaxed">{text}<span className="terminal-cursor text-primary animate-pulse ml-1">_</span></span>
                </div>
              </div>
            </TechCard>

            {/* Parallax Floating Tech Icons */}
            <FloatingIcon 
              icon={FaReact} 
              color="text-[#61DAFB]" 
              mouseX={mouseX} 
              mouseY={mouseY}
              delay={0.4}
              depth={1.5}
              className="w-16 h-16 rounded-2xl -top-4 -left-8 md:-left-12 rotate-[-12deg]"
            />
            <FloatingIcon 
              icon={FaNodeJs} 
              color="text-[#339933]" 
              mouseX={mouseX} 
              mouseY={mouseY}
              delay={0.5}
              depth={0.8}
              className="w-14 h-14 rounded-full bottom-8 -right-4 md:-right-8 rotate-[15deg]"
            />
            <FloatingIcon 
              icon={SiTypescript} 
              color="text-[#3178C6]" 
              mouseX={mouseX} 
              mouseY={mouseY}
              delay={0.6}
              depth={2}
              className="w-12 h-12 rounded-xl -bottom-10 left-10 md:left-4 rotate-[-8deg]"
            />
            <FloatingIcon 
              icon={FaDatabase} 
              color="text-secondary" 
              mouseX={mouseX} 
              mouseY={mouseY}
              delay={0.7}
              depth={1.2}
              className="w-12 h-12 rounded-2xl top-10 right-0 md:-right-4 rotate-[25deg]"
            />
          </div>

          {/* Simple Scroll Hint */}
          <div className="md:col-span-12 flex justify-center py-8">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               onClick={() => scrollTo('about')}
               className="flex flex-col items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity"
             >
               <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">system.scroll()</span>
               <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-primary mt-1">
                 <ChevronDown size={18} />
               </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
