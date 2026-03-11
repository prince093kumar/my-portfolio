import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Safe image imports
import recipeImg from "../assets/recipe.png";
import agriImg from "../assets/agri.png";
import govtImg from "../assets/govt.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Recipe Generator Web App",
      desc: "A MERN stack application that recommends recipes based on available ingredients. Features secure JWT authentication and optimized API performance.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      image: recipeImg,
      link: "https://github.com/prince093kumar/summer_training_mern/tree/main/Recipe_Generator"
    },
    {
      title: "Smart Agriculture Platform",
      desc: "An AI-powered platform for farmers to diagnose crop diseases via image upload. Includes dashboards for experts and admin with automated reporting.",
      tags: ["PHP", "MySQL", "Tailwind", "JS"],
      image: agriImg,
      link: "https://github.com/prince093kumar/TechnoGrowX"
    },
    {
      title: "Govt & Corporate Portal",
      desc: "A digitized documentation portal for government services (e-District, MSME). Streamlines workflows and ensures secure data handling.",
      tags: ["PHP", "MySQL", "HTML5", "CSS3"],
      image: govtImg,
      link: "https://github.com/prince093kumar/ismart_indfes"
    }
  ];

  return (
    <section
      id="projects"
      className={`relative py-20 px-4 transition-colors duration-300 overflow-hidden ${darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"
        }`}
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className={`absolute top-40 right-20 w-72 h-72 rounded-full blur-[120px] opacity-20 ${darkMode ? "bg-blue-600" : "bg-blue-400"}`}
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-40 left-20 w-72 h-72 rounded-full blur-[120px] opacity-20 ${darkMode ? "bg-purple-600" : "bg-purple-400"}`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass-card group rounded-3xl overflow-hidden relative transition-all duration-500 hover:-translate-y-2 cursor-pointer ${darkMode
                ? "bg-slate-900/50"
                : "bg-white/60"
                }`}
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className={`text-sm line-clamp-3 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${darkMode
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20"
                        : "bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-100"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 mt-2"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
