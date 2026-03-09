import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Sparkles,
  Check,
  ShieldCheck,
  Brain,
  Layers,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
      />
    ))}
  </div>
);

const VerticalLinesBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: ["0%", "100%", "100%"], opacity: [0, 0.6, 0.3] }}
        transition={{ duration: 2, delay: i * 0.03, ease: "easeOut" }}
        className="absolute w-px bg-gradient-to-b from-transparent via-purple-300 to-pink-200"
        style={{ left: `${(i / 40) * 100}%` }}
      />
    ))}
  </div>
);

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80 z-0">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%]"
        style={{ border: "1px solid rgba(147, 51, 234, 0.3)", borderRadius: "40%", transform: "translateZ(0)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear", delay: i * -5 }}
      />
    ))}
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wave-grad-squeeze" x1="0%" y1="0%" x2="100%" y2="0%">
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
            d: ["M0,50 C150,150 350,0 500,50 C650,100 850,-50 1000,50", "M0,50 C150,-50 350,100 500,50 C650,0 850,150 1000,50"],
            pathLength: 1,
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ duration: 8 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.5 }}
          className="w-full h-full"
          style={{ transform: `scaleY(${0.8 + i * 0.3}) translateY(${i * 25}px)`, transformOrigin: "center" }}
        />
      ))}
    </svg>
  </div>
);

const SqueezePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      navigate("/offer");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-gradient-to-b from-purple-50 via-pink-50 to-white text-gray-900">
      <VerticalLinesBackground />
      <WaveBackground />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[180px]" />
        <FloatingParticles />
      </div>

      <div className="z-10 max-w-4xl w-full">
        {/* 1. CREDENTIALS TRUST STRIP */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm border border-purple-200/40 rounded-full px-6 py-2 mb-6 text-purple-600 text-xs font-bold tracking-widest uppercase text-center">
            <ShieldCheck size={14} /> Designed by a Trained Psychologist
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 grayscale opacity-70">
            <span className="text-lg font-serif font-bold italic">dailyhunt</span>
            <span className="text-lg font-serif font-black tracking-tighter">The Tribune</span>
            <span className="text-sm font-sans font-bold">Google News</span>
          </div>
        </motion.div>

        {/* 2. MAIN HOOK */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] mb-8"
          >
            Discover How Your <br />
            Subconscious Is <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Shaping Your Reality.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              A complimentary 10 minute Manifestation Reset Track psychologist designed to shift your subconscious state and give you a real taste of how healing music works.
            </p>
          </motion.div>
        </div>

        {/* 3. LEAD MAGNET BOX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative max-w-xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30 rounded-3xl blur-xl opacity-20 animate-pulse" />

          <div className="relative bg-white backdrop-blur-sm border border-purple-100 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <span className="text-purple-600 font-black text-sm uppercase tracking-tighter px-4 py-1 bg-purple-50 border border-purple-100 rounded-full inline-block mb-4">
                DIGITAL DOWNLOAD
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                The Manifestation Reset Track
              </h2>
              <h3 className="text-gray-500 font-serif italic text-xl">
                10 Minutes to Shift Your State.
              </h3>
            </div>

            {/* What you'll experience */}
            <div className="bg-purple-50 rounded-2xl p-5 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-4">In this track, you'll experience:</p>
              <div className="space-y-3">
                {[
                  { icon: <Brain size={16} />, text: "Psychologist designed layered audio architecture" },
                  { icon: <Layers size={16} />, text: "Subconscious level affirmation embedding" },
                  { icon: <Activity size={16} />, text: "Frequency guided relaxation & receptive state" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="text-purple-500 shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Check className="text-purple-500 shrink-0" size={16} />
                <span>Instant delivery no waiting</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Check className="text-purple-500 shrink-0" size={16} />
                <span>Works with or without headphones</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Check className="text-purple-500 shrink-0" size={16} />
                <span>No prior experience needed</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Where should we send your track?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-purple-100 rounded-2xl px-5 py-4 text-lg focus:outline-none focus:border-purple-400 transition-colors bg-white text-gray-900 placeholder:text-gray-400"
                  required
                />
                <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-300" size={20} />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold text-xl py-5 rounded-2xl shadow-xl shadow-purple-200 flex items-center justify-center gap-3 hover:shadow-purple-300 hover:scale-[1.01] transition-all duration-300"
              >
                {isSubmitting ? "Sending Your Track..." : "Send My Track"}
                <ArrowRight size={22} />
              </button>
            </form>

            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Lock size={12} /> Privacy Protected • No Spam • Instant Access
              </div>
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                ].map((url, i) => (
                  <img key={i} src={url} className="w-8 h-8 rounded-full border-2 border-white object-cover" alt={`User ${i}`} />
                ))}
                <span className="pl-4 text-xs text-gray-500 font-bold self-center">
                  Joined by 10,000+ Seekers
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center text-gray-500 text-sm italic max-w-xl mx-auto"
        >
          "I didn't believe in any of this. But after a psychologist explained the subconscious mechanism behind it, I gave it a try. Three weeks later I genuinely feel different. Calmer. More clear." <strong>Shreya M., Delhi</strong>
        </motion.div>
      </div>
    </div>
  );
};

export default SqueezePage;
