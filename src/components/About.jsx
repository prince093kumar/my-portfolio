import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <User className="text-blue-600" />
        <h2 className="text-3xl font-bold">About Me</h2>
      </div>
      <p className="text-lg text-slate-600 leading-relaxed">
        I am a passionate developer skilled in MERN stack and DevOps. 
        I love building scalable applications and automating infrastructure.
      </p>
    </section>
  );
};
export default About;