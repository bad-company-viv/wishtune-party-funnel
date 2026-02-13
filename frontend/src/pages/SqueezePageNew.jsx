import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Music,
  Sparkles,
  Check,
  Star,
  TrendingUp,
  Zap,
  Play,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-brand-gold/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

// Vertical Lines Background Component
const VerticalLinesBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: ["0%", "100%", "100%"],
          opacity: [0, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          delay: i * 0.03,
          ease: "easeOut",
        }}
        className="absolute w-px bg-gradient-to-b from-transparent via-purple-300 to-pink-200"
        style={{ left: `${(i / 40) * 100}%` }}
      />
    ))}
  </div>
);

// Wave Background Component
const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80 z-0">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%]"
          style={{
            border: "1px solid rgba(147, 51, 234, 0.3)",
            borderRadius: "40%",
            transform: "translateZ(0)",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * -5,
          }}
        />
      ))}
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="wave-grad-squeeze"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={`wave-${i}`}
            d="M0,50 C150,150 350,0 500,50 C650,100 850,-50 1000,50 V100 H0 V50 Z"
            fill="none"
            stroke="url(#wave-grad-squeeze)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              d: [
                "M0,50 C150,150 350,0 500,50 C650,100 850,-50 1000,50",
                "M0,50 C150,-50 350,100 500,50 C650,0 850,150 1000,50",
              ],
              pathLength: 1,
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="w-full h-full"
            style={{
              transform: `scaleY(${0.8 + i * 0.3}) translateY(${i * 25}px)`,
              transformOrigin: "center",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const SqueezePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // Simulate Lead Capture
      await new Promise((resolve) => setTimeout(resolve, 800));
      // In a real app, send to email service (ConvertKit/Mailchimp/etc)
      navigate("/offer");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-gradient-to-b from-purple-50 via-pink-50 to-white text-gray-900">
      {/* Hypnotic Background Layer */}
      <VerticalLinesBackground />
      <WaveBackground />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-plum/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[180px]" />
        <FloatingParticles />
      </div>

      <div className="z-10 max-w-4xl w-full">
        {/* 1. BRAND TRUST (Why trust you?) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm border border-amber-200/40 rounded-full px-6 py-2 mb-6 text-brand-gold text-xs font-bold tracking-widest uppercase">
            <ShieldCheck size={14} /> Science-Backed Audio Alchemy
          </div>
          <div className="flex items-center gap-6 text-gray-600 grayscale opacity-80">
            <span className="text-xl font-serif font-bold italic">
              dailyhunt
            </span>
            <span className="text-xl font-serif font-black tracking-tighter">
              The Tribune
            </span>
            <span className="text-sm font-sans font-bold">Google News</span>
          </div>
        </motion.div>

        {/* 2. MAIN HOOK (Who is this for? / What problem does it solve?) */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] mb-8"
          >
            Command The <br />
            Party <br />
            <span className="gradient-text-gold">Tonight.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
              Tired of fading into the background? Stop waiting and start
              shining.
            </p>
            <p className="text-brand-gold font-bold text-2xl">
              Download the 5-Minute "Magnetism Booster" Track.
            </p>
          </motion.div>
        </div>

        {/* 3. THE LEAD MAGNET BOX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative max-w-xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/30 via-brand-plum/30 to-brand-gold/30 rounded-3xl blur-xl opacity-20 animate-pulse-slow" />

          <div className="relative bg-white backdrop-blur-sm border border-amber-200/40 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <span className="text-brand-gold font-black text-sm uppercase tracking-tighter px-4 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full inline-block mb-4">
                FREE DIGITAL DOWNLOAD
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                The 432Hz "Magnetism Booster"
              </h2>
              <h3 className="text-gray-600 font-serif italic text-xl">
                Command Your Presence.
              </h3>
            </div>

            {/* Benefits Summary */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <Check className="text-brand-gold" size={18} />{" "}
                <span>Instant MP3 Delivery (Party-Ready)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Check className="text-brand-gold" size={18} />{" "}
                <span>
                  Neuro-Acoustic Beta Wave Tuning (Confidence & Energy)
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email for instant party boost access..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-premium text-lg h-16"
                  required
                />
                <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gold/40" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-xl py-6 relative overflow-hidden group h-16"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting
                    ? "Generating Link..."
                    : "Send My Free Track Now"}{" "}
                  <ArrowRight />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </form>

            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Lock size={12} /> Privacy Protected • Instant Access
              </div>
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1521119989659-a83eee4882b2?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                ].map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    alt={`User ${i}`}
                  />
                ))}
                <span className="pl-4 text-xs text-gray-600 font-bold self-center">
                  Joined by 10k+ Party Shifters
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof (Footer of Squeeze Page) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center text-gray-600 text-sm italic"
        >
          "I feel more confident at parties in 15 minutes of listening than I
          did in 15 years of self-doubt." — Sarah M.
        </motion.div>
      </div>
    </div>
  );
};

export default SqueezePage;
