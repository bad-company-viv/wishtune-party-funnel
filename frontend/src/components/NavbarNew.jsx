import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Send, CheckCircle, Sparkles } from "lucide-react";

// Discovery call form (popup)
const DiscoveryCallModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goals: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (form.phone.trim() && !/^\+?[\d\s\-]{7,15}$/.test(form.phone)) {
      e.phone = "Enter a valid phone number.";
    }
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    console.log("Discovery call inquiry:", form);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.96 }}
          transition={{ type: "spring", damping: 28, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg"
        >
          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-[2.5rem] p-8 text-white shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-purple-300 text-xs font-black uppercase tracking-widest block mb-2">Complimentary • No Obligation</span>
                <h3 className="text-2xl font-serif font-bold">Book a Discovery Call</h3>
                <p className="text-white/60 text-sm font-light mt-1">
                  Leave your details Ria's team will reach out within 24 hours.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors shrink-0 ml-4"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 border border-white/20 rounded-3xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-green-400/30">
                  <CheckCircle size={28} className="text-green-400" />
                </div>
                <h4 className="text-xl font-serif font-bold mb-2">Details Received!</h4>
                <p className="text-white/60 text-sm font-light">Ria's team will reach out within 24 hours to schedule your call.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors(v => ({ ...v, name: "" })); }}
                    className={`w-full bg-white/10 border rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:bg-white/15 transition-all text-sm ${errors.name ? "border-red-400" : "border-white/20 focus:border-purple-400"}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors(v => ({ ...v, email: "" })); }}
                    className={`w-full bg-white/10 border rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:bg-white/15 transition-all text-sm ${errors.email ? "border-red-400" : "border-white/20 focus:border-purple-400"}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Phone / WhatsApp <span className="text-white/20 normal-case font-normal tracking-normal">(optional)</span></label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors(v => ({ ...v, phone: "" })); }}
                    className={`w-full bg-white/10 border rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:bg-white/15 transition-all text-sm ${errors.phone ? "border-red-400" : "border-white/20 focus:border-purple-400"}`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">I want to work on</label>
                  <input
                    type="text"
                    placeholder="confidence, charisma…"
                    value={form.goals}
                    onChange={(e) => setForm({ ...form, goals: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-white text-purple-900 font-black py-4 rounded-2xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 text-base shadow-lg"
                  >
                    <Send size={18} /> Request My Discovery Call
                  </button>
                  <p className="text-white/30 text-xs text-center mt-3">Complimentary • No obligation • We'll contact you within 24 hours</p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const openModal = () => setShowModal(true);
    document.addEventListener("openDiscoveryForm", openModal);
    return () => document.removeEventListener("openDiscoveryForm", openModal);
  }, []);

  useEffect(() => {
    setShowModal(false);
  }, [location]);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-purple-50 shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 md:h-20 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/images/wishtune-logo.png"
                alt="Wishtune Logo"
                className="h-9 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* CTA — opens modal */}
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold px-5 py-2.5 rounded-full text-sm hover:shadow-lg hover:shadow-purple-200 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              Book a Discovery Call
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Discovery Call Modal */}
      <AnimatePresence>
        {showModal && <DiscoveryCallModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
