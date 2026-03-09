import React from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import {
  PlayCircle,
  ArrowRight,
  User,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FounderAuthoritySection from "../components/FounderAuthoritySection";
import AnimatedHeroBackground from "../components/AnimatedHeroBackground";
import { useCart } from "../context/CartContext";

const StatCounter = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="text-5xl md:text-6xl font-black font-serif text-gray-900 mb-2">
        {displayValue}
        {suffix}
      </span>
      <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-gray-600">
        {label}
      </span>
    </div>
  );
};

const HomePage = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-20">
      {/* 1. BRAND HERO */}
      <section className="relative h-[85vh] flex items-center px-4 overflow-hidden">
        {/* Background Visual with Animated Columns */}
        <AnimatedHeroBackground />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">
              Wishtune Audio Labs
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Attract Your Dreams While You <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">
                Sleep, Shower & Party.
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-8 max-w-lg leading-relaxed">
              The world’s first manifestation music designed to shift your
              frequency without the "homework". No journaling. No rituals. Just
              listen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="bg-brand-gold text-brand-dark hover:bg-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2"
              >
                Start Listening <ArrowRight size={20} />
              </Link>
              <Link
                to="/free-gift"
                className="border border-white/20 hover:bg-white/10 text-white font-medium py-4 px-8 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <PlayCircle size={20} /> Get Free Sample
              </Link>
            </div>
          </motion.div>

          {/* Visual Right (Mockup of Founder or App) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative z-10 w-96 h-[500px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[3rem] backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
              {/* Fake Playlist UI */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-center font-serif text-2xl mb-8 mt-4">
                  Party Mixtape Preview
                </div>

                {/* Album Art / Disc */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-xl animate-pulse" />
                  <div className="w-full h-full bg-brand-gold/10 rounded-full border-4 border-white/5 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    <div className="w-16 h-16 bg-white/10 rounded-full blur-md" />
                  </div>
                </div>

                {/* <div className="text-center mb-8">
                                    <div className="font-bold text-xl mb-1">Wealth Frequency</div>
                                    <div className="text-white/50 text-sm">432Hz • Alpha Waves</div>
                                </div> */}

                {/* Animated Equalizer */}
                <div className="flex justify-center items-end gap-1 h-8 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: ["20%", "100%", "20%"] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.1,
                        ease: "easeInOut",
                      }}
                      className="w-1.5 bg-brand-gold rounded-full"
                    />
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-auto">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 30,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    className="h-full bg-brand-gold"
                  />
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
          </motion.div>
        </div>
      </section>



      {/* 2. FOUNDER / ABOUT SECTION */}
      <FounderAuthoritySection />

      {/* 3. NAVIGATION GRID */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12 text-gray-900">
            Explore the Collection
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                id: "party",
                title: "Party Mixtape",
                price: 1999,
                formattedPrice: "₹1,999",
                path: "/shop/party",
                img: "/products/party.png",
                color: "bg-[#4A1D5A]",
              }, // Purple
              {
                id: "sleep",
                title: "Sleep Mixtape",
                price: 2499,
                formattedPrice: "₹2,499",
                path: "/shop/sleep",
                img: "/products/sleep.png",
                color: "bg-[#1E1B4B]",
              }, // Indigo
              {
                id: "shower",
                title: "Shower Mixtape",
                price: 999,
                formattedPrice: "₹999",
                path: "/shop/shower",
                img: "/products/shower.png",
                color: "bg-[#0F3D35]",
              }, // Dark Teal
              {
                id: "personalized",
                title: "Personalized",
                price: 9999,
                formattedPrice: "₹9,999",
                path: "/shop/personalized",
                img: "/products/personalized.png",
                color: "bg-[#251030]",
              }, // Deep Plum
              {
                id: "journal",
                title: "E-Journal",
                price: 1999,
                formattedPrice: "₹1,999",
                path: "/shop/journal",
                img: "/products/journal.png",
                color: "bg-[#653315]",
              }, // Brown
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative w-full md:w-[350px] lg:w-[380px] h-[450px] rounded-3xl overflow-hidden ${item.color} flex flex-col items-center p-6 border border-white/5 hover:border-brand-gold/50 shadow-2xl transition-all hover:-translate-y-2 cursor-pointer`}
              >
                <Link to={item.path} className="absolute inset-0 z-0" />

                {/* Image Container */}
                <div className="w-full h-64 mb-6 rounded-lg overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all z-10 pointer-events-none">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="text-center mt-auto pb-4 relative z-10 bg-black/20 w-full rounded-2xl p-4 backdrop-blur-sm mt-4">
                  <h3 className="text-xl font-serif font-bold mb-1 text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-brand-gold font-bold text-sm tracking-widest mb-4">
                    {item.formattedPrice}
                  </p>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(item);
                    }}
                    className="w-full bg-white text-brand-dark font-bold py-3 rounded-xl hover:bg-brand-gold transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <ShoppingBag size={18} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATS COUNTER */}
      <section className="py-20 relative overflow-hidden bg-brand-plum/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCounter value={2000} suffix="+" label="Happy Users" />
            <StatCounter value={100} suffix="%" label="Science-Backed" />
            <StatCounter value={0} suffix="" label="Effort Needed" />
            <StatCounter value={100} suffix="%" label="Effective" />
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SLIDER */}
      <section className="py-24 bg-white text-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-plum mb-4">
              Real People. <br /> Real Results.
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "I used the Party Mixtape before a night out and felt magnetic. People kept starting conversations with me it changed the whole evening.",
      name: "Sanya P.",
      location: "New Delhi",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "I was skeptical, but the Party mix gave me the confidence boost I needed. I networked all night and landed a new freelance client.",
      name: "Leah M.",
      location: "Vancouver",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "I used the Party Mixtape before a big event and felt an instant glow people noticed and approached me. Worth every penny.",
      name: "Melanie T.",
      location: "Toronto",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "I used the 'Beauty Tape' for JUST three days. People kept asking me what was different. One guy literally said, 'You have a glow today.' It gave me chills.",
      name: "Ishita G.",
      location: "Mumbai",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "Ria has understood me since day 1, she's deeply spiritual and has some beautiful outtakes on life. Sessions with her feel like you're with a friend who understands.",
      name: "Nikita Kapoor",
      location: "New Delhi",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "My anxiety levels have dropped significantly since I started the Shower Mixtape. It's become my favorite part of the morning.",
      name: "Arjun K.",
      location: "Bangalore",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Calculate visible items (circular)
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  const visibleItems = getVisibleTestimonials();

  return (
    <div className="relative">
      {/* Desktop View (3 items) */}
      <div className="hidden md:flex justify-center items-stretch gap-8">
        {visibleItems.map((testimony, i) => (
          <motion.div
            key={`${currentIndex}-${i}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-1 flex flex-col items-center text-center max-w-sm"
          >
            <div className="bg-white p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 mb-8 relative flex-grow flex items-center">
              <div className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
                "{testimony.text}"
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={testimony.img}
                alt={testimony.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-brand-plum mb-3"
              />
              <h4 className="font-bold text-lg text-brand-dark">
                {testimony.name}
              </h4>
              <span className="text-xs font-bold text-brand-plum uppercase tracking-wider">
                {testimony.location}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View (1 item) */}
      <div className="md:hidden flex justify-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center text-center max-w-sm"
        >
          <div className="bg-white p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg shadow-xl border border-gray-100 mb-8 relative">
            <div className="text-gray-600 leading-relaxed font-medium">
              "{testimonials[currentIndex].text}"
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={testimonials[currentIndex].img}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full object-cover border-2 border-brand-plum mb-3"
            />
            <h4 className="font-bold text-lg text-brand-dark">
              {testimonials[currentIndex].name}
            </h4>
            <span className="text-xs font-bold text-brand-plum uppercase tracking-wider">
              {testimonials[currentIndex].location}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gray-100 hover:bg-brand-plum hover:text-white text-brand-dark p-3 rounded-full transition-all shadow-lg z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gray-100 hover:bg-brand-plum hover:text-white text-brand-dark p-3 rounded-full transition-all shadow-lg z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HomePage;
