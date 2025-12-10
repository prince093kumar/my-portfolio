import React from "react";
import { ExternalLink } from "lucide-react";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Recipe Generator Web App",
      desc: "A full-stack recipe recommendation system that generates recipes based on user-provided ingredients. Includes JWT authentication, bcrypt-secured login, and optimized API/state management achieving a 40% faster response time.",
      tags: ["MongoDB", "Express.js", "React", "Node", "REST API"],
      image: "/images/recipe.png",
      link: "#"
    },
    {
      title: "Smart Agriculture Platform",
      desc: "A platform enabling farmers to upload crop-disease images for expert diagnosis. Features dashboards for Farmers, Experts, and Admin, with analytics powered by Chart.js and automated PDF report generation—reducing diagnosis time from days to minutes.",
      tags: ["PHP", "MySQL", "Tailwind", "JavaScript", "HTML/CSS"],
      image: "/images/agri.png",
      link: "#"
    },
    {
      title: "Government & Corporate Documentation Portal",
      desc: "A secure documentation portal supporting e-District services, MSME registration, and tax submissions. Built with role-based authentication, workflow automation, and optimized backend/database design for high reliability.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      image: "/images/govt.png",
      link: "#"
    }
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-4 transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading without icon */}
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden  shadow-md border ${
                darkMode
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-slate-200"
              }`}
            >
              {/* Project Image */}
              <div
                className={`h-44 flex items-center justify-center ${
                  darkMode ? "bg-slate-700/40" : "bg-slate-100"
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm mb-4 opacity-80">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-slate-200 text-slate-700 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  className="text-blue-600 font-medium inline-flex items-center gap-1"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
