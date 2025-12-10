import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      setLoading(false);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-white text-slate-800"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <Mail className="text-blue-500" />
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </div>

        <div
          className={`p-8 rounded-2xl shadow-sm border ${
            darkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>

              <p
                className={`mb-6 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                I am a Full Stack Developer open to freelance and full-time
                opportunities. Feel free to reach out through this form or email
                me directly.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:prince093k@gmail.com"
                  className="flex items-center gap-3 hover:text-blue-500 transition"
                >
                  <Mail size={18} className="text-blue-500" />
                  <span>prince093k@gmail.com</span>
                </a>

                <a
                  href="https://github.com/prince093kumar"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-blue-500 transition"
                >
                  <Github size={18} className="text-blue-500" />
                  <span>github.com/prince093kumar</span>
                </a>

                <a
                  href="https://linkedin.com/in/prince093kumar"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-blue-500 transition"
                >
                  <Linkedin size={18} className="text-blue-500" />
                  <span>linkedin.com/in/prince093kumar</span>
                </a>
              </div>
            </div>

            {/* Right section - form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-slate-50 border-slate-300"
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
                  className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-slate-50 border-slate-300"
                  }`}
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-slate-50 border-slate-300"
                  }`}
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Status message */}
              {status && (
                <p
                  className={`text-sm font-medium ${
                    status.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-md disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
