import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiJavascript, SiMysql, SiPython, SiReact, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiPhp, SiPostgresql, SiMongodb, SiGit, SiGithub, 
  SiPostman, SiBootstrap, SiJsonwebtokens
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaJava, FaCode, FaServer, FaDatabase, FaTools, FaBrain, FaLayerGroup, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import { 
  ResponsiveContainer 
} from 'recharts';

const categories = [
  { 
    id: 'languages', 
    label: 'Languages', 
    icon: FaCode,
    techs: [
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'SQL', icon: SiMysql, color: '#4479a1' }
    ],
    viz: 'radar'
  },
  { 
    id: 'frontend', 
    label: 'Frontend', 
    icon: FaLayerGroup,
    techs: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
      { name: 'React.js', icon: SiReact, color: '#61dafb' }
    ],
    viz: 'tree'
  },
  { 
    id: 'backend', 
    label: 'Backend', 
    icon: FaServer,
    techs: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      { name: 'RESTful APIs', icon: FaNetworkWired, color: '#4f9cf9' },
      { name: 'Middleware', icon: FaShieldAlt, color: '#c084fc' },
      { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#ffffff' }
    ],
    viz: 'flow'
  },
  { 
    id: 'databases', 
    label: 'Databases', 
    icon: FaDatabase,
    techs: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' }
    ],
    viz: 'graph'
  },
  { 
    id: 'tools', 
    label: 'Tools & Platforms', 
    icon: FaTools,
    techs: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'VS Code', icon: VscVscode, color: '#007acc' }
    ],
    viz: 'pipeline'
  },
  { 
    id: 'concepts', 
    label: 'Core Concepts', 
    icon: FaBrain,
    techs: [
      { name: 'DSA', isText: true },
      { name: 'OOP', isText: true },
      { name: 'DBMS', isText: true },
      { name: 'API Design', isText: true },
      { name: 'Debugging', isText: true }
    ],
    viz: 'neuro'
  },
  { 
    id: 'softskills', 
    label: 'Soft Skills', 
    icon: FaShieldAlt,
    techs: [
      { name: 'Problem Solving', isText: true },
      { name: 'Collaboration', isText: true },
      { name: 'Adaptability', isText: true }
    ],
    viz: 'radar'
  }
];

const Typewriter = ({ text, delay = 0, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [text, delay, onComplete]);
  return <span>{displayedText}</span>;
};

