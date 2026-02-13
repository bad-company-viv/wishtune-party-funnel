import React, { useState } from "react";
import { Play, Pause, Download, Check, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...product, price: product.priceValue });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-[2.5rem] border border-gray-100 hover:border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
    >
      {/* Full Card Link Overlay */}
      <Link to={`/product/${product.id}`} className="absolute inset-0 z-0" />

      {/* Image Area */}
      <div className="h-64 relative flex items-center justify-center overflow-hidden bg-gray-100">
        <img
          src={product.image || "/images/placeholder.jpg"}
          alt={product.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

        {/* Play Button - Needs pointer events enabled */}
        <button
          onClick={togglePlay}
          className="z-10 absolute bg-white/30 hover:bg-white text-white hover:text-purple-600 rounded-full p-4 backdrop-blur-md transition-all transform hover:scale-110 shadow-lg border border-white/40 pointer-events-auto"
        >
          {isPlaying ? (
            <Pause size={28} fill="currentColor" />
          ) : (
            <Play size={28} fill="currentColor" className="ml-1" />
          )}
        </button>

        {/* Badge */}
        <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded shadow-md">
          INSTANT ACCESS
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-10 pointer-events-none">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 font-serif">
            {product.title}
          </h3>
          <span className="text-brand-gold font-bold">{product.price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-gray-50 text-gray-900 border border-gray-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 pointer-events-auto cursor-pointer shadow-sm hover:shadow-lg relative z-20"
        >
          <ShoppingBag size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
