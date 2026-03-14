import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Technology, Computer Science and Engineering",
            school: "Lovely Professional University",
            location: "Phagwara, Punjab",
            info: "CGPA: 8.55",
            year: "Aug 2024 – Present",
        },
        {
            degree: "Diploma, Computer Science and Engineering",
            school: "Lovely Professional University",
            location: "Phagwara, Punjab",
            info: "CGPA: 9.6",
            year: "Jul 2022 – Jun 2024",
        },
        {
            degree: "Intermediate",
            school: "MKD Public School",
            location: "Motihari, Bihar",
            info: "Percentage: 71.04%",
            year: "Jun 2019 – Jul 2021",
        }
    ];

    return (
    <section id="education" className="section relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-sm"
          >
            Academic Foundation
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Education <span className="text-gradient">Timeline</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/5" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-20 group"
              >
                {/* Node */}
                <div className="absolute left-[29px] top-0 w-3 h-3 rounded-full bg-primary border-4 border-background group-hover:scale-150 transition-transform z-10" />
                
                <div className="glass-card p-8 rounded-[2rem] border-white/5 group-hover:border-primary/30 transition-all">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div className="space-y-1">
                         <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                            {edu.degree}
                         </h3>
                         <div className="flex items-center gap-2 text-primary font-semibold">
                            <GraduationCap size={18} />
                            <span>{edu.school}</span>
                         </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2 text-muted-foreground text-sm font-medium">
                         <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{edu.year}</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                         </div>
                      </div>
                   </div>

                   <div className="inline-block px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold">
                      {edu.info}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default Education;
