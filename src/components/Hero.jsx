import React from "react";
import { User } from "lucide-react";

const Hero = ({ darkMode, scrollTo }) => (
  <section
    id="home"
    className={`py-24 px-4 text-center transition-colors duration-300 ${
      darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"
    }`}
  >
    <div className="max-w-3xl mx-auto space-y-6 animate-in slide-in-from-bottom-5 fade-in duration-700">
      <div className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 shadow-sm">
        <User size={32} />
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
          Aspiring Full Stack Developer
        </span>
      </h1>
      <p
        className={`text-xl max-w-2xl mx-auto leading-relaxed ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        A dedicated{" "}
        <span className="font-semibold text-purple-500">
          Full Stack Developer
        </span>{" "}
        building scalable architectures, optimizing system workflows, and
        delivering intuitive, user-focused web applications.
      </p>

      <div className="flex justify-center gap-4 pt-6">
        <button
          onClick={() => scrollTo("projects")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
        >
          View Work
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className={`px-8 py-3 rounded-lg font-bold border transition-all hover:shadow-md transform hover:-translate-y-1 ${
            darkMode
              ? "border-slate-700 hover:bg-slate-800"
              : "border-slate-300 hover:bg-white"
          }`}
        >
          Contact Me
        </button>
      </div>
    </div>
  </section>
);
export default Hero;
