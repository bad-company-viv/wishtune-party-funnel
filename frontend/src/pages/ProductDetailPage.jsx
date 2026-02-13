import React, { useState } from "react";
import {
  PlayCircle,
  Check,
  Star,
  ShieldCheck,
  Clock,
  Plus,
  Minus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Visualizer Component
const AudioVisualizer = ({ isPlaying }) => {
  return (
    <div className="w-full h-16 flex items-end justify-center gap-1 mb-6">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 bg-brand-gold rounded-t-full"
          animate={{
            height: isPlaying ? [10, 40, 20, 50, 10] : 10,
            opacity: isPlaying ? 1 : 0.3,
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// FAQ Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left py-2 hover:text-brand-gold transition-colors"
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-sm py-2 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import { useParams, useNavigate } from "react-router-dom";

import { products } from "../data/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  // Get product from DB or default to Sleep (ID 1)
  // Convert id to number comparison since raw ID from params is string
  const product = products.find((p) => p.id == id) || products[0];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Visual/Media */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative sticky top-24"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 relative group">
            <img
              src={product.image || "/images/placeholder.jpg"}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white/90 hover:bg-white text-purple-600 p-6 rounded-full transition-all transform group-hover:scale-110 shadow-xl"
              >
                {isPlaying ? (
                  <span className="block w-12 h-12 bg-purple-600 rounded-sm animate-pulse" />
                ) : (
                  <PlayCircle size={48} className="text-purple-600 fill-current" />
                )}
              </button>
            </div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur px-4 py-2 rounded-full text-sm">
                <Clock size={14} className="text-brand-gold" />
                <span>Preview Track (0:30)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Details & Conversion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-4 flex items-center gap-2 text-brand-gold text-sm font-semibold tracking-wider uppercase">
            <Star size={16} fill="currentColor" />
            <span>Best Seller</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold text-brand-gold">
              {product.price}
            </span>
            <div className="flex items-center gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
              <span className="text-gray-500 text-sm ml-2">
                ({product.reviews}/5)
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* New Audio Visualizer */}
          <AudioVisualizer isPlaying={isPlaying} />

          <div className="space-y-4 mb-10">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="bg-brand-gold/20 p-1 rounded-full text-brand-gold">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <button
              onClick={() =>
                navigate("/checkout", { state: { productId: product.id } })
              }
              className="block text-center w-full bg-brand-gold hover:bg-white text-brand-dark hover:text-brand-plum font-bold text-lg py-4 rounded-xl transition-all shadow-glow transform hover:-translate-y-1"
            >
              Buy & Download Instantly
            </button>
            <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-1">
              <ShieldCheck size={14} /> 30-Day Money-Back Guarantee
            </p>
          </div>

          {/* New FAQ Section */}
          <div>
            <h3 className="text-2xl font-serif mb-6 border-b border-gray-100 pb-2">
              Frequently Asked Questions
            </h3>
            <div>
              {product.faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
