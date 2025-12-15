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
      className={`py-20 px-4 transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
        }`}
    >
      <div className="max-w-7xl mx-auto">
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
              className={`group rounded-2xl overflow-hidden border transition-all hover:shadow-2xl hover:-translate-y-1 ${darkMode
                  ? "bg-slate-900 border-slate-800 hover:border-slate-600"
                  : "bg-slate-50 border-slate-200 hover:border-blue-400/50 hover:bg-white"
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
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full font-medium ${darkMode
                          ? "bg-slate-800 text-slate-300 border border-slate-700"
                          : "bg-white text-slate-700 border border-slate-200 shadow-sm"
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
