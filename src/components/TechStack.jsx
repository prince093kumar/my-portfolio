import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiMysql, SiPython, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiGit, 
  SiDocker 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer 
} from 'recharts';

const technologies = [
  { 
    name: "React", 
    icon: SiReact, 
    color: "#61dafb", 
    category: "Frontend",
    level: 90,
    desc: "A JavaScript library for building user interfaces with a component-based architecture.",
    features: ["Hooks", "Context API", "Virtual DOM", "Server Components"]
  },
  { 
    name: "Node.js", 
    icon: SiNodedotjs, 
    color: "#339933", 
    category: "Backend",
    level: 85,
    desc: "A JavaScript runtime built on Chrome's V8 engine for building scalable network applications.",
    features: ["Event-driven", "Non-blocking I/O", "NPM Ecosystem", "Microservices"]
  },
  { 
    name: "MongoDB", 
    icon: SiMongodb, 
    color: "#47a248", 
    category: "Database",
    level: 80,
    desc: "A NoSQL database that uses JSON-like documents with optional schemas.",
    features: ["Aggregation", "Scalability", "Flexible Schema", "Atlas"]
  },
  { 
    name: "Tailwind", 
    icon: SiTailwindcss, 
    color: "#06b6d4", 
    category: "Styling",
    level: 95,
    desc: "A utility-first CSS framework for rapid UI development without leaving your HTML.",
    features: ["Responsive Design", "Custom Themes", "JIT Compiler", "Directives"]
  },
  { 
    name: "Express", 
    icon: SiExpress, 
    color: "#ffffff", 
    category: "Backend",
    level: 85,
    desc: "Fast, unopinionated, minimalist web framework for Node.js.",
    features: ["Middleware", "Routing", "HTTP Helpers", "Easy Integration"]
  },
  { 
    name: "Python", 
    icon: SiPython, 
    color: "#3776ab", 
    category: "Language",
    level: 80,
    desc: "High-level programming language known for its readability and versatile applications.",
    features: ["Data Science", "Automation", "Django/Flask", "AI/ML"]
  },
  { 
    name: "Java", 
    icon: FaJava, 
    color: "#f89820", 
    category: "Language",
    level: 75,
    desc: "A high-level, class-based, object-oriented programming language designed for portability.",
    features: ["Strong Typing", "Multithreading", "Spring Boot", "Enterprise Apps"]
  },
  { 
    name: "SQL", 
    icon: SiMysql, 
    color: "#4479a1", 
    category: "Database",
    level: 85,
    desc: "Standard language for managing and manipulating relational databases.",
    features: ["RDBMS", "Joins", "Indexing", "Query Optimization"]
  },
  { 
    name: "Docker", 
    icon: SiDocker, 
    color: "#2496ed", 
    category: "DevOps",
    level: 70,
    desc: "A platform for developing, shipping, and running applications in containers.",
    features: ["Containerization", "Images", "Registry", "Orchestration"]
  },
  { 
    name: "Git", 
    icon: SiGit, 
    color: "#f05032", 
    category: "Tools",
    level: 90,
    desc: "A distributed version control system for tracking changes in source code.",
    features: ["Branching", "Merging", "Collaborative Work", "Hooks"]
  },
];

const TechStack = () => {
  const [activeTech, setActiveTech] = useState(technologies[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="technologies" className="section relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Tech Stack</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Mastering the <span className="text-gradient">Modern Web</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl leading-relaxed max-w-2xl"
          >
            I leverage a suite of industry-leading technologies to build fast, secure, and highly scalable digital experiences.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Tech Selection */}
          <div className="lg:col-span-5 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-4">
            {technologies.map((tech, idx) => (
              <motion.button
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveTech(tech)}
                onMouseEnter={() => !isMobile && setActiveTech(tech)}
                className={`
                  relative aspect-square flex items-center justify-center rounded-2xl border transition-all duration-300
                  ${activeTech.name === tech.name 
                    ? 'bg-primary/10 border-primary shadow-[0_0_30px_rgba(56,189,248,0.2)]' 
                    : 'glass border-white/5 hover:border-primary/20 hover:bg-white/5'
                  }
                `}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors rounded-2xl" />
                <tech.icon 
                  size={isMobile ? 24 : 32} 
                  style={{ color: activeTech.name === tech.name ? tech.color : '#94a3b8' }} 
                  className={`transition-all duration-500 ${activeTech.name === tech.name ? 'scale-110' : 'grayscale group-hover:grayscale-0'}`}
                />
                
                {activeTech.name === tech.name && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 border-2 border-primary rounded-2xl pointer-events-none"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side: Dynamic Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-card p-10 rounded-3xl border border-white/10 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                {/* Background Decor */}
                <div 
                  className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] rounded-full opacity-20 pointer-events-none transition-colors duration-500"
                  style={{ backgroundColor: activeTech.color }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-4 rounded-xl glass border border-white/5 relative group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <activeTech.icon size={42} style={{ color: activeTech.color }} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold text-white mb-1">{activeTech.name}</h3>
                          <span className="text-primary font-mono text-sm uppercase tracking-wider">{activeTech.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <div className="text-4xl font-bold text-white/20 font-mono">{activeTech.level}%</div>
                      <div className="text-slate-500 text-xs uppercase tracking-tighter">Proficiency</div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl">
                    {activeTech.desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Key Competencies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeTech.features.map(feature => (
                          <span 
                            key={feature}
                            className="px-4 py-2 rounded-full glass border border-white/5 text-slate-300 text-sm hover:border-primary/30 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        Proficiency
                      </h4>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${activeTech.level}%` }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="h-full relative"
                            style={{ 
                              background: `linear-gradient(90deg, ${activeTech.color}44, ${activeTech.color})` 
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                        <div className="flex justify-between text-xs font-mono text-slate-500 uppercase tracking-widest pt-1">
                          <span>Foundation</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
