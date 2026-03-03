import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      // Check if env vars are present before sending
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        throw new Error("Email service not configured");
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email Error:", error);
      setStatus("Failed to send message. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`relative py-20 px-4 transition-colors duration-300 overflow-hidden ${darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"
        }`}
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-[100px] opacity-30 ${darkMode ? "bg-blue-600" : "bg-blue-300"}`}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-20 right-10 w-64 h-64 rounded-full blur-[100px] opacity-30 ${darkMode ? "bg-purple-600" : "bg-purple-300"}`}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Get In Touch</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden`}
        >
          {/* subtle interior glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact Info</h3>
              <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                Open for opportunities. Let's build something amazing together.
              </p>

              <div className="space-y-4">
                <a href="mailto:prince09372@gmail.com" className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? "border-slate-700/50 bg-slate-800/50 hover:bg-slate-800 hover:border-blue-500/50" : "border-slate-200 bg-white/50 hover:bg-white hover:border-blue-300 hover:shadow-lg"}`}>
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500 font-medium">Email</span>
                    <span className="font-semibold group-hover:text-blue-500 transition-colors">prince09372@gmail.com</span>
                  </div>
                </a>

                <a href="https://linkedin.com/in/prince093kumar" target="_blank" rel="noreferrer" className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? "border-slate-700/50 bg-slate-800/50 hover:bg-slate-800 hover:border-blue-500/50" : "border-slate-200 bg-white/50 hover:bg-white hover:border-blue-300 hover:shadow-lg"}`}>
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500 font-medium">LinkedIn</span>
                    <span className="font-semibold group-hover:text-blue-500 transition-colors">prince093kumar</span>
                  </div>
                </a>

                <a href="https://github.com/prince093kumar" target="_blank" rel="noreferrer" className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? "border-slate-700/50 bg-slate-800/50 hover:bg-slate-800 hover:border-blue-500/50" : "border-slate-200 bg-white/50 hover:bg-white hover:border-blue-300 hover:shadow-lg"}`}>
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Github size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500 font-medium">GitHub</span>
                    <span className="font-semibold group-hover:text-blue-500 transition-colors">prince093kumar</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? "bg-slate-900 border-slate-700" : "bg-slate-50 border-slate-300"
                    }`}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? "bg-slate-900 border-slate-700" : "bg-slate-50 border-slate-300"
                    }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? "bg-slate-900 border-slate-700" : "bg-slate-50 border-slate-300"
                    }`}
                  placeholder="How can I help you?"
                />
              </div>

              {status && (
                <p className={`text-sm ${status.includes("success") ? "text-green-500" : "text-red-500"}`}>
                  {status}
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : <>Send Message <Send size={18} className="animate-pulse" /></>}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
