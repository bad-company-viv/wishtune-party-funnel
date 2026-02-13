import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  Star,
  Zap,
  ShoppingBag,
  X,
  Gift,
  Sparkles,
  TrendingUp,
  AlertCircle,
  Heart,
  Lock,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SharedCountdown from "../components/SharedCountdown";

const OTOPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  // Timer is rendered with SharedCountdown so it stays in sync across pages.

  const handleAcceptOffer = () => {
    window.open("https://riagupta.com/shop", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/30 to-amber-50 text-gray-900 overflow-x-hidden">
      {/* 1. URGENT BANNER */}
      <div className="bg-red-600/90 text-white py-3 px-4 text-center sticky top-0 z-50 backdrop-blur-md">
        <p className="text-sm md:text-base font-black tracking-tighter animate-pulse">
          🚨 DO NOT CLOSE THIS PAGE. YOUR ONE-TIME 60% DISCOUNT EXPIRES IN:{" "}
          <span className="inline-block align-middle">
            <SharedCountdown />
          </span>
        </p>
      </div>

      <div className="container-custom py-12 md:py-20 relative">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-plum/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-brand-gold text-brand-dark px-4 py-1 rounded-full text-sm font-black mb-6">
              YOUR DOWNLOAD IS SECURED!
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              One Frequency is <br />
              <span className="italic">Not Enough.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed italic">
              "The Party Mixtape amps your social magnetism... but what happens
              after the night ends? The Full Bundle ensures you stay radiant and
              connected 24/7."
            </p>
          </motion.div>

          {/* The Comparison (Free vs OTO Bundle) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-0 border border-amber-200/40 rounded-4xl overflow-hidden mb-16 shadow-lg bg-white"
          >
            <div className="bg-gray-50 p-8 text-left border-b md:border-b-0 md:border-r border-amber-200/40">
              <h3 className="text-xl font-bold mb-6 text-gray-500 uppercase tracking-widest">
                Your Free Gift
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-gray-600">
                  <Check size={18} />{" "}
                  <span>1x Morning Manifestation Track</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <X size={18} className="text-red-400" />{" "}
                  <span>No Overnight Deep-Sleep Reprogramming</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <X size={18} className="text-red-400" />{" "}
                  <span>No Social Magnetism Frequencies</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <X size={18} className="text-red-400" />{" "}
                  <span>No Community Access</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-plum/10 to-brand-gold/10 p-8 text-left relative border border-amber-200/40">
              <div className="absolute top-4 right-4 animate-bounce">
                <Gift className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-6 text-brand-gold uppercase tracking-widest">
                Infinite Reality Bundle
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-gray-900">
                  <Check size={18} className="text-brand-gold" />{" "}
                  <span>Full Access: Sleep, Shower & Party Tracks</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900">
                  <Check size={18} className="text-brand-gold" />{" "}
                  <span>Bonus: Personalized Manifestation Map</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900">
                  <Check size={18} className="text-brand-gold" />{" "}
                  <span>The "Theta-State" Listening Protocol</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900">
                  <Check size={18} className="text-brand-gold" />{" "}
                  <span>FREE Lifetime Updates (₹2,999 Value)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* The Pricing & Decison */}
          <div className="mb-20 flex flex-col items-center">
            <div className="flex items-center gap-8 mb-10">
              <div className="text-left relative">
                <p className="text-gray-400 text-sm md:text-base font-medium absolute -top-5 left-1 whitespace-nowrap">
                  <span className="line-through">₹9,496</span> Regular Price
                </p>
                <p className="text-6xl md:text-8xl font-bold tracking-tight text-[#DCC49E]">
                  ₹3,999
                </p>
              </div>
              <div className="bg-[#DCC49E]/30 text-gray-900 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex flex-col items-center justify-center border border-[#DCC49E]/50">
                <p className="text-2xl md:text-3xl font-black leading-none">
                  60%
                </p>
                <p className="text-[10px] uppercase font-black tracking-widest mt-1">
                  Savings
                </p>
              </div>
            </div>

            <div className="w-full max-w-2xl space-y-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAcceptOffer}
                className="w-full bg-[#DCC49E] text-gray-900 font-black text-2xl md:text-3xl py-8 rounded-[2.5rem] shadow-xl shadow-[#DCC49E]/20 flex items-center justify-center gap-4 hover:bg-[#cfb48d] transition-colors"
              >
                <Zap className="w-8 h-8 fill-gray-900" />
                YES! Upgrade My Order Now
              </motion.button>

              <button
                onClick={() => navigate("/thank-you")}
                className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium tracking-tight"
              >
                No thanks, I'll stick to just the one track and pay full price
                later.
              </button>
            </div>
          </div>

          {/* Why Now? (Scarcity) */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="card-premium bg-white border border-amber-200/40">
              <Clock className="text-brand-gold mb-4" />
              <h4 className="font-bold mb-2 text-gray-900">
                Once-In-A-Lifetime
              </h4>
              <p className="text-sm text-gray-600">
                This price only exists on this page, right now. If you leave,
                you pay ₹9,496 tomorrow.
              </p>
            </div>
            <div className="card-premium bg-white border border-amber-200/40">
              <ShieldCheck className="text-brand-gold mb-4" />
              <h4 className="font-bold mb-2 text-gray-900">Infinite Access</h4>
              <p className="text-sm text-gray-600">
                One payment, lifetime results. Every new track we release is
                added to your account for free.
              </p>
            </div>
            <div className="card-premium bg-white border border-amber-200/40">
              <Star className="text-brand-gold mb-4" />
              <h4 className="font-bold mb-2 text-gray-900">Result Focused</h4>
              <p className="text-sm text-gray-600">
                Join 10,000+ others who stopped playing small and started the
                "Full Immersion" protocol.
              </p>
            </div>
          </div>

          {/* Final Trust Signal */}
          <div className="mt-20 flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
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
                  className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-lg"
                  alt={`User ${i} `}
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Join 8,492 people who upgraded to the bundle this month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTOPage;
