import React, { useState } from "react";
import { Github, Code2, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";

// Project Images
import recipeImg from "../assets/recipe.png";
import agriImg from "../assets/agri.png";
import govtImg from "../assets/govt.png";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Recipe Generator",
      subtitle: "Full-stack MERN Application",
      description: "A comprehensive MERN-based platform that optimizes ingredient search through a custom RESTful API and secure JWT authentication. This system significantly reduces search latency while providing a high-performance frontend driven by efficient global state management.",
      image: recipeImg,
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/prince093kumar/summer_training_mern/tree/main/Recipe_Generator"
    },
    {
      title: "Smart Agriculture Platform",
      subtitle: "Farmer-Expert Diagnostic Portal",
      description: "An advanced diagnostic portal built with PHP and MySQL to streamline expert-to-farmer communication. It features real-time analytics dashboards and automated reporting pipelines, reducing manual processing time for multi-role agricultural workflows.",
      image: agriImg,
      tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/prince093kumar/TechnoGrowX"
    },
    {
      title: "Consultant Web Service",
      subtitle: "Digital Documentation System",
      description: "A centralized documentation portal designed for secure large-scale digital submissions. By implementing real-time input validation and optimized database queries, it reduces submission errors and maintains high uptime during peak concurrent sessions.",
      image: govtImg,
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/prince093kumar/ismart_indfes"
    }
  ];

  return (
    <section id="projects" className="section relative bg-transparent py-20 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 text-primary mb-3"
          >
            <div className="h-[1px] w-10 bg-primary" />
            <span className="font-mono font-bold tracking-[0.2em] uppercase text-xs">Development Portfolio</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl"
          >
            A curated selection of engineering projects demonstrating full-stack expertise and scalable architecture.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group h-full"
            >
              <div className="relative h-full flex flex-col tech-card overflow-hidden group border-border/50">
                
                {/* Image Section - Clean Full Color */}
                <div className="relative h-72 overflow-hidden border-b border-border/50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Glass Header Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                    <div className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono font-bold text-white uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                      <Sparkles size={10} className="text-primary" />
                      Verified
                    </div>
                  </div>

                  {/* Scanning Light Sweep Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out_infinite] pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="p-3 flex-grow flex flex-col relative bg-surface/30">
                  <div className="mb-3">
                    <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-primary text-[10px] font-mono font-bold uppercase tracking-[0.1em] opacity-90">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Single Paragraph Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.2)", borderColor: "rgba(56, 189, 248, 0.4)" }}
                        className="px-2.5 py-1 rounded-md bg-surface/50 border border-border text-[10px] font-mono font-bold text-muted-foreground hover:text-primary transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Single GitHub Action */}
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground group/link hover:text-primary transition-all font-bold"
                    >
                      <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                      GitHub
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default Projects;