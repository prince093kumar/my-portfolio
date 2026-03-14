import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiJavascript, SiMysql, SiPython, SiReact, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiPhp, SiPostgresql, SiMongodb, SiGit, SiGithub, 
  SiDocker, SiPostman, SiCplusplus, SiBootstrap, SiLaravel,
  SiAmazonwebservices, SiJsonwebtokens
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaJava, FaCode, FaServer, FaDatabase, FaTools, FaBrain, FaLayerGroup } from 'react-icons/fa';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer 
} from 'recharts';

const domains = [
  { 
    id: 'languages', 
    label: 'Languages', 
    icon: FaCode,
    description: 'System-level and logic-heavy modules.',
    techs: [
      { name: 'Java', icon: FaJava, color: '#f89820', info: 'Enterprise Systems' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', info: 'Full-stack Web' },
      { name: 'SQL', icon: SiMysql, color: '#4479a1', info: 'Relational Logic' },
      { name: 'C++', icon: SiCplusplus, color: '#00599c', info: 'Performance Logic' },
      { name: 'Python', icon: SiPython, color: '#3776ab', info: 'Data & Automation' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4', info: 'Server Scripting' },
    ],
    stats: [
      { subject: 'Frontend', A: 40 }, { subject: 'Backend', A: 90 },
      { subject: 'Databases', A: 85 }, { subject: 'Tools', A: 60 },
      { subject: 'Logic', A: 95 },
    ]
  },
  { 
    id: 'frontend', 
    label: 'Frontend', 
    icon: FaLayerGroup,
    description: 'Immersive UI/UX and client-side logic.',
    techs: [
      { name: 'React.js', icon: SiReact, color: '#61dafb', info: 'SPA Framework' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', info: 'Utility Styling' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26', info: 'Semantic Structure' },
      { name: 'CSS3', icon: SiCss3, color: '#1572b6', info: 'Advanced Animation' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3', info: 'Responsive Grid' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', info: 'DOM Interactivity' },
    ],
    stats: [
      { subject: 'Frontend', A: 95 }, { subject: 'Backend', A: 50 },
      { subject: 'Databases', A: 40 }, { subject: 'Tools', A: 80 },
      { subject: 'Logic', A: 70 },
    ]
  },
  { 
    id: 'backend', 
    label: 'Backend', 
    icon: FaServer,
    description: 'Server architecture and RESTful systems.',
    techs: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', info: 'Runtime Engine' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', info: 'API Framework' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4', info: 'Legacy Core' },
      { name: 'Laravel', icon: SiLaravel, color: '#ff2d20', info: 'MVC Framework' },
      { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#ffffff', info: 'Security Ops' },
      { name: 'REST API', icon: FaServer, color: '#4f9cf9', info: 'Interface Design' },
    ],
    stats: [
      { subject: 'Frontend', A: 45 }, { subject: 'Backend', A: 95 },
      { subject: 'Databases', A: 80 }, { subject: 'Tools', A: 75 },
      { subject: 'Logic', A: 85 },
    ]
  },
  { 
    id: 'databases', 
    label: 'Databases', 
    icon: FaDatabase,
    description: 'Data persistence and query optimization.',
    techs: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1', info: 'Relational DB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248', info: 'NoSQL DB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', info: 'Advanced RDBMS' },
    ],
    stats: [
      { subject: 'Frontend', A: 30 }, { subject: 'Backend', A: 80 },
      { subject: 'Databases', A: 95 }, { subject: 'Tools', A: 60 },
      { subject: 'Logic', A: 90 },
    ]
  },
  { 
    id: 'tools', 
    label: 'Tools & Platforms', 
    icon: FaTools,
    description: 'DevOps, CI/CD, and developer productivity.',
    techs: [
      { name: 'Git', icon: SiGit, color: '#f05032', info: 'Version Control' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff', info: 'Collaboration' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed', info: 'Containerization' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37', info: 'API Testing' },
      { name: 'VS Code', icon: VscVscode, color: '#007acc', info: 'Primary IDE' },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#ff9900', info: 'Cloud Infra' },
    ],
    stats: [
      { subject: 'Frontend', A: 60 }, { subject: 'Backend', A: 70 },
      { subject: 'Databases', A: 50 }, { subject: 'Tools', A: 95 },
      { subject: 'Logic', A: 75 },
    ]
  },
  { 
    id: 'concepts', 
    label: 'Core Concepts', 
    icon: FaBrain,
    description: 'Fundamental engineering principles.',
    techs: [
      { name: 'DSA', isText: true, info: 'Structures & Algos' },
      { name: 'OOP', isText: true, info: 'Object Oriented' },
      { name: 'DBMS', isText: true, info: 'Database Concepts' },
      { name: 'API Design', isText: true, info: 'REST Architecture' },
      { name: 'Debugging', isText: true, info: 'Error Resolution' },
    ],
    stats: [
      { subject: 'Frontend', A: 50 }, { subject: 'Backend', A: 80 },
      { subject: 'Databases', A: 70 }, { subject: 'Tools', A: 60 },
      { subject: 'Logic', A: 100 },
    ]
  }
];

const Typewriter = ({ text, delay = 0, speed = 25, onComplete }) => {
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
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [text, delay, speed, onComplete]);
  return <span>{displayedText}</span>;
};

const SkillTerminal = ({ activeDomain, hoveredTech }) => {
  const [showCommand] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const tech = hoveredTech ? domains.flatMap(d => d?.techs || []).find(t => t.name === hoveredTech) : null;
  const commandText = tech ? `loadSkill("${tech.name}")` : `loadModule("${activeDomain.label}")`;
  
  return (
    <div className="bg-[#0B1220]/80 backdrop-blur-xl rounded-2xl overflow-hidden font-mono text-[13px] relative z-10 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] h-full flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between bg-white/5 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_#27C93F]" />
        </div>
        <div className="text-slate-400 text-[9px] font-bold tracking-[0.3em] uppercase opacity-70">SYSTEM_DIAGNOSTICS / V1.0</div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-20 border-r border-white/5 bg-black/20 flex flex-col items-center py-6 gap-6">
          <FaCode className="text-primary/40 text-lg" />
          <FaServer className="text-slate-600 text-lg" />
          <FaDatabase className="text-slate-600 text-lg" />
          <div className="mt-auto pb-4">
            <div className="w-1 h-12 bg-primary/20 rounded-full relative overflow-hidden">
              <motion.div 
                animate={{ y: [-48, 48] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-8 bg-primary shadow-[0_0_10px_#4F9CF9]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 flex-1 overflow-y-auto scrollbar-hide bg-gradient-to-br from-transparent to-primary/5">
          <div className="flex items-center text-[#4F9CF9]">
            <span className="mr-2 text-[#4F9CF9] font-bold animate-pulse">&gt;</span>
            {showCommand && (
              <Typewriter 
                text={commandText} 
                onComplete={() => setShowContent(true)}
              />
            )}
            {!showContent && showCommand && <span className="w-2 h-4 bg-primary animate-blink ml-1" />}
          </div>

          <AnimatePresence mode="wait">
            {showContent && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="space-y-2">
                  <p className="text-slate-400 text-[11px] uppercase tracking-widest flex justify-between">
                    <span>Target: {tech ? tech.name : activeDomain.label}</span>
                    <span className="text-success font-bold">LOCKED</span>
                  </p>
                  <p className="text-slate-300 leading-relaxed italic">
                    {tech ? `// ${tech.info}: Initializing optimized data streams...` : `// ${activeDomain.description}`}
                  </p>
                </div>

                <div className="h-48 w-full bg-black/40 rounded-xl p-4 border border-white/5 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={activeDomain.stats}>
                      <PolarGrid stroke="#ffffff05" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 9, fontWeight: 700 }} />
                      <Radar
                        name="Skills"
                        dataKey="A"
                        stroke="#4F9CF9"
                        strokeWidth={2}
                        fill="#4F9CF9"
                        fillOpacity={0.2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                  {/* Scanning line animation */}
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-primary/20 z-0 pointer-events-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <p className="text-[9px] text-slate-500 uppercase mb-1">Load Balance</p>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-secondary shadow-[0_0_8px_#22D3EE]" />
                    </div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <p className="text-[9px] text-slate-500 uppercase mb-1">Integrity</p>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '98%' }} className="h-full bg-success shadow-[0_0_8px_#10B981]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const TechOrbit = () => {
  const [activeDomain, setActiveDomain] = useState(domains[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const radius = isMobile ? 130 : 210;

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-[#020617] to-[#0F172A] overflow-hidden min-h-screen">
      {/* HUD Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-[180px] pointer-events-none animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex justify-center items-center gap-4 mb-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary font-mono text-xs font-bold tracking-[0.5em] uppercase">Tech_Explorer_V1.0</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-black text-white tracking-tighter">Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ecosystem</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-slate-400 max-w-xl mx-auto text-sm font-medium leading-relaxed opacity-80">Interactive neural map of my technical proficiencies and specialized architecture domains.</motion.p>
        </div>

        {/* Tab Module System */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setActiveDomain(domain)}
              className={`group relative px-8 py-4 rounded-xl text-xs font-bold transition-all flex items-center gap-3 border backdrop-blur-md overflow-hidden ${
                activeDomain.id === domain.id 
                ? 'bg-primary/10 border-primary text-primary shadow-[0_0_25px_rgba(79,156,249,0.3)]' 
                : 'bg-white/5 border-white/10 text-slate-500 hover:border-white/20'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <domain.icon className={`text-lg transition-transform ${activeDomain.id === domain.id ? 'scale-110' : 'group-hover:scale-110'}`} />
              <span className="tracking-widest uppercase">{domain.label}</span>
              {activeDomain.id === domain.id && (
                <motion.div layoutId="tabGlow" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center relative" ref={containerRef}>
          {/* HUD Orbit System */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-visible">
            {/* Visual Orbit Paths */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="absolute border border-primary/20 rounded-full" style={{ width: radius * 2, height: radius * 2 }} />
              <div className="absolute border border-dashed border-primary/10 rounded-full" style={{ width: (radius + 70) * 2, height: (radius + 70) * 2 }} />
              {/* HUD Markers */}
              {[0, 90, 180, 270].map(deg => (
                <div key={deg} className="absolute w-full h-full flex items-center justify-center" style={{ transform: `rotate(${deg}deg)` }}>
                  <div className="h-4 w-[1px] bg-primary/40" style={{ transform: `translateY(${-radius}px)` }} />
                </div>
              ))}
            </div>

            {/* Quantum Core Hub */}
            <div className="absolute z-20">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                className="relative w-40 h-40 md:w-52 md:h-52 flex items-center justify-center"
              >
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
                  className="absolute inset-0 border-2 border-dotted border-primary/40 rounded-full" 
                />
                <motion.div 
                  animate={{ rotate: -360 }} 
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                  className="absolute inset-4 border border-secondary/20 rounded-full" 
                />
                <div className="absolute inset-8 rounded-full bg-slate-900/90 border border-primary/40 flex flex-col items-center justify-center text-center p-6 shadow-[0_0_80px_rgba(79,156,249,0.4)] backdrop-blur-3xl">
                  <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                  <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.4em] leading-tight relative z-10">CORE<br/><span className="text-white opacity-90">ARCH</span></span>
                </div>
              </motion.div>
            </div>

            {/* Neural Orbit Icons */}
            <AnimatePresence mode="wait">
              <motion.div key={activeDomain.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ rotate: isPaused ? 0 : 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="relative flex items-center justify-center" style={{ width: radius * 2, height: radius * 2 }}>
                  {activeDomain.techs.map((tech, idx) => {
                    const angle = (idx * (360 / activeDomain.techs.length));
                    const isHovered = hoveredTech === tech.name;
                    return (
                      <div key={tech.name} className="absolute" style={{ transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)` }}>
                        <motion.div
                          onMouseEnter={() => { setIsPaused(true); setHoveredTech(tech.name); }}
                          onMouseLeave={() => { setIsPaused(false); setHoveredTech(null); }}
                          whileHover={{ scale: 1.3 }}
                          className="relative group"
                        >
                          {/* HUD Connector Circle */}
                          {isHovered && (
                            <motion.div 
                              layoutId="hoverCircle"
                              className="absolute -inset-4 border border-primary/50 rounded-2xl animate-spin-slow"
                            />
                          )}
                          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl backdrop-blur-xl flex items-center justify-center border transition-all duration-300 shadow-2xl ${isHovered ? 'border-primary bg-primary/20 shadow-[0_0_30px_rgba(79,156,249,0.4)]' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
                            {tech.isText ? (
                              <span className="text-[10px] font-bold text-primary text-center p-1 uppercase">{tech.name}</span>
                            ) : (
                              <tech.icon size={isMobile ? 28 : 36} style={{ color: isHovered ? tech.color : '#94a3b8' }} className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                            )}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Dashboard */}
          <div className="h-[600px] flex flex-col gap-8">
            <SkillTerminal key={`${activeDomain.id}-${hoveredTech || 'none'}`} activeDomain={activeDomain} hoveredTech={hoveredTech} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {domains.map(d => (
                <button 
                  key={d.id} 
                  onClick={() => setActiveDomain(d)} 
                  className={`text-[9px] px-4 py-3 rounded-lg border font-mono tracking-widest transition-all ${activeDomain.id === d.id ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(79,156,249,0.2)]' : 'bg-white/5 border-white/10 text-slate-500 hover:text-slate-300'}`}
                >
                  &gt; ACTIVATE_{d.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechOrbit;
