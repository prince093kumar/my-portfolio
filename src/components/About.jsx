import React from "react";
import { Code, Database, ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { FaJava, FaJs, FaHtml5, FaCss3, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaPhp, FaDocker, FaLinux, FaLaravel } from "react-icons/fa";
import { SiMysql, SiMongodb, SiPostgresql, SiExpress, SiTailwindcss, SiBootstrap, SiPostman, SiRedux } from "react-icons/si";

const About = ({ darkMode }) => {
  const skills = [
    { name: "Postman", icon: SiPostman, color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/30" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500", bg: "bg-red-500/10 border-red-500/30" },
    { name: "GitHub", icon: FaGithub, color: "text-slate-800 dark:text-slate-200", bg: "bg-slate-300/50 dark:bg-slate-700/50 border-slate-400/30" },
    { name: "Java", icon: FaJava, color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/30" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/30" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", bg: "bg-purple-500/10 border-purple-500/30" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/30" },
    { name: "CSS", icon: FaCss3, color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/30" },
    { name: "HTML", icon: FaHtml5, color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/30" },
    { name: "React", icon: FaReact, color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/30" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500", bg: "bg-green-500/10 border-green-500/30" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-600 dark:text-gray-300", bg: "bg-gray-500/10 border-gray-500/30" },
    { name: "Redux", icon: SiRedux, color: "text-purple-600", bg: "bg-purple-600/10 border-purple-600/30" },
    { name: "PHP", icon: FaPhp, color: "text-indigo-400", bg: "bg-indigo-400/10 border-indigo-400/30" },
    { name: "Laravel", icon: FaLaravel, color: "text-red-600", bg: "bg-red-600/10 border-red-600/30" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/30" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", bg: "bg-green-500/10 border-green-500/30" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/30" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/30" },
    { name: "Linux", icon: FaLinux, color: "text-yellow-500", bg: "bg-yellow-500/10 border-yellow-500/30" }
  ];

  // Circular layout parameters
  const radius = 200;

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
            className="space-y-6"
          >
            <p className={`text-lg leading-relaxed text-[#94A3B8]`}>
              I am a Computer Science student with a strong foundation in <span className="font-semibold text-[#3B82F6]">Java</span>, full-stack web development, and database systems. I specialize in building scalable web applications using the <span className="font-semibold text-[#3B82F6]">MERN stack</span> (<span className="text-[#3B82F6] font-semibold">MongoDB</span>, <span className="text-[#3B82F6] font-semibold">Express.js</span>, <span className="text-[#3B82F6] font-semibold">React.js</span>, <span className="text-[#3B82F6] font-semibold">Node.js</span>) along with <span className="text-[#3B82F6] font-semibold">SQL</span> and <span className="text-[#3B82F6] font-semibold">PHP</span>-based backend systems.
            </p>
            <p className={`text-lg leading-relaxed text-[#94A3B8]`}>
              Through academic and real-world projects, I have developed secure <span className="text-[#3B82F6] font-semibold">RESTful APIs</span>, implemented role-based authentication systems, and designed responsive user interfaces using <span className="text-[#3B82F6] font-semibold">React</span> and <span className="text-[#3B82F6] font-semibold">Tailwind CSS</span>. My experience includes database schema design, backend optimization, and structured application architecture.
            </p>
            <p className={`text-lg leading-relaxed text-[#94A3B8]`}>
              I focus on writing clean, maintainable code and solving practical problems through efficient system design and algorithmic thinking.
            </p>
          </motion.div>

          <div className="pt-4 flex gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B82F6] text-white font-semibold hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all hover:-translate-y-1">
              Let's Collaborate <ArrowRight size={20} />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#3B82F6] text-[#3B82F6] bg-transparent hover:bg-[#3B82F6]/10 font-semibold transition-all hover:-translate-y-1">
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
          <div className="absolute w-[400px] h-[400px] rounded-full border border-slate-700/30 animate-spin-slow" />

          {/* Orbit Ring 2 */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-slate-700/30 animate-spin-reverse-slow" />

          {/* Rotating Tech Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative w-[400px] h-[400px] rounded-full"
          >
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const Icon = skill.icon;

              return (
                <motion.div
                  key={index}
                  className={`absolute top-1/2 left-1/2 -ml-8 -mt-8 w-16 h-16 flex items-center justify-center rounded-full shadow-2xl border backdrop-blur-sm cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:bg-slate-800 hover:scale-[1.4] transition-all duration-300 z-20 group ${skill.bg}`}
                  style={{
                    x: x,
                    y: y,
                  }}
                  // Counter rotate icons
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <Icon className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform`} />
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
