import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiJavascript, SiMysql, SiReact, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiPhp, SiPostgresql, SiMongodb, SiGit, SiGithub, 
  SiPostman, SiBootstrap, SiJsonwebtokens, SiCplusplus 
} from 'react-icons/si';
import { FaJava, FaCode, FaServer, FaDatabase, FaTools, FaBrain, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const architectureLayers = [
  {
    id: 'layer1',
    title: 'Programming Languages',
    color: '#fbbf24', // Yellow
    icon: FaCode,
    skills: [
      { name: 'C++', icon: SiCplusplus, desc: 'High-performance systems and competitive programming.', context: 'Core Logic & Performance' },
      { name: 'JavaScript', icon: SiJavascript, desc: 'Dynamic scripting for front-end and back-end environments.', context: 'Full-stack Development' },
      { name: 'SQL', icon: SiMysql, desc: 'Querying and managing relational database systems.', context: 'Data Management' },
      { name: 'Java', icon: FaJava, desc: 'Robust, object-oriented language for enterprise applications.', context: 'System Architecture' },
    ]
  },
  {
    id: 'layer2',
    title: 'Frontend Layer',
    color: '#3b82f6', // Blue
    icon: SiReact,
    skills: [
      { name: 'HTML5', icon: SiHtml5, desc: 'Standard markup language for creating web pages.', context: 'Web Structure' },
      { name: 'CSS3', icon: SiCss, desc: 'Design language for styling and animating web interfaces.', context: 'Visual Presentation' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, desc: 'Utility-first CSS framework for rapid UI development.', context: 'Modern Styling' },
      { name: 'Bootstrap', icon: SiBootstrap, desc: 'CSS framework for responsive, mobile-first websites.', context: 'Rapid Prototyping' },
      { name: 'React.js', icon: SiReact, desc: 'Library for building component-based user interfaces.', context: 'Client-side Logic' },
    ]
  },
  {
    id: 'layer3',
    title: 'Backend Layer',
    color: '#10b981', // Green
    icon: FaServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, desc: 'JavaScript runtime for building scalable network apps.', context: 'Server-side Logic' },
      { name: 'Express.js', icon: SiExpress, desc: 'Fast, minimalist web framework for Node.js.', context: 'API Development' },
      { name: 'PHP', icon: SiPhp, desc: 'Server-side scripting language for dynamic web pages.', context: 'Backend Logic' },
      { name: 'RESTful APIs', icon: FaNetworkWired, desc: 'Interface for communication between software systems.', context: 'Integrations' },
      { name: 'Middleware', icon: FaShieldAlt, desc: 'Software that acts as a bridge between systems.', context: 'Data Flow Control' },
      { name: 'JWT Auth', icon: SiJsonwebtokens, desc: 'Compact, URL-safe means of representing claims.', context: 'Security' },
    ]
  },
  {
    id: 'layer4',
    title: 'Database Layer',
    color: '#f97316', // Orange
    icon: FaDatabase,
    skills: [
      { name: 'MongoDB', icon: SiMongodb, desc: 'NoSQL document-oriented database for modern apps.', context: 'Scalable Data' },
      { name: 'MySQL', icon: SiMysql, desc: 'Widely used open-source relational database.', context: 'Structured Data' },
      { name: 'PostgreSQL', icon: SiPostgresql, desc: 'Advanced open-source relational database.', context: 'Complex Queries' },
    ]
  },
  {
    id: 'layer5',
    title: 'Tools & Platforms',
    color: '#a855f7', // Purple
    icon: FaTools,
    skills: [
      { name: 'Git', icon: SiGit, desc: 'Distributed version control system for source code.', context: 'Version Control' },
      { name: 'GitHub', icon: SiGithub, desc: 'Platform for hosting and collaborating on code.', context: 'Collaboration' },
      { name: 'Postman', icon: SiPostman, desc: 'API platform for developers to design and test APIs.', context: 'API Testing' },
      { name: 'VS Code', icon: VscVscode, desc: 'High-performance source-code editor.', context: 'Development Environment' },
    ]
  },
  {
    id: 'layer6',
    title: 'Core CS Concepts',
    color: '#22d3ee', // Cyan
    icon: FaBrain,
    skills: [
      { name: 'DSA', icon: FaBrain, desc: 'Fundamental study of organizing and managing data.', context: 'Problem Solving' },
      { name: 'OOP', icon: FaBrain, desc: 'Programming paradigm based on "objects".', context: 'Structural Design' },
      { name: 'DBMS', icon: FaDatabase, desc: 'Software system for managing databases.', context: 'Data Systems' },
      { name: 'API Design', icon: FaNetworkWired, desc: 'Principles for designing high-quality APIs.', context: 'Architecture' },
      { name: 'Debugging', icon: FaShieldAlt, desc: 'Identifying and resolving bugs in software.', context: 'Maintenance' },
    ]
  },
];

const SkillsArchitecture = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="section relative py-20 bg-[#020617] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            System <span className="text-primary">Architecture</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Structured full-stack pipeline representing Prince Kumar's technical ecosystem.
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {architectureLayers.map((layer, index) => (
            <React.Fragment key={layer.id}>
              {/* Connection Line */}
              {index !== 0 && (
                <div className="h-12 w-1 bg-gradient-to-b from-transparent via-slate-700 to-transparent relative">
                  <motion.div 
                    animate={{ y: [0, 48] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-0 left-0 w-full h-4 bg-primary blur-[2px]"
                  />
                </div>
              )}

              <div className="w-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-800 border border-white/5">
                    <layer.icon size={16} style={{ color: layer.color }} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                    {layer.title}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-800 to-transparent ml-4" />
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {layer.skills.map((skill) => (
                    <motion.button
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSkill({ ...skill, category: layer.title, color: layer.color })}
                      className="group relative px-6 py-4 rounded-2xl glass-card flex flex-col items-center gap-3 transition-all min-w-[120px]"
                    >
                      {/* Hover Glow */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl pointer-events-none"
                        style={{ backgroundColor: layer.color, filter: 'blur(20px)' }}
                      />
                      
                      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                        <skill.icon size={24} style={{ color: layer.color }} />
                      </div>
                      <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-wider">
                        {skill.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Details Panel Overlay */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-lg glass-card p-10 rounded-[2.5rem] border-white/10 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner Accent */}
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20 pointer-events-none"
                style={{ backgroundColor: selectedSkill.color }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-6">
                    <div className="p-5 rounded-2xl glass border border-white/5">
                      <selectedSkill.icon size={48} style={{ color: selectedSkill.color }} />
                    </div>
                    <div>
                      <h4 className="text-4xl font-black text-white mb-2">{selectedSkill.name}</h4>
                      <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: selectedSkill.color }}>
                        {selectedSkill.category}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedSkill(null)}
                    className="p-3 rounded-full glass hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                  >
                    &times;
                  </button>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <h5 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedSkill.color }} />
                      Description
                    </h5>
                    <p className="text-slate-400 text-lg leading-relaxed italic">
                      {selectedSkill.desc}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedSkill.color }} />
                      Usage Context
                    </h5>
                    <div className="px-6 py-4 rounded-xl glass border border-white/5 text-slate-300 font-medium">
                      {selectedSkill.context}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsArchitecture;
