import React from "react";
import { Briefcase, Terminal, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            role: "MERN Stack Development Trainee",
            company: "CipherSchools",
            duration: "Jun '25 - Jul '25",
            desc: [
              "Constructed full-stack web applications with modular backend architecture.",
              "Practiced CRUD operations and API testing aligned with SDLC.",
              "Validated endpoints using Postman and managed workflows via Git."
            ]
        }
    ];

    return (
    <section id="experience" className="section relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-primary text-xs font-bold uppercase tracking-[0.2em]"
          >
            // professional_trace.log
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground"
          >
            Professional <span className="text-primary">Journey</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="section-divider mx-auto"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-1/2">
             <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: "100%" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="w-full bg-gradient-to-b from-primary via-secondary to-transparent shadow-[0_0_10px_rgba(56,189,248,0.5)]"
             />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Node */}
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="w-full md:w-[45%] pl-8 md:pl-0"
                >
                  <div className="tech-card p-6 group">
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center gap-2 text-secondary font-mono text-[10px] font-bold uppercase tracking-widest">
                        <Terminal size={12} />
                        <span>experience_segment</span>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-mono text-xs">{exp.company}</p>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-border/50">
                        {exp.desc.map((item, idx) => (
                          <div key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-primary font-mono mt-0.5">&gt;</span>
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Empty Side (Desktop) */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default Experience;
