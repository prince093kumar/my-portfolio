import React from "react";
import { FileText, Download } from "lucide-react";

const Resume = ({ darkMode }) => (
  <section
    id="resume"
    className={`py-24 px-6 transition-colors duration-300 ${
      darkMode ? "bg-slate-900 text-slate-100" : "bg-gradient-to-b from-blue-50 to-white text-slate-800"
    }`}
  >
    <div className="max-w-4xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <FileText className="text-blue-500" size={28} />
          <h2 className="text-4xl font-extrabold tracking-tight">
            Resume
          </h2>
        </div>

        <p
          className={`max-w-2xl mx-auto text-lg ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Explore my background, technical expertise, and hands-on project experience.  
          Download my resume to get a complete overview of my journey as a Full-Stack Developer.
        </p>
      </div>

      {/* Resume Card */}
      <div
        className={`rounded-3xl p-10 shadow-xl backdrop-blur-md border transition-all ${
          darkMode
            ? "bg-slate-800/60 border-slate-700 hover:border-blue-500/40"
            : "bg-white/70 border-slate-200 hover:border-blue-400/40"
        }`}
      >
        <div className="text-center space-y-6">

          {/* Resume Preview Icon */}
          <div className="flex items-center justify-center">
            <div
              className={`p-6 rounded-2xl ${
                darkMode ? "bg-slate-700/50" : "bg-blue-100"
              }`}
            >
              <FileText
                size={48}
                className={darkMode ? "text-blue-300" : "text-blue-700"}
              />
            </div>
          </div>

          {/* CTA Text */}
          <h3 className="text-2xl font-semibold">
            Download My Resume
          </h3>

          <p
            className={`max-w-xl mx-auto ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Get a detailed look at my skills, education, certifications, and project achievements.
          </p>

          {/* Download Button */}
          <a
            href="/resume.pdf"
            download="Prince_Kumar_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>

    </div>
  </section>
);

export default Resume;
