import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = ({ darkMode }) => {
    const education = [
        {
            degree: "B.Tech - Computer Science and Engineering",
            school: "Lovely Professional University, Punjab",
            year: "Aug '24 - Present",
        },
        {
            degree: "Diploma - Computer Science and Engineering",
            school: "Lovely Professional University, Punjab",
            year: "Jul '22 - Jun '24",
        },
        {
            degree: "Intermediate",
            school: "MKD Public School, Bihar",
            year: "Jun '19 - Jul '21",
        }
    ];

    return (
        <section
            id="education"
            className={`py-20 px-4 transition-colors duration-300 ${darkMode ? "bg-slate-800/50 text-slate-100" : "bg-slate-50 text-slate-800"
                }`}
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <GraduationCap className="text-blue-500" size={32} />
                    <h2 className="text-3xl font-extrabold tracking-tight">Education</h2>
                </div>

                <div className="grid gap-6">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-6 rounded-2xl glass-card border hover:scale-[1.01] transition-transform ${darkMode ? "border-slate-700/50" : "border-slate-200"
                                }`}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <p className="text-blue-500 font-medium">{edu.school}</p>
                                </div>
                                <span className={`px-3 py-1 text-sm font-medium rounded-lg ${darkMode ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-700"
                                    }`}>
                                    {edu.year}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
