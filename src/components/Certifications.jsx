import React from "react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const Certifications = ({ darkMode }) => {
    const certifications = [
        {
            title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            issuer: "Oracle",
            date: "Sep '25"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            date: "Jun '25"
        },
        {
            title: "Computer Communications",
            issuer: "Coursera",
            date: "Oct '24"
        }
    ];

    return (
        <section
            id="certifications"
            className={`py-20 px-4 transition-colors duration-300 ${darkMode ? "bg-slate-900 text-slate-100" : "bg-white text-slate-800"
                }`}
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-10">
                    <BadgeCheck className="text-green-500" size={32} />
                    <h2 className="text-3xl font-extrabold tracking-tight">Certifications</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-6 rounded-2xl glass-card border flex flex-col justify-between hover:shadow-lg transition-all ${darkMode ? "border-slate-700/50" : "border-slate-200"
                                }`}
                        >
                            <div className="mb-4">
                                <h3 className="font-bold text-lg leading-snug mb-2">{cert.title}</h3>
                                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Issued by {cert.issuer}</p>
                            </div>
                            <div className="self-end">
                                <span className={`text-xs font-mono px-2 py-1 rounded ${darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"}`}>
                                    {cert.date}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
