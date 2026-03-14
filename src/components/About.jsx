import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Code2, 
  Rocket, 
  Terminal, 
  Layers, 
  Cpu, 
  Globe, 
  Database,
  GitBranch,
  Cloud
} from "lucide-react";
import { 
  FaReact, 
  FaNodeJs, 
  FaJsSquare, 
  FaGitAlt, 
  FaDocker,
  FaDatabase
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiExpress,
  SiPhp,
  SiLaravel,
  SiDocker,
  SiLinux,
  SiHtml5,
  SiCss,
  SiJavascript
} from "react-icons/si";
import { fadeInUp, staggerContainer, hoverCard } from "../utils/animations";
import profileImg from "../assets/profile_img.png";

// FloatingIcon removed in favor of clean design

const HighlightCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    variants={fadeInUp}
    whileHover="hover"
    initial="rest"
    animate="rest"
    className="tech-card p-5 group relative cursor-default"
  >
    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
      <Icon size={20} />
    </div>
    <h4 className="text-foreground font-heading font-semibold text-base mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const TechBadge = ({ icon: Icon, name, color }) => (
  <motion.div
    variants={hoverCard}
    whileHover="hover"
    initial="rest"
    animate="rest"
    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-border text-xs font-medium text-foreground cursor-default"
  >
    <Icon className={`${color} group-hover:animate-spin-slow`} size={14} />
    <span>{name}</span>
  </motion.div>
);

