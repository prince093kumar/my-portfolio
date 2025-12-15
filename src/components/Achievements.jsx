import React from "react";
import { Award, Star } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = ({ darkMode }) => {
    const achievements = [
        "Received Academic Achiever Award twice during Diploma for outstanding academic performance.",
        "Achieved 5-Star Gold Badge in Java | HackerRank.",
        "4-Star Badge in JavaScript | HackerRank."
    ];

    return (
        <section
            id="achievements"
            className={`py-20 px-4 transition-colors duration-300 ${darkMode ? "bg-slate-800/50 text-slate-100" : "bg-slate-50 text-slate-800"
                }`}
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-10">
                    <Award className="text-yellow-500" size={32} />
                    <h2 className="text-3xl font-extrabold tracking-tight">Achievements</h2>
                </div>

                <div className="grid gap-4">
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-5 rounded-2xl border flex items-center gap-4 group hover:bg-slate-800/80 transition-colors ${darkMode
                                    ? "bg-slate-800/40 border-slate-700"
                                    : "bg-white border-slate-200"
                                }`}
                        >
                            <div className={`p-3 rounded-full ${darkMode ? "bg-slate-700 text-yellow-500" : "bg-yellow-100 text-yellow-600"}`}>
                                <Star size={24} fill="currentColor" className="group-hover:animate-spin" />
                            </div>
                            <p className={`text-lg font-medium ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
                                {ach}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
