import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interest: "Coaching",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g. API call)
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Start Your{" "}
            <span className="text-brand-gold italic">Transformation.</span>
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Whether you're interested in 1:1 coaching, have a question about the
            mixtapes, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">
                Contact Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fill out the form and Ria or her team will get back to you
                within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="font-semibold text-gray-900">
                    support@riagupta.com
                  </p>
                </div>
              </div>
              {/* Additional info if needed */}
            </div>
          </div>

          {/* Form or Success State */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-brand-gold/5 to-brand-plum/5 border border-brand-gold/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
            >
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mb-6 text-brand-dark shadow-[0_0_30px_rgba(197,160,89,0.4)]">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Message Received
              </h3>
              <p className="text-gray-600 mb-8 max-w-xs">
                Thank you, {formState.name}! We've received your inquiry and
                will be in touch shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-brand-gold font-bold hover:text-brand-dark transition-colors border-b border-brand-gold pb-1"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">
                  I'm Interested In
                </label>
                <select
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all appearance-none"
                  value={formState.interest}
                  onChange={(e) =>
                    setFormState({ ...formState, interest: e.target.value })
                  }
                >
                  <option value="Coaching">1:1 Coaching</option>
                  <option value="Mixtapes">Wishtune Mixtapes</option>
                  <option value="Journaling">Journaling</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 h-32 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all resize-none"
                  placeholder="Tell us a bit about your goals..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gold text-brand-dark font-bold py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