const TypewriterText = ({ text, delay = 0 }) => (
  <span className="inline-block">
    {text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.01, delay: delay + index * 0.05 }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const About = () => {
  return (
    <section id="about" className="section relative overflow-hidden bg-transparent py-24">

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <motion.div
            variants={fadeInUp}
            className="text-primary font-mono font-bold tracking-widest uppercase text-xs"
          >
            ABOUT ME
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground"
          >
            Full Stack <span className="text-primary">Developer</span> Profile
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-base md:text-lg"
          >
            Building scalable web applications and continuously learning modern technologies.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Column - Profile Visuals */}
          <div className="lg:col-span-5 relative">
            <motion.div
              variants={fadeInUp}
              className="relative mx-auto max-w-[320px] md:max-w-none"
            >
              {/* Profile Image with Minimal Tech Border */}
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl p-1 bg-gradient-to-b from-border to-transparent">
                <div className="w-full h-full rounded-xl overflow-hidden bg-surface relative">
                  <img 
                    src={profileImg} 
                    alt="Prince Kumar" 
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                  />
                  {/* Subtle Tech Overlay Overlay */}
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-overlay" />
                </div>
              </div>
            </motion.div>

            {/* Terminal Card */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 mx-auto max-w-[380px] tech-card p-6 font-mono text-sm group"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
              </div>
              <div className="space-y-2 text-foreground">
                <p className="flex items-center gap-2">
                  <span className="text-primary">~ $</span>
                  <span className="font-semibold text-secondary">
                    <TypewriterText text="whoami" delay={0.2} />
                  </span>
                </p>
                <div className="pl-4 space-y-1 mt-2 text-muted-foreground">
                  <p><span className="text-secondary opacity-80">Name:</span> <TypewriterText text="Prince Kumar" delay={0.8} /></p>
                  <p><span className="text-secondary opacity-80">Role:</span> <TypewriterText text="Full Stack Developer" delay={1.6} /></p>
                  <p><span className="text-secondary opacity-80">Location:</span> <TypewriterText text="India" delay={2.8} /></p>
                  <p><span className="text-secondary opacity-80">Focus:</span> <TypewriterText text="MERN Stack, API Architecture" delay={3.4} /></p>
                </div>
                <p className="flex items-center gap-1 mt-4">
                  <span className="text-primary">~ $</span>
                  <span className="terminal-cursor" />
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Structured Content Sections */}
            <div className="grid gap-10">
              <motion.div
                variants={fadeInUp}
                className="space-y-3"
              >
                <div className="flex items-center gap-3 text-secondary">
                  <Terminal size={20} />
                  <h3 className="text-xl font-heading font-semibold text-foreground">Background Process</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  I am a passionate Full Stack Web Developer and Computer Science student who enjoys building scalable and efficient web applications. I love working with modern web technologies and constantly improving my development skills by creating real-world projects.
                  <br /><br />
                  My primary focus is on the MERN Stack (MongoDB, Express.js, React.js, Node.js) along with backend technologies like PHP and Laravel, and development tools such as Docker and Linux. I enjoy solving complex problems and designing systems that are reliable, scalable, and user-friendly.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="space-y-3"
              >
                <div className="flex items-center gap-3 text-secondary">
                  <Layers size={20} />
                  <h3 className="text-xl font-heading font-semibold text-foreground">Execution Protocols</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    I focus on building real-world projects that solve practical problems and improve user experience. Through these projects, I have gained hands-on experience in backend development, API design, database management, and full-stack application architecture.
                  </p>
                  <div className="space-y-3 pt-2">
                    <p className="text-foreground font-medium">Recent Implementations:</p>
                    <ul className="space-y-3 list-none">
                      <li className="flex gap-3">
                        <span className="text-primary font-mono mt-1">&gt;</span>
                        <p className="text-muted-foreground"><span className="text-foreground font-medium">Recipe Generator Web App</span> – A web application that fetches and displays recipes using external APIs with dynamic search functionality.</p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-mono mt-1">&gt;</span>
                        <p className="text-muted-foreground"><span className="text-foreground font-medium">Smart Agriculture Disease Diagnostic Platform</span> – A system that allows farmers to report crop diseases and receive expert solutions through a web portal.</p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-mono mt-1">&gt;</span>
                        <p className="text-muted-foreground"><span className="text-foreground font-medium">Consultant Documentation Portal</span> – A platform designed to manage reports, documentation, and expert consultations efficiently.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="space-y-3"
              >
                <div className="flex items-center gap-3 text-secondary">
                  <Rocket size={20} />
                  <h3 className="text-xl font-heading font-semibold text-foreground">Mission Objective</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  My goal is to grow as a professional full-stack developer by building scalable digital products and continuously improving my skills in system design, backend engineering, and modern web technologies. I am always eager to learn new tools and collaborate on meaningful projects that create real-world impact.
                </p>
              </motion.div>
            </div>

            {/* Categorized Tech Stack */}
            <div className="space-y-6 pt-6">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Core Tech Stack</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge icon={FaReact} name="React.js" color="text-cyan-400" />
                    <TechBadge icon={SiHtml5} name="HTML" color="text-orange-500" />
                    <TechBadge icon={SiCss} name="CSS" color="text-blue-500" />
                    <TechBadge icon={SiTailwindcss} name="Tailwind CSS" color="text-cyan-500" />
                    <TechBadge icon={SiJavascript} name="JavaScript" color="text-yellow-400" />
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge icon={FaNodeJs} name="Node.js" color="text-emerald-400" />
                    <TechBadge icon={SiExpress} name="Express.js" color="text-slate-300" />
                    <TechBadge icon={SiPhp} name="PHP" color="text-indigo-400" />
                    <TechBadge icon={SiLaravel} name="Laravel" color="text-red-500" />
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Database</p>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge icon={SiMongodb} name="MongoDB" color="text-emerald-500" />
                    <TechBadge icon={SiMysql} name="MySQL" color="text-blue-400" />
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Tools & DevOps</p>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge icon={SiDocker} name="Docker" color="text-blue-500" />
                    <TechBadge icon={FaGitAlt} name="Git" color="text-orange-500" />
                    <TechBadge icon={SiLinux} name="Linux" color="text-slate-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Highlights */}
            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4 pt-4">
              <HighlightCard 
                icon={BookOpen} 
                title="Continuous Learning" 
                desc="Exploring modern frameworks and development tools." 
              />
              <HighlightCard 
                icon={Code2} 
                title="Full Stack Dev" 
                desc="Building complete applications from UI to APIs." 
              />
              <HighlightCard 
                icon={Cpu} 
                title="Problem Solving" 
                desc="Applying structured thinking to solve real problems." 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;