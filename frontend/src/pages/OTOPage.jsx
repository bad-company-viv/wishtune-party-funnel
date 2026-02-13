import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Clock,
  ShieldCheck,
  Play,
  Lock,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const OTOPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Top Banner: Urgency */}
      <div className="bg-brand-plum text-center py-3 text-sm font-bold tracking-widest uppercase sticky top-0 z-50">
        <span className="animate-pulse">⚠️ Wait! Do not close this page.</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="w-full bg-white/10 h-2 rounded-full mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 bg-green-500 w-[80%] rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-green-400">SUCCESS!</span> Your free song is
            on its way...
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Check your inbox in 5 minutes. But while you wait, I have a special
            one-time offer to accelerate your results.
          </p>
        </div>

        {/* The Offer Box */}
        <div className="bg-white/5 border border-brand-gold/30 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden ring-1 ring-brand-gold/20">
          {/* Timer Badge */}
          <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark font-bold px-6 py-2 rounded-bl-xl text-lg flex items-center gap-2">
            <Clock size={20} />
            Offer Expires: {formatTime(timeLeft)}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl shadow-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
                <div className="z-10 text-center p-6">
                  <h3 className="text-3xl font-serif font-bold mb-2">
                    Shower
                    <br />
                    Mixtape
                  </h3>
                  <p className="text-white/70 text-sm tracking-widest uppercase">
                    Water Manifestation Series
                  </p>
                </div>
                {/* Play Button Mock */}
                <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors cursor-pointer">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Sales Copy */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-4">
                Turn Your Major Routine into a{" "}
                <span className="text-brand-gold">Ritual</span>
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Water amplifies manifestation. The{" "}
                <strong>Shower Mixtape</strong> uses specific 528Hz frequencies
                to clear production blocks and align your energy—all while you
                scrub.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Boost confidence before you start the day",
                  "Wash away anxiety & negative energy",
                  "High-energy beats (No sleepy meditation)",
                  "Instant Digital Download",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm md:text-base"
                  >
                    <span className="bg-green-500/20 text-green-400 p-1 rounded mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-bold text-brand-gold">₹999</span>
                <span className="text-xl text-white/30 line-through mb-1">
                  ₹1,999
                </span>
                <span className="text-xs bg-brand-gold/20 text-brand-gold px-2 py-1 rounded mb-2">
                  50% OFF
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-brand-gold hover:bg-white text-brand-dark font-bold text-xl py-4 rounded-xl shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all transform hover:-translate-y-1 mb-4 flex items-center justify-center gap-2"
              >
                Yes! Add to Order <ArrowRight size={20} />
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-white/30">
                <span className="flex items-center gap-1">
                  <Lock size={10} /> Secure SSL
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={10} /> 30-Day Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* No Thanks Link */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/shop")}
            className="text-white/30 hover:text-white text-sm border-b border-white/10 hover:border-white transition-colors pb-1"
          >
            No thanks, I don't want to accelerate my results. I'll stick with
            the free song.
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTOPage;
