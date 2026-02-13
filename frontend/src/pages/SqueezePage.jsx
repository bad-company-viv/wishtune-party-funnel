import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SqueezePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In real app, submit email here
      navigate("/offer");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-black font-sans text-white">
      {/* Hypnotic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-plum/40 via-black to-black opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="z-10 max-w-2xl w-full text-center space-y-8">
        {/* Brand / Credibility */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-white/50 text-xs tracking-[0.2em] font-mono uppercase"
        >
          <Music size={12} />
          <span>Wishtune Audio Labs • Patent Pending Technology</span>
        </motion.div>

        {/* Main Hook */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold leading-tight"
        >
          Social Magnetism <br />
          <span className="text-white/30 italic font-light">without</span>
          <br />
          <span className="text-brand-gold">Effort.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 font-light max-w-lg mx-auto leading-relaxed"
        >
          Stop overthinking. Stop waiting. Stop playing small.
          <br />
          <strong>Just press play.</strong> At parties, events, or anywhere you
          want to shine.
        </motion.p>

        {/* The Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl mt-8"
        >
          <h3 className="text-xl font-serif mb-6">
            Get Your <span className="text-brand-gold">Confidence Booster</span>{" "}
            for FREE
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/50 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold transition-colors text-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-gold hover:bg-white text-brand-dark font-bold text-lg py-4 rounded-lg transition-all shadow-glow transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Send It To Me <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/30">
            <Lock size={10} />
            <span>Your email is safe. Unsubscribe anytime.</span>
          </div>
        </motion.div>
      </div>

      {/* Footer / Social Proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-white/20 text-sm">
          Join 10,000+ people commanding rooms and attracting their dreams.
        </p>
      </motion.div>
    </div>
  );
};

export default SqueezePage;
