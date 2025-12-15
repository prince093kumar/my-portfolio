import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, Send } from "lucide-react";

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
      className={`py-20 px-4 transition-colors duration-300 ${darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"
        }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className={`rounded-3xl p-8 border ${darkMode ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-200"
          }`}>
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact Info</h3>
              <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                Open for opportunities. Let's build something amazing together.
              </p>

              <div className="space-y-4">
                <a href="mailto:prince093k@gmail.com" className="flex items-center gap-3 text-lg hover:text-blue-500 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <Mail size={20} />
                  </div>
                  <span>prince093k@gmail.com</span>
                </a>

                <a href="https://linkedin.com/in/prince093kumar" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg hover:text-blue-500 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <Linkedin size={20} />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>

                <a href="https://github.com/prince093kumar" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg hover:text-blue-500 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <Github size={20} />
                  </div>
                  <span>GitHub Profile</span>
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

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
