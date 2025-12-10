import React from "react";
import { User } from "lucide-react";

const About = ({ darkMode = false }) => {
  const frontend = ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"];
  const backend = ["Node.js", "Express.js", "PHP","Java"];
  const database = ["MongoDB", "MySQL"];
  const tools = ["Git", "GitHub", "Linux"];

  const badgeClass = (lightBg, lightText, darkBg, darkText) =>
    darkMode ? `${darkBg} ${darkText}` : `${lightBg} ${lightText} shadow-sm`;

  return (
    <section
      id="about"
      className={`py-20 px-4 transition-colors duration-300 ${
        darkMode ? "bg-slate-800/50 text-slate-100" : "bg-white text-slate-800"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-8">
          <User className="text-blue-500" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-4 text-lg">
            <p
              className={`leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I'm a passionate{" "}
              <span className="font-semibold text-purple-500">
                Full Stack Developer
              </span>{" "}
              focused on building fast, scalable, and user-friendly applications.
              I enjoy transforming ideas into functional digital experiences by
              combining clean code, modern frameworks, and practical problem
              solving.
            </p>

            <p
              className={`leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              My goal is to create applications that deliver exceptional
              performance and smooth user interactions—whether it's frontend
              interfaces, backend APIs, or complete end-to-end systems.
            </p>
          </div>

          {/* Tech Stack Card */}
          <div
            className={`p-6 rounded-2xl border shadow-sm ${
              darkMode
                ? "bg-slate-900 border-slate-700"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <h3 className="font-bold mb-4 text-lg">Tech Stack</h3>

            <div className="flex flex-wrap gap-2">
              {/* Frontend */}
              {frontend.map((tech) => (
                <span
                  key={`fe-${tech}`}
                  className={`px-3 py-1 text-sm rounded-full font-medium ${badgeClass(
                    "bg-purple-200",
                    "text-purple-800",
                    "bg-purple-900/40",
                    "text-purple-200"
                  )}`}
                >
                  {tech}
                </span>
              ))}

              {/* Backend */}
              {backend.map((tech) => (
                <span
                  key={`be-${tech}`}
                  className={`px-3 py-1 text-sm rounded-full font-medium ${badgeClass(
                    "bg-blue-200",
                    "text-blue-800",
                    "bg-blue-900/40",
                    "text-blue-200"
                  )}`}
                >
                  {tech}
                </span>
              ))}

              {/* Database */}
              {database.map((tech) => (
                <span
                  key={`db-${tech}`}
                  className={`px-3 py-1 text-sm rounded-full font-medium ${badgeClass(
                    "bg-orange-200",
                    "text-orange-800",
                    "bg-orange-900/40",
                    "text-orange-200"
                  )}`}
                >
                  {tech}
                </span>
              ))}

              {/* Tools */}
              {tools.map((tech) => (
                <span
                  key={`tool-${tech}`}
                  className={`px-3 py-1 text-sm rounded-full font-medium ${badgeClass(
                    "bg-green-200",
                    "text-green-800",
                    "bg-green-900/40",
                    "text-green-200"
                  )}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;