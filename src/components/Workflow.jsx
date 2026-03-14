import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileSearch, 
  Layout, 
  Code2, 
  Bug, 
  Rocket, 
  ChevronRight,
  Database,
  Monitor
} from "lucide-react";

const WorkflowStep = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="relative group flex flex-col items-center text-center px-4"
  >
    {/* Card */}
    <div className="w-full max-w-[240px] p-6 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/5 group-hover:border-blue-500/30 transition-all duration-500 shadow-2xl relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-5 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg group-hover:shadow-blue-500/20 group-hover:scale-110 mx-auto">
        <Icon size={28} />
      </div>
      <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-3">{title}</h4>
      <p className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-2">{description}</p>
      
      {/* Index Number */}
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0B1220] border border-white/10 flex items-center justify-center text-[10px] font-black text-blue-500 shadow-xl group-hover:border-blue-500/30 transition-all">
        0{index + 1}
      </div>
    </div>

    {/* Connecting Arrow (Hidden on last item and small screens) */}
    {index < 4 && (
      <div className="hidden xl:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-blue-500/30 animate-pulse">
        <ChevronRight size={24} />
      </div>
    )}
  </motion.div>
);

const Workflow = () => {
  const steps = [
    {
      title: "Planning",
      icon: FileSearch,
      description: "Researching requirements and designing the overall system structure."
    },
    {
      title: "System Design",
      icon: Layout,
      description: "Designing the architecture, including APIs and database schemas."
    },
    {
      title: "Development",
      icon: Code2,
      description: "Implementing features with modular and maintainable code practices."
    },
    {
      title: "Testing",
      icon: Bug,
      description: "Validating API endpoints and ensuring application stability."
    },
    {
      title: "Deployment",
      icon: Rocket,
      description: "Optimizing performance and deploying to production environments."
    }
  ];

  return (
    <section id="workflow" className="section relative overflow-hidden bg-[#0B1220] py-24 border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.2)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-black tracking-[0.4em] uppercase text-[10px]"
          >
            ENGINEERING MINDSET
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white"
          >
            How I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Software</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm md:text-base font-medium"
          >
            A structured approach to building scalable and efficient applications.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>

        {/* Workflow Pipeline */}
        <div className="relative">
          {/* Animated Pipeline Line */}
          <div className="hidden xl:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-4">
            {steps.map((step, index) => (
              <WorkflowStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Particle = ({ index }) => {
  const [randomX] = useState(() => Math.random() * 40 - 20);
  const [randomDuration] = useState(() => Math.random() * 5 + 5);
  const [randomLeft] = useState(() => `${Math.random() * 100}%`);
  const [randomTop] = useState(() => `${Math.random() * 100}%`);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.3, 0],
        scale: [0, 1, 0],
        y: [0, -100],
        x: randomX
      }}
      transition={{ 
        duration: randomDuration,
        repeat: Infinity,
        delay: index * 1,
        ease: "linear"
      }}
      className="absolute w-1 h-1 bg-blue-400 rounded-full"
      style={{ left: randomLeft, top: randomTop }}
    />
  );
};

export default Workflow;