import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = ({ darkMode }) => (
  <section id="contact" className={`py-20 px-4 transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-800'}`}>
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-12">
        <Mail className="text-blue-500" />
        <h2 className="text-3xl font-bold">Get In Touch</h2>
      </div>
      <div className={`p-8 rounded-2xl shadow-sm border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              I'm currently open to freelance opportunities and full-time DevOps roles. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                <Mail size={18} className="text-blue-500" />
                <span>hello@alexdev.com</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                <Github size={18} className="text-blue-500" />
                <span>[github.com/alexdev](https://github.com/alexdev)</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                <Linkedin size={18} className="text-blue-500" />
                <span>[linkedin.com/in/alexdev](https://linkedin.com/in/alexdev)</span>
              </a>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-300'}`} placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-300'}`} placeholder="name@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea rows={4} className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-300'}`} placeholder="Your message..."></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;