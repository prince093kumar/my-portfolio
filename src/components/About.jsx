import React from "react";
import { Code, Database, ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { FaJava, FaJs, FaPhp, FaHtml5, FaCss3, FaNodeJs, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaAws, FaDocker } from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress, SiTailwindcss, SiPostman } from "react-icons/si";

const About = ({ darkMode }) => {
  const skills = [
    { name: "Java", icon: FaJava, color: "text-orange-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-500 dark:text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: FaCss3, color: "text-blue-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  ];

  // Circular layout parameters
  const radius = 160;

  return (
    <section
      id="about"
      className={`py-20 px-4 transition-colors duration-300 overflow-hidden ${darkMode
          ? "bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
          : "bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"
        }`}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div className="space-y-8 lg:order-1 order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
            <Terminal size={14} />
            <span>Developer Profile</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Architecting <span className="text-blue-500">Scalable</span> <br /> Digital Solutions.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className={`text-lg leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              I am a results-driven <span className="font-semibold text-slate-100">Full Stack Developer</span> with a passion for building robust, high-performance web applications. My expertise spans the entire development lifecycle, from designing intuitive front-end interfaces to architecting secure back-end systems.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              With a deep understanding of the <span className="font-semibold text-blue-400">MERN Stack</span> and modern DevOps practices, I create solutions that are not only functional but also scalable and maintainable.
            </p>
          </motion.div>

          <div className="pt-4 flex gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20">
              Let's Collaborate <ArrowRight size={20} />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-blue-500 text-slate-400 hover:text-blue-400 font-semibold transition-all hover:-translate-y-1">
              View Projects
            </a>
          </div>
        </div>

        {/* Circular Orbit Tech Stack */}
        <div className="relative h-[450px] flex items-center justify-center lg:order-2 order-1 perspective-1000">

          {/* Central Core */}
          <div className="absolute z-10 p-8 rounded-full bg-slate-800 border-4 border-slate-700 shadow-[0_0_60px_rgba(59,130,246,0.3)] animate-pulse">
            <Code size={48} className="text-blue-400" />
          </div>

          {/* Orbit Ring 1 */}
          <div className="absolute w-[320px] h-[320px] rounded-full border border-slate-700/30 animate-spin-slow" />

          {/* Orbit Ring 2 */}
          <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-slate-700/30 animate-spin-reverse-slow" />

          {/* Rotating Tech Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative w-[320px] h-[320px] rounded-full"
          >
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const Icon = skill.icon;

              return (
                <motion.div
                  key={index}
                  className={`absolute top-1/2 left-1/2 -ml-7 -mt-7 w-14 h-14 flex items-center justify-center rounded-full shadow-2xl border border-slate-700 bg-slate-800 hover:scale-125 transition-transform duration-300 z-20`}
                  style={{
                    x: x,
                    y: y,
                  }}
                  // Counter rotate icons
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <Icon className={`text-2xl ${skill.color}`} />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Background Glow */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
export default About;
