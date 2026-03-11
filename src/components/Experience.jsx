import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = ({ darkMode }) => {
    const experiences = [
        {
            role: "MERN Stack Development Trainee",
            company: "CipherSchools",
            duration: "Jun '25 - Jul '25",
            desc: "Completed industry-oriented training in full-stack development. Gained practical experience in MongoDB, Express.js, React.js, Node.js, and RESTful API development. Crafted the Recipe Generator full-stack project."
        }
    ];

    return (
        <section
            id="experience"
            className={`py-20 px-4 transition-colors duration-300 ${darkMode ? "bg-slate-900 text-slate-100" : "bg-white text-slate-800"
                }`}
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <Briefcase className="text-purple-500" size={32} />
                    <h2 className="text-3xl font-extrabold tracking-tight">Experience</h2>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-2xl glass-card border relative ${darkMode ? "border-slate-700/50" : "border-slate-200"
                                }`}
                        >
                            <div className="absolute left-0 top-10 w-1.5 h-12 bg-purple-500 rounded-r-full" />
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                                    <p className="text-purple-500 font-semibold text-lg">{exp.company}</p>
                                </div>
                                <span className={`mt-2 md:mt-0 px-3 py-1 text-sm font-mono rounded-full ${darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"
                                    }`}>
                                    {exp.duration}
                                </span>
                            </div>
                            <p className={`leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                {exp.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