const RadarViz = () => {
  const data = [
    { subject: 'Logic', A: 95 },
    { subject: 'Syntax', A: 85 },
    { subject: 'Performance', A: 90 },
    { subject: 'Experience', A: 80 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#ffffff10" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
        <Radar name="Level" dataKey="A" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.3} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const FlowViz = () => (
  <div className="flex flex-col items-center justify-center h-full space-y-4">
    {[1, 2, 3].map(i => (
      <div key={i} className="flex items-center space-x-4">
        <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
        <div className="w-48 h-[1px] bg-gradient-to-r from-primary to-transparent" />
        <div className="px-3 py-1 rounded-md glass border border-white/10 text-[10px] text-slate-400">DATA_NODE_{i}</div>
      </div>
    ))}
  </div>
);

const PipelineViz = () => (
  <div className="flex items-center justify-center h-full space-x-4">
    {['BUILD', 'TEST', 'DEPLOY'].map((step, i) => (
      <React.Fragment key={step}>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 rounded-lg glass border border-primary/30 flex items-center justify-center text-[10px] text-white font-mono">{step}</div>
          {i < 2 && <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-primary">&rarr;</motion.div>}
        </div>
        {i < 2 && <div className="w-8 h-[2px] bg-primary/20" />}
      </React.Fragment>
    ))}
  </div>
);

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [terminalLines, setTerminalLines] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTerminalLines([]);
    const lines = [
      `> loadModule("${activeTab.label}")`,
      `Initializing ${activeTab.label} systems...`,
      ...activeTab.techs.map(t => `✔ ${t.name} Loaded`),
      `Status: ACTIVE`
    ];
    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines(prev => [...prev, lines[i]]);
      i++;
      if (i >= lines.length) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section id="technical-skills" className="section relative py-24 overflow-hidden bg-[#020617]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[150px] rounded-full animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Technical <span className="text-gradient">Diagnostics</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-xl border font-mono text-xs tracking-wider transition-all
                ${activeTab.id === cat.id 
                  ? 'bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                  : 'glass border-white/5 text-slate-500 hover:border-white/20'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Orbital Archive */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* CORE ARCH Hub */}
            <div className="absolute z-20">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-44 h-44 flex items-center justify-center"
              >
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border border-dashed border-primary/30 rounded-full animate-spin-slow-reverse" />
                <div className="w-32 h-32 rounded-full glass border border-primary/50 flex flex-col items-center justify-center text-center p-4 shadow-[0_0_50px_rgba(56,189,248,0.3)] backdrop-blur-3xl">
                  <div className="font-black text-xs text-primary tracking-[0.3em]">CORE</div>
                  <div className="font-black text-xl text-white tracking-[0.2em] -mt-1">ARCH</div>
                </div>
              </motion.div>
            </div>

            {/* Orbiting Icons */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {activeTab.techs.map((tech, idx) => {
                const angle = (idx * (360 / activeTab.techs.length));
                const radius = 180;
                return (
                  <div 
                    key={tech.name} 
                    className="absolute"
                    style={{ transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)` }}
                  >
                    <motion.div
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      whileHover={{ scale: 1.2 }}
                      className="relative p-4 rounded-2xl glass-card border-white/10 flex items-center justify-center cursor-crosshair group"
                    >
                      {tech.isText ? (
                        <span className="text-[10px] font-bold text-white whitespace-nowrap">{tech.name}</span>
                      ) : (
                        <tech.icon size={32} style={{ color: tech.color }} className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                      )}
                      {hoveredTech === tech.name && (
                        <motion.div 
                          layoutId="tooltip"
                          className="absolute -top-12 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-md whitespace-nowrap"
                        >
                          {tech.name}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: System Terminal */}
          <div className="h-[550px]">
            <div className="terminal-window h-full flex flex-col overflow-hidden rounded-3xl">
              <div className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 tracking-widest">SYSTEM_DIAGNOSTICS / V1.0</div>
              </div>

              <div className="p-8 flex-1 font-mono text-sm space-y-4 overflow-y-auto scrollbar-hide">
                <div className="space-y-2">
                  {terminalLines.map((line, i) => (
                    <div key={i} className={`flex items-start ${line.startsWith('>') ? 'text-primary' : line.startsWith('✔') ? 'text-success' : 'text-slate-400'}`}>
                      <span className="mr-2 opacity-50 font-bold">{line.startsWith('>') ? '' : '::'}</span>
                      <span>{line}</span>
                    </div>
                  ))}
                  {loading && <span className="inline-block w-2 h-4 bg-primary animate-pulse align-middle" />}
                </div>

                {!loading && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-8 h-[300px]"
                  >
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Diagnostic Visualization_</div>
                    <div className="h-full w-full glass rounded-2xl border-white/5 p-6 relative group">
                      {activeTab.viz === 'radar' && <RadarViz />}
                      {activeTab.viz === 'flow' && <FlowViz />}
                      {activeTab.viz === 'pipeline' && <PipelineViz />}
                      {/* Fallback for others - simplified versions as proof of concept */}
                      {['tree', 'graph', 'neuro'].includes(activeTab.viz) && (
                        <div className="flex items-center justify-center h-full text-slate-600 italic text-xs">
                          {activeTab.viz.toUpperCase()}_STREAM_STABILIZING...
                        </div>
                      )}
                      
                      {/* Scanline Effect */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1 bg-[length:100%_4px] animate-scan" style={{ backgroundRepeat: 'repeat-y' }} />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
