import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useSpring,
  useMotionValue,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  PlayCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Star,
  ChevronDown,
  Check,
  X,
  ShoppingBag,
  Music,
  Heart,
  TrendingUp,
  Award,
  Brain,
  Clock,
  Gift,
  Lock,
  FlaskConical,
  Activity,
  Moon,
  Sun,
  UserCheck,
  UserX,
  Headphones,
  Timer,
  Plus,
} from "lucide-react";
import SharedCountdown from "../components/SharedCountdown";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Audio Preview Component
const AudioPreview = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-28 right-8 z-[90] md:bottom-32">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        className="relative"
      >
        <button
          onClick={togglePlay}
          className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-purple-100 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          {isPlaying ? (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-purple-600"
            >
              <Activity size={32} />
            </motion.div>
          ) : (
            <PlayCircle
              size={32}
              className="text-purple-600 group-hover:scale-110 transition-transform"
            />
          )}
        </button>
        {/* <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder audio
          onEnded={() => setIsPlaying(false)}
        /> */}
        <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg animate-bounce">
          PREVIEW
        </div>
      </motion.div>
    </div>
  );
};

// Using SharedCountdown (persists a single deadline in localStorage)

// Vertical Lines Background Component
const VerticalLinesBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
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

// Sticky Purchase Bar Component
const StickyPurchaseBar = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-xl border-t border-purple-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        >
          <div className="container-custom max-w-6xl px-3 py-2 md:px-4 md:py-2.5">
            {/* Mobile Layout */}
            <div className="flex md:hidden items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shrink-0">
                  <img
                    src="/party-mixtape.png"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 leading-tight text-xs truncate">
                    Party Mixtape
                  </p>
                  <p className="text-lg font-black gradient-text-gold leading-none">
                    ₹1,999
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    "https://riagupta.com/product/party-mixtape/",
                    "_blank",
                  )
                }
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-black px-4 py-2.5 rounded-xl shadow-xl shadow-purple-100 flex items-center gap-1.5 whitespace-nowrap text-xs shrink-0"
              >
                BUY NOW <ArrowRight size={14} />
              </motion.button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="/party-mixtape.png"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-tight text-sm">
                    The Party Mixtape
                  </p>
                  <p className="text-[10px] gradient-text-gold font-bold uppercase tracking-widest">
                    Flagship Offer
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-6">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1 text-right">
                    OFFER ENDS IN
                  </p>
                  <SharedCountdown />
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter line-through">
                    ₹4,999
                  </p>
                  <p className="text-xl font-black gradient-text-gold">
                    ₹1,999
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://riagupta.com/product/party-mixtape/",
                      "_blank",
                    )
                  }
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-black px-5 py-2.5 rounded-2xl shadow-xl shadow-purple-100 flex items-center gap-2 whitespace-nowrap text-sm"
                >
                  SECURE ACCESS <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Purchase Notification Component
