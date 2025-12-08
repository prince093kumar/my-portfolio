import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = ({ darkMode }) => (
  <section
    id="contact"
    className={`py-20 px-4 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-800'
    }`}
  >
    <div className="max-w-4xl mx-auto">
      
      {/* Heading */}
      <div className="flex items-center gap-2 mb-12">
        <Mail className="text-blue-500" />
        <h2 className="text-3xl font-bold">Get In Touch</h2>
      </div>

      {/* Contact Card */}
      <div
        className={`p-8 rounded-2xl shadow-sm border ${
          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>

            <p
              className={`mb-6 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              I’m a passionate Full-Stack Developer specializing in building
              modern, scalable, and user-focused web applications.  
              I’m open to internships, full-time roles, and collaborative project opportunities.
              Feel free to reach out—I’d love to connect!
            </p>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:prince093k@gmail.com"
                className="flex items-center gap-3 hover:text-blue-500 transition-colors"
              >
                <Mail size={18} className="text-blue-500" />
                <span>pk6206572@gmail.com</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/prince093kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-500 transition-colors"
              >
                <Github size={18} className="text-blue-500" />
                <span>github.com/prince093kumar</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/prince093kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={18} className="text-blue-500" />
                <span>linkedin.com/in/prince093kumar</span>
              </a>

            </div>
          </div>

          {/* Right - Contact Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700'
                    : 'bg-slate-50 border-slate-300'
                }`}
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700'
                    : 'bg-slate-50 border-slate-300'
                }`}
                placeholder="name@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700'
                    : 'bg-slate-50 border-slate-300'
                }`}
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Button */}
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
