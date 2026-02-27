import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Heart,
  Lock,
  Layers,
  Brain,
  Headphones,
  Phone,
  Music,
  X,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SharedCountdown from "../components/SharedCountdown";

// Inline coaching inquiry form
const CoachingInquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goals: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coaching inquiry:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 border border-white/20 rounded-3xl p-8 text-center"
      >
        <div className="w-14 h-14 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-green-400/30">
          <CheckCircle size={28} className="text-green-400" />
        </div>
        <h4 className="text-xl font-serif font-bold mb-2">Details Received!</h4>
        <p className="text-white/60 text-sm font-light">Ria's team will reach out within 24 hours to schedule your discovery call.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Your Name</label>
        <input
          type="text"
          required
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all text-sm"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Email Address</label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all text-sm"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Phone / WhatsApp</label>
        <input
          type="tel"
          placeholder="+91 00000 00000"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all text-sm"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">Primary Goal</label>
        <input
          type="text"
          placeholder="e.g. confidence, charisma…"
          value={form.goals}
          onChange={(e) => setForm({ ...form, goals: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all text-sm"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-white text-purple-900 font-black py-4 rounded-2xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 text-base shadow-lg"
        >
          <Send size={18} /> Request My Discovery Call
        </button>
        <p className="text-white/30 text-xs text-center mt-3">Complimentary • No obligation • We'll contact you within 24 hours</p>
      </div>
    </form>
  );
};

const OTOPage = () => {
  const navigate = useNavigate();

  const handleAcceptOffer = () => {
    window.open("https://riagupta.com/product/party-mixtape/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 text-gray-900 overflow-x-hidden">
      {/* TOP CONFIRMATION BANNER */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 px-4 text-center">
        <p className="text-sm md:text-base font-semibold">
          ✓ &nbsp;Your Manifestation Track is ready for download in your inbox!
        </p>
      </div>

      <div className="container-custom py-14 md:py-24 relative max-w-4xl mx-auto px-4 text-center">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-purple-600 w-8 h-8" />
            </div>
            <span className="inline-block bg-purple-100 text-purple-700 px-5 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              One more step before you listen
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-gray-900">
              Ready to Go Deeper?
              <span className="block italic text-purple-600 mt-2">Unlock the Full Experience.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              The complimentary track gives you a taste. The Core Experience gives you the full 30-minute high-energy mix — engineered for social magnetic presence and unshakable confidence.
            </p>
          </motion.div>

          {/* Comparison */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-0 border border-purple-100 rounded-[2.5rem] overflow-hidden mb-16 shadow-xl bg-white text-left"
          >
            <div className="bg-gray-50 p-8 border-b md:border-b-0 md:border-r border-purple-100">
              <h3 className="text-base font-bold mb-6 text-gray-400 uppercase tracking-widest">Track Experience</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>1x 10-minute Manifestation Reset Track</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <X size={16} className="text-red-300 shrink-0 mt-0.5" />
                  <span>No 30-minute High-Energy Party Mix</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <X size={16} className="text-red-300 shrink-0 mt-0.5" />
                  <span>No social magnetism affirmations</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <X size={16} className="text-red-300 shrink-0 mt-0.5" />
                  <span>No personalized 21-day roadmap</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 text-left relative border border-purple-100 rounded-[2.5rem] shadow-2xl">
              <div className="flex items-center gap-2 text-purple-600 font-black uppercase tracking-widest text-[10px] mb-4">
                <Sparkles size={14} /> High Vibe Energy
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                The <span className="italic">Party</span> <br /> Mixtape
              </h1>

              <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-[10px] font-bold w-fit mb-8">
                <Clock size={12} /> <SharedCountdown />
              </div>

              <p className="text-gray-500 mb-10 text-lg font-light leading-relaxed">
                The Party Mixtape is a 30-minute high-energy mix designed for active movement and social confidence—perfect for pre-gaming or high-vibe nights.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "30-Minute High-Energy Audio",
                  "Gamma & High-Beta Energy Layers",
                  "Charisma & Confidence Affirmations",
                  "Lossless Bass-Forward Production",
                  "21-Day Manifestation Roadmap"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <Check size={18} className="text-purple-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Pricing */}
          <div className="mb-16 flex flex-col items-center">
            <div className="mb-8">
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest line-through mb-1">₹4,999</p>
              <div className="flex items-center justify-center gap-4">
                <p className="text-6xl md:text-8xl font-black text-purple-600 leading-none">₹1,999</p>
                <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">
                  60% OFF TODAY
                </div>
              </div>
            </div>

            <div className="w-full max-w-lg space-y-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAcceptOffer}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-black text-xl md:text-2xl py-7 rounded-[2rem] shadow-2xl flex items-center justify-center gap-4 hover:shadow-purple-300 transition-all duration-300"
              >
                YES! SECURE MY MIXTAPE
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                INSTANT DIGITAL DELIVERY • ONE-TIME PAYMENT
              </p>

              <button
                onClick={() => navigate("/")}
                className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium pt-4"
              >
                I'll stick with the complimentary track for now
              </button>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <Brain className="text-purple-600" size={24} />,
                title: "Psychology-Led Depth",
                desc: "Every second is engineered by a trained psychologist to bypass conscious resistance and build magnetic confidence.",
              },
              {
                icon: <Layers className="text-pink-600" size={24} />,
                title: "Energy Layering",
                desc: "Uses specific wave-layering designed to prime your brain for social engagement and high-vibe interactions.",
              },
              {
                icon: <Heart className="text-indigo-600" size={24} />,
                title: "Identity Journey",
                desc: "Over 21 days, we rewire the base identity: from 'socially anxious' to 'effortlessly magnetic'.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-purple-50 rounded-3xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Premium coaching teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-[2.5rem] p-8 md:p-12 text-white text-left"
          >
            <div className="mb-8 text-center md:text-left">
              <span className="text-purple-300 text-xs font-black uppercase tracking-widest block mb-3">Looking for deeper work?</span>
              <h3 className="text-2xl md:text-4xl font-serif font-bold mb-3">Premium 1:1 Coaching with Ria</h3>
              <p className="text-white/70 font-light leading-relaxed max-w-2xl">
                A fully personalized coaching engagement — subconscious audit, custom music protocol, and ongoing mentorship. Leave your details and Ria's team will reach out within 24 hours.
              </p>
            </div>

            <CoachingInquiryForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OTOPage;
