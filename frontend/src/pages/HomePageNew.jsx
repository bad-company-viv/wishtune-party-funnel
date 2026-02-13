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
          className="fixed bottom-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-t border-purple-100 p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:p-4"
        >
          <div className="container-custom max-w-6xl flex items-center justify-between gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/products/party.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-tight">
                  The Party Mixtape
                </p>
                <p className="text-xs gradient-text-gold font-bold uppercase tracking-widest">
                  Flagship Offer
                </p>
              </div>
            </div>

            <div className="flex-1 md:flex-none flex items-center justify-between md:justify-end gap-6 md:gap-10">
              <div className="hidden sm:block">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1 text-center md:text-right">
                  OFFER ENDS IN
                </p>
                <SharedCountdown />
              </div>
              <div className="text-left md:text-right">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter line-through">
                  ₹4,999
                </p>
                <p className="text-xl md:text-2xl font-black gradient-text-gold">
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
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-black px-6 md:px-7 py-3 md:py-3.5 rounded-2xl shadow-xl shadow-purple-100 flex items-center gap-2 whitespace-nowrap text-sm md:text-base"
              >
                SECURE ACCESS <ArrowRight size={18} />
              </motion.button>
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
        "No complicated rituals needed. Just put on your headphones before heading to the party and let the energy build.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Amplify Your Vibe",
      description:
        "Our proprietary 432Hz audio engineering works during the event, amplifying your confidence, charisma, and magnetic presence in real-time.",
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
                "You want to clear subconscious blocks like anxiety, lack, or self-doubt effortlessly.",
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
      wishtune: "Lossless 432Hz Alchemy",
      youtube: "Compressed MP3/AAC",
    },
    {
      feature: "Binaural Beats",
      wishtune: "Phase-Synced Engineering",
      youtube: "Unstable Phase Shifts",
    },
    {
      feature: "Subconscious Layering",
      wishtune: "Patent-Pending Affirmations",
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
            Why free YouTube frequencies might actually be holding you back.
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
      subtitle: "High-Energy • Social Magnetism Booster",
      description:
        "Turn any moment into a manifestation opportunity—dance, socialize, and attract.",
      fullDetail: `The Party Tape is a 45-minute high-energy mix designed for social settings and high-vibe moments.

On the surface, it’s modern, upbeat music you’ll love.
Underneath, we've layered subtle affirmation engineering so your mood and magnetic presence amplify while you enjoy the night.`,
      duration: "45 minutes",
      sound:
        "Upbeat, club-ready mixes with bass-forward production and vocal layering.",
      perfectFor:
        "Parties, gatherings, nightlife, pre-event rituals, or dancing.",
      bestFor:
        "Anyone wanting more confidence, charisma, and social magnetism.",
      usage:
        "Play while out, pre-gaming, or during social events. Headphones optional.",
      price: 1999,
      formattedPrice: "₹1,999",
      img: "/products/party.png",
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
    <div className="min-h-screen bg-white text-gray-900">
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
        className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-gradient-to-b from-purple-100/40 via-brand-plum/20 to-amber-50/30"
      >
        {/* subtle top light to keep logo visible */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-white/30 to-transparent pointer-events-none z-0" />
        <PartyBackgroundElements />
        <VerticalLinesBackground />
        <WaveBackground />
        <div className="absolute right-20 top-10 w-72 h-72 rounded-full bg-gradient-to-br from-brand-gold/40 to-pink-500/20 blur-3xl opacity-70 pointer-events-none animate-pulse" />
        <img
          src="/images/ria-party.jpg"
          alt="Ria Gupta - Party"
          className="absolute right-6 lg:right-16 top-36 lg:top-48 w-72 md:w-64 lg:w-72 h-auto rounded-2xl object-cover shadow-lg hidden md:block pointer-events-none z-0 md:translate-x-4 lg:translate-x-8"
        />
        <div className="container-custom max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/5 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-semibold text-purple-700 uppercase tracking-widest">
              Psychologist-Designed • Music-Powered
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] mb-8 md:mb-10 tracking-tight"
          >
            Rewire While <br />
            <span className="gradient-text-gold italic">You Party.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-900 font-semibold mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Bypass your conscious resistance with the Party Mixtape. No effort.
            No rituals. Just press play, dance, and amplify your magnetism.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mb-10"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("products")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
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
        className="py-24 md:py-40 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="container-custom max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-purple-200 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
              <div className="relative rounded-[3rem] overflow-hidden border border-purple-100 shadow-2xl bg-white aspect-[4/5]">
                <img
                  src="/products/party.png"
                  alt="The Party Mixtape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 right-8 bg-purple-600 text-white px-6 py-2 rounded-full text-xs font-black shadow-xl tracking-widest">
                  FLAGSHIP OFFER
                </div>
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-purple-50 flex items-center gap-4 max-w-[240px]">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">
                    100% Secure & Guaranteed
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                    Lifetime Access Included
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <div className="flex items-center gap-3 text-purple-600 font-black text-sm uppercase tracking-[0.3em] mb-4">
                  <Zap size={16} /> 432Hz Audio Alchemy
                </div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
                    The <span className="italic">Party</span> <br />
                    Mixtape
                  </h2>
                  <div className="hidden md:block scale-75 origin-right">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2 text-right">
                      EXPIRES SOON
                    </p>
                    <SharedCountdown />
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-500 font-light leading-relaxed">
                The Party Tape is a 45-minute high-energy mix designed for
                social settings and high-vibe moments. It's engineered to boost
                confidence, charisma and magnetic presence while you enjoy the
                night.
              </p>

              <div className="space-y-6">
                {[
                  "45-Minute Professional Club-Grade Mixing",
                  "Gamma & High-Beta Energy Layers (Social Focus)",
                  "Charisma & Confidence Affirmations",
                  "Lossless Quality • Bass-Forward Production",
                  "Mobile & Venue-Optimized Listening",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-gray-700"
                  >
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} className="text-purple-600" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-purple-100">
                <div className="flex items-end gap-4 mb-8">
                  <div>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-widest line-through">
                      ₹4,999
                    </p>
                    <p className="text-6xl font-bold gradient-text-gold">
                      ₹1,999
                    </p>
                  </div>
                  <div className="bg-brand-gold/20 text-brand-dark px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-widest mb-2">
                    LIMITED DROP
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open(
                        "https://riagupta.com/product/party-mixtape/",
                        "_blank",
                      )
                    }
                    className="w-full btn-primary text-brand-dark text-2xl py-6 rounded-[2rem] shadow-glow-lg border border-brand-gold/20 flex items-center justify-center gap-4 group"
                  >
                    YES! SECURE MY MIXTAPE{" "}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                  <p className="text-center text-gray-400 text-xs font-medium uppercase tracking-[0.2em]">
                    Instant Digital Delivery • One-Time Payment
                  </p>
                </div>

                <BonusStack />
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 grayscale opacity-40">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
              alt="Stripe"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6"
            />
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-1">
              <Lock size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Secure SSL
              </span>
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
                q: "Will I hear the affirmations?",
                a: "No, the affirmations are layered beneath the music using patent-pending frequency modulation. They bypass your conscious 'logical' mind and go straight to your subconscious. You'll just hear high-vibe, premium music.",
              },
              {
                q: "How long before I see results?",
                a: "Most users report a shift in their mood and 'lucky' synchronicities within the first 3-7 days. For deep rewiring, we recommend consistent use for 21 days.",
              },
              {
                q: "Is this scientifically proven?",
                a: "Our music uses neuro-acoustic principles like binaural beats and isochronic tones to move your brain into Alpha and Theta states—the states most receptive to new information and manifestation.",
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
            Join 1,607+ people transforming their lives. Stop trying and start
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
