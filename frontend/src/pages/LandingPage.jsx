import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PlayCircle,
  ShieldCheck,
  Zap,
  Repeat,
  Headphones,
  ShoppingBag,
  Star,
  Sparkles,
} from "lucide-react";
import MoodSelectorCard from "../components/MoodSelectorCard";
import { useCart } from "../context/CartContext";
import ProductPreviewSection from "../components/ProductPreviewSection";
import TestimonialsSection from "../components/TestimonialsSection";

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
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
          <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
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
            stroke="url(#wave-grad)"
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

const LandingPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: "party",
      title: "Party Mixtape",
      description: "High-vibe frequencies for social magnetism",
      price: 1999,
      formattedPrice: "₹1,999",
      path: "/shop/party",
      img: "/party-mixtape.png",
      badge: "BESTSELLER",
    },
    {
      id: "sleep",
      title: "Sleep Mixtape",
      description: "Deep delta waves for restorative sleep & manifestation",
      price: 2499,
      formattedPrice: "₹2,499",
      path: "/shop/sleep",
      img: "/products/sleep.png",
    },
    {
      id: "shower",
      title: "Shower Mixtape",
      description: "Morning activation for clarity & confidence",
      price: 999,
      formattedPrice: "₹999",
      path: "/shop/shower",
      img: "/products/shower.png",
      badge: "STARTER",
    },
    {
      id: "personalized",
      title: "Personalized Track",
      description: "Custom-designed frequency for your specific goals",
      price: 9999,
      formattedPrice: "₹9,999",
      path: "/shop/personalized",
      img: "/products/personalized.png",
      badge: "PREMIUM",
    },
    {
      id: "journal",
      title: "E-Journal",
      description: "Digital integration guide for your frequency practice",
      price: 1999,
      formattedPrice: "₹1,999",
      path: "/shop/journal",
      img: "/products/journal.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white text-gray-900 font-sans">
      {/* SECTION 1: HERO */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <WaveBackground />
        <div className="relative z-20 w-full px-6 lg:px-16 flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-purple-100/80 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700 uppercase tracking-widest">
              Audio Apothecary
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-gray-900"
          >
            Shop The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent italic">
              Collection
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl font-light"
          >
            Tools to rewrite your reality, one frequency at a time.
          </motion.p>

          <div className="mt-8 w-full flex justify-center">
            <MoodSelectorCard />
          </div>
        </div>
      </div>

      {/* SECTION 2: PRODUCT PREVIEW */}
      <ProductPreviewSection />

      {/* SECTION 3: SHOP GRID */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2.5rem] border border-gray-100 hover:border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col"
              >
                <div className="h-64 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-purple-50/50" />
                  <img
                    src={product.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={product.title}
                  />
                  {product.badge && (
                    <span className="absolute top-6 right-6 bg-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-lg z-10">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {product.formattedPrice}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-purple-600 font-bold">
                        <Star size={14} className="fill-purple-600" />
                        <span>4.9/5</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="w-full bg-gray-50 text-gray-900 border border-gray-100 font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 flex items-center justify-center gap-2 group-hover:shadow-lg"
                    >
                      <ShoppingBag size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* SECTION 6: FINAL CTA */}
      <section className="py-24 text-center px-4 bg-gradient-to-t from-purple-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-purple-100 opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-gray-900">
            Stop forcing your mind <br />
            <span className="italic text-purple-600">to be quiet.</span>
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light">
            Let the sound do the heavy lifting for you.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-purple-600 text-white font-bold py-4 px-10 rounded-full hover:bg-purple-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Start Your Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