const PurchaseNotification = () => {
  const [notification, setNotification] = useState(null);
  const notifications = [
    {
      name: "Rahul S.",
      location: "Mumbai",
      tape: "Party Mixtape",
      time: "42 seconds ago",
    },
    {
      name: "Ananya K.",
      location: "Bangalore",
      tape: "Party Reset Bundle",
      time: "2 minutes ago",
    },
    {
      name: "Vikram R.",
      location: "Delhi",
      tape: "Party Mixtape",
      time: "15 seconds ago",
    },
    {
      name: "Sarah J.",
      location: "London",
      tape: "Social Magnet Protocol",
      time: "1 minute ago",
    },
    {
      name: "Priya M.",
      location: "Dubai",
      tape: "Party Mixtape",
      time: "5 minutes ago",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        notifications[Math.floor(Math.random() * notifications.length)];
      setNotification(random);
      setTimeout(() => setNotification(null), 5000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50, scale: 0.9 }}
      animate={
        notification
          ? { opacity: 1, x: 20, scale: 1 }
          : { opacity: 0, x: -50, scale: 0.9 }
      }
      className="fixed bottom-8 left-0 z-50 pointer-events-none"
    >
      {notification && (
        <div className="bg-white/80 backdrop-blur-xl border border-purple-100 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm pointer-events-auto">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shrink-0">
            {notification.name[0]}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">
              {notification.name}{" "}
              <span className="font-normal text-gray-500">
                from {notification.location}
              </span>
            </p>
            <p className="text-xs text-purple-600 font-medium">
              Bought {notification.tape}
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              {notification.time}
            </p>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="ml-2 text-gray-400 hover:text-gray-600 shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </motion.div>
  );
};

// Exit Intent Popup Component
const ExitPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-12 text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <Gift className="w-10 h-10 text-purple-600 animate-bounce" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Wait! Don't Go <br />
              <span className="italic text-purple-600">Empty Handed.</span>
            </h2>

            <p className="text-gray-500 mb-10 text-lg font-light leading-relaxed">
              I have a special gift for you—a 10-minute{" "}
              <strong>Manifestation Track</strong> to help you shift your mood
              instantly.
            </p>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onClose();
                  navigate("/free-gift");
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-6 rounded-full shadow-xl shadow-purple-200 flex items-center justify-center gap-3 text-xl tracking-widest"
              >
                CLAIM MY FREE GIFT <Sparkles size={20} />
              </motion.button>

              <button
                onClick={onClose}
                className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors"
              >
                No thanks, I'll pass on the free track
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// 3-Step Journey Component
const JourneySection = () => {
  const steps = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Press Play",
      description:
        "No complicated rituals needed. Just put on your headphones before heading to the party and let the manifestation music work.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Amplify Your Vibe",
      description:
        "Our proprietary manifestation music works during the event, amplifying your confidence, charisma, and magnetic presence in real-time.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Command the Room",
      description:
        "Watch as people are naturally drawn to you. Feel the shift in conversations, connections, and the energy you radiate throughout the night.",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 bg-gray-50/50">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900 italic">
            Social <span className="text-purple-600">Magnetism</span> Made Easy
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Three simple steps to go from nervous to commanding the room.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] border border-purple-50 shadow-sm relative group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center font-serif font-bold text-xl text-purple-600 border border-purple-50">
                0{i + 1}
              </div>
              <div
                className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Qualification Section Component
const QualificationSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-white overflow-hidden">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
            Is Wishtune{" "}
            <span className="italic text-purple-600">Right For You?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* This is for you if... */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-50/50 p-10 md:p-12 rounded-[3rem] border border-green-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <UserCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                This is for you if...
              </h3>
            </div>
            <ul className="space-y-6">
              {[
                "You find traditional meditation difficult, boring, or impossible to stick to.",
                "You're tired of 'trying' to manifest without seeing real-world results.",
                "You have a busy life and need a success ritual that takes ZERO extra time.",
                "You want to clear mental blocks like anxiety, lack, or self-doubt effortlessly.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check size={20} className="text-green-500 shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* This is NOT for you if... */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50/50 p-10 md:p-12 rounded-[3rem] border border-red-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <UserX size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                This is NOT for you if...
              </h3>
            </div>
            <ul className="space-y-6">
              {[
                "You're looking for an overnight miracle without the patience for a 21-day shift.",
                "You prefer complex rituals, expensive seminars, and long spiritual practices.",
                "You are unwilling to wear headphones at parties or during social venues.",
                "You aren't ready to let go of the old versions of yourself that are holding you back.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <X size={20} className="text-red-400 shrink-0 mt-1" />
                  <span className="text-gray-600 font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Comparison Section Component
const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Audio Quality",
      wishtune: "Lossless Alchemy",
      youtube: "Compressed MP3/AAC",
    },
    {
      feature: "Binaural Beats",
      wishtune: "Phase-Synced Engineering",
      youtube: "Unstable Phase Shifts",
    },
    {
      feature: "Manifestation Music Layering",
      wishtune: "Premium Manifestation Music",
      youtube: "Basic Background Text",
    },
    {
      feature: "Ad Interruptions",
      wishtune: "100% Ad-Free Forever",
      youtube: "Frequent Distractions",
    },
    {
      feature: "Party Mode",
      wishtune: "Optimized for High-Energy Venues",
      youtube: "Battery Drain in Venue Settings",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 bg-white relative overflow-hidden">
      <div className="container-custom max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900 italic">
            The Wishtune{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Why free YouTube tracks might actually be holding you back.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-purple-100 shadow-xl bg-white">
          <div className="grid grid-cols-3 bg-purple-50 border-b border-purple-100 py-6 px-6 md:px-12 font-bold text-gray-900">
            <div>Feature</div>
            <div className="text-purple-600 text-center">Wishtune</div>
            <div className="text-gray-400 text-center">YouTube</div>
          </div>
          {comparisons.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-3 py-6 px-6 md:px-12 border-b border-purple-50 hover:bg-purple-50/30 transition-colors"
            >
              <div className="font-medium text-gray-700">{item.feature}</div>
              <div className="text-center text-gray-900 flex items-center justify-center gap-2">
                <Check size={16} className="text-green-500 shrink-0" />
                <span className="hidden md:inline">{item.wishtune}</span>
              </div>
              <div className="text-center text-gray-400 flex items-center justify-center gap-2">
                <X size={16} className="text-red-400 shrink-0" />
                <span className="hidden md:inline">{item.youtube}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-gray-400 text-sm">
          *Based on neuro-acoustic research conducted on standard streaming
          platforms.
        </div>
      </div>
    </section>
  );
};

// Party Background Animation Component
const PartyBackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating party orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          className={`absolute rounded-full blur-3xl w-32 h-32 ${
            i % 3 === 0
              ? "bg-brand-gold/20"
              : i % 3 === 1
                ? "bg-purple-400/15"
                : "bg-pink-400/15"
          }`}
        />
      ))}

      {/* Animated confetti-like dots */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          className={`absolute rounded-full w-2 h-2 ${
            i % 2 === 0 ? "bg-brand-gold" : "bg-purple-500"
          }`}
        />
      ))}

      {/* Pulsing center light */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Wave Background Component
const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
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
          <linearGradient id="wave-grad-home" x1="0%" y1="0%" x2="100%" y2="0%">
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
            stroke="url(#wave-grad-home)"
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

// About Founder Section Component
const AboutFounderSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-white border-t border-purple-50">
      <div className="container-custom max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-last md:order-first"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-[2.5rem] blur-2xl opacity-60" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-purple-100 shadow-2xl">
              <img
                src="/images/founder.jpeg"
                alt="Ria Gupta, Founder of Wishtune"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-left"
          >
            <div>
              <span className="text-purple-600 uppercase tracking-[0.2em] text-sm font-bold mb-4 block">
                The Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6 text-gray-900 font-bold">
                Manifestation shouldn't <br />
                <span className="italic text-gray-400">feel like a chore.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-500 font-light leading-relaxed">
              <p>
                "I built Wishtune to blend real music with belief-focused audio
                design. Most people fail at manifestation because it requires
                too much conscious effort.
              </p>
              <p>
                Wishtune bypasses the resistance by using the music you already
                love to listen to."
              </p>
            </div>

            <div className="pt-4 border-l-4 border-purple-200 pl-6">
              <a
                href="https://riagupta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-2xl font-serif font-bold mb-1 block hover:text-purple-600 transition-colors"
              >
                Ria Gupta
              </a>
              <p className="text-purple-600 italic font-medium">
                &mdash; Founder, Wishtune
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Bonus Stack Component
const BonusStack = () => {
  const bonuses = [
    {
      title: "Manifestation Roadmap",
      value: "₹999",
      description: "A PDF guide to help you set and achieve your 21-day goals.",
      icon: <Gift size={18} />,
    },
    {
      title: "Morning Mood Shift",
      value: "₹1,499",
      description: "A 10-minute booster track for high-energy mornings.",
      icon: <Zap size={18} />,
    },
    {
      title: "Lifetime Updates",
      value: "Priceless",
      description: "Never pay for newer versions or audio improvements.",
      icon: <Sparkles size={18} />,
    },
  ];

  return (
    <div className="mt-10 space-y-4">
      <p className="text-xs font-black text-purple-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
        <Plus size={14} /> Included Free Bonuses
      </p>
      {bonuses.map((bonus, i) => (
        <div
          key={i}
          className="flex items-start gap-4 p-4 rounded-2xl bg-purple-50/50 border border-purple-100/50"
        >
          <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 shrink-0">
            {bonus.icon}
          </div>
          <div>
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-bold text-gray-900 text-sm">{bonus.title}</h4>
              <span className="text-[10px] font-black text-green-600 uppercase bg-green-100 px-2 py-0.5 rounded-full">
                FREE
              </span>
            </div>
            <p className="text-xs text-gray-500 font-light mt-1">
              {bonus.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const heroRef = useRef(null);
  const [email, setEmail] = useState("");
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show after 800px scroll, but hide when reaching the footer (last 600px of the page)
      if (scrollY > 800 && scrollY + windowHeight < documentHeight - 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent the popup from showing twice in the same session
    const isShown = sessionStorage.getItem("exitPopupShown");
    if (isShown) return;

    const handleMouseLeave = (e) => {
      // clientY < 25 detects mouse moving towards the tabs/address bar more reliably
      if (e.clientY < 25) {
        setShowExitPopup(true);
        sessionStorage.setItem("exitPopupShown", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    // 2s delay to allow page initialization
    const activationTimer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 2000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(activationTimer);
    };
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: "party",
      title: "Party Mixtape",
      subtitle: "Groovy Music • Move + Mindset Shift",
      description:
        "Party while you manifest. The Manifestation Mixtape is a 30-minute, high-energy audio experience designed to lift your mood and reinforce positive beliefs while you’re on the move.",
      fullDetail: `On the surface, it’s fun, upbeat music you’ll want to play again and again.
Beneath the beats, the manifestation music is designed to lift your mood—no need to focus or follow a routine.

Dance, drive, clean your room, or work out—this mixtape fits into real life.

Track Duration: 30 minutes

What it sounds like:
Upbeat pop and dance tracks. Groovy, energetic, and motivating.

Perfect for:
Parties, workouts, dancing at home, long drives, chores, or anytime you need a boost.

Best for:
Anyone who wants mindset work to feel fun, effortless, and uplifting.

How to use:
Press play and go about your day. Headphones optional.
The more regularly you listen, the stronger the shift.`,
      duration: "30 minutes",
      sound: "Upbeat pop and dance tracks. Groovy, energetic, and motivating.",
      perfectFor:
        "Parties, workouts, dancing at home, long drives, chores, or anytime you need a boost.",
      bestFor:
        "Anyone who wants mindset work to feel fun, effortless, and uplifting.",
      usage:
        "Press play and go about your day. Headphones optional. The more regularly you listen, the stronger the shift.",
      price: 1999,
      formattedPrice: "₹1,999.00",
      img: "/party-mixtape.png",
      color: "bg-brand-dark",
      shopUrl: "https://riagupta.com/product/party-mixtape/",
    },
  ];

  const testimonials = [
    {
      text: "I used the Party Mixtape before a big night and felt magnetic — people kept approaching me. Best night out in years.",
      name: "Sanya P.",
      location: "New Delhi",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "I was skeptical. Two days later, a client I hadn't heard from in months reached out and paid in full. No coincidence in my book.",
      name: "Leah M.",
      location: "Vancouver",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "Within a week of listening, I got a job offer with better pay and 100% remote work. This is exactly what I envisioned.",
      name: "Melanie T.",
      location: "Toronto",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/free-gift";
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 desktop-zoom-80">
      <StickyPurchaseBar isVisible={showStickyBar} />
      <AudioPreview />
      <PurchaseNotification />
      <ExitPopup
        isOpen={showExitPopup}
        onClose={() => setShowExitPopup(false)}
      />

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] lg:min-h-[125vh] flex items-center justify-center px-2 md:px-4 pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden bg-gradient-to-b from-purple-100/40 via-brand-plum/20 to-amber-50/30"
      >
        {/* subtle top light to keep logo visible */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-white/30 to-transparent pointer-events-none z-0" />
        <PartyBackgroundElements />
        <VerticalLinesBackground />
        <WaveBackground />
        <div className="absolute right-20 top-10 w-72 h-72 rounded-full bg-gradient-to-br from-brand-gold/40 to-pink-500/20 blur-3xl opacity-70 pointer-events-none animate-pulse" />
        <div className="container-custom max-w-2xl mx-auto text-center relative z-10 bg-white/70 rounded-3xl shadow-xl px-6 py-12 md:py-16 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm border border-white/10 rounded-full px-5 py-1 mb-6 text-xs md:text-sm font-medium text-purple-700 tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Psychologist-Designed • Groovy Music</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4 tracking-tight text-gray-900"
          >
            Party while you manifest.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl font-serif font-bold mb-8 tracking-tight gradient-text-gold"
          >
            Party Mixtape
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-gray-900 font-medium mb-8 max-w-xl leading-relaxed"
          >
            The Party Mixtape is a 30-minute, high-energy audio experience to
            lift your mood and reinforce positive beliefs—no routine needed.
          </motion.p>
          <ul className="text-base md:text-lg text-gray-700 font-normal mb-8 max-w-xl leading-relaxed list-disc list-inside space-y-2">
            <li>Fun, upbeat music you’ll want to play again and again</li>
            <li>
              Manifestation music designed to fit real life—dance, drive, or
              work out
            </li>
            <li>Just press play and feel the shift</li>
          </ul>
          <div className="font-bold text-lg md:text-xl text-gray-900 mb-10">
            Track Duration: 30 minutes
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("products")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary text-lg md:text-xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <PlayCircle size={22} className="animate-pulse" />
              Start Your 21-Day Party Shift
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM BREAKDOWN */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-gray-900 leading-tight italic">
            "Tired of manifestation feeling like homework?"
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 mb-12 font-light leading-relaxed">
            Most people quit because it's another task on their to-do list.{" "}
            <br />
            <span className="text-purple-600 font-bold">
              WishTune works while you live your life.
            </span>
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-px bg-purple-100" />
          </div>
        </div>
      </section>

      {/* 3-STEP JOURNEY */}
      <JourneySection />

      {/* COMPARISON SECTION */}
      <ComparisonSection />

      {/* SINGLE PRODUCT SHOWCASE */}
      <section
        id="products"
        className="py-24 md:py-32 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="container-custom max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-1/2 flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/5] w-full mb-6">
              <img
                src="/party-mixtape.png"
                alt="The Party Mixtape"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-black shadow-xl tracking-widest">
                FLAGSHIP OFFER
              </div>
            </div>
            
            {/* Feature Points Below Image */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-purple-100">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Instant Energy Boost</p>
                  <p className="text-xs text-gray-500">Gamma waves for social confidence</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-purple-100">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center shrink-0">
                  <Timer className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">20-Minute Pre-Game</p>
                  <p className="text-xs text-gray-500">Listen before any social event</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-purple-100">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Magnetic Aura Activation</p>
                  <p className="text-xs text-gray-500">Command attention naturally</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 bg-white/80 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-600 mb-2">
                Manifestation Music
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
                The <span className="italic">Party</span> Mixtape
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              The Party Tape is a 30-minute high-energy mix designed for social
              settings and high-vibe moments. It's engineered to boost
              confidence, charisma and magnetic presence while you enjoy the
              night.
            </p>
            <ul className="mb-8 border-l-4 border-purple-200 pl-6 space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-500">✔</span> Upbeat pop and
                dance tracks. Groovy, energetic, and motivating.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-500">✔</span> Parties,
                workouts, dancing at home, long drives, chores, or anytime you
                need a boost.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-500">✔</span> Anyone who wants
                mindset work to feel fun, effortless, and uplifting.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-500">✔</span> Press play and
                go about your day. Headphones optional. The more regularly you
                listen, the stronger the shift.
              </li>
            </ul>
            <div className="flex items-end gap-4 mb-8">
              <div>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest line-through">
                  ₹4,999
                </p>
                <p className="text-5xl md:text-6xl font-bold gradient-text-gold">
                  ₹1,999
                </p>
              </div>
              <div className="bg-brand-gold/20 text-brand-dark px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-widest mb-2">
                LIMITED DROP
              </div>
            </div>
            <button
              onClick={() =>
                window.open(
                  "https://riagupta.com/product/party-mixtape/",
                  "_blank",
                )
              }
              className="w-full btn-primary text-brand-dark text-xl py-5 rounded-full shadow-lg flex items-center justify-center gap-4 group mb-2 hover:scale-105 transition-transform"
            >
              YES! SECURE MY MIXTAPE{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="text-center text-gray-400 text-xs font-medium uppercase tracking-[0.2em] mt-2">
              Instant Digital Delivery • One-Time Payment
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATION SECTION */}
      <QualificationSection />

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-4 bg-white border-y border-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
              Real People, <span className="italic">Real Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-purple-50/50 p-10 rounded-[2.5rem] relative"
              >
                <Sparkles
                  className="absolute top-8 right-8 text-purple-200"
                  size={32}
                />
                <p className="text-gray-700 italic text-lg leading-relaxed mb-8 font-light">
                  "{test.text}"
                </p>
                <div className="flex items-center gap-5">
                  <img
                    src={test.img}
                    className="w-14 h-14 rounded-full border-2 border-purple-200 shadow-md"
                    alt={test.name}
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {test.name}
                    </p>
                    <p className="text-xs uppercase text-purple-600 font-bold tracking-widest">
                      {test.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center text-gray-900 italic">
            Questions? We Have <span className="text-purple-600">Answers</span>
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Will I hear the manifestation music?",
                a: "No, the manifestation music is blended with the tracks. You'll just hear high-vibe, premium music.",
              },
              {
                q: "How long before I see results?",
                a: "Most users report a shift in their mood and 'lucky' synchronicities within the first 3-7 days. For deep rewiring, we recommend consistent use for 21 days.",
              },
              {
                q: "Is this scientifically proven?",
                a: "Our music uses manifestation music layering to help you feel your best. The process is designed to make manifestation effortless and enjoyable.",
              },
              {
                q: "What if it doesn't work for me?",
                a: "We offer a 21-Day Money Back Guarantee. If you listen consistently for 21 days and don't feel a shift, contact us for a full refund. No questions asked.",
              },
              {
                q: "Can I use while doing other things?",
                a: "Yes! That's the beauty of WishTune. You can manifest at parties, pre-gaming, in the club, during events, or before social gatherings. It's magnetism on autopilot.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.q}
                </h4>
                <p className="text-gray-500 leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT FOUNDER */}
      <AboutFounderSection />

      {/* FINAL CTA */}
      <section className="py-24 md:py-40 px-4 bg-gradient-to-t from-purple-50 to-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-purple-100 opacity-50" />
        <div className="container-custom max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif font-bold mb-10 text-gray-900 tracking-tight leading-[1]">
            Ready to <br />
            <span className="gradient-text-gold italic">
              Manifest Effortlessly?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 mb-16 max-w-2xl mx-auto font-light">
            Join 10,000+ people transforming their lives. Stop trying and start
            shifting today.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-4 btn-primary text-brand-dark py-6 px-12 rounded-full transition-all duration-500 hover:scale-105 text-2xl group"
          >
            Get The Party Mixtape
            <ArrowRight
              size={28}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
