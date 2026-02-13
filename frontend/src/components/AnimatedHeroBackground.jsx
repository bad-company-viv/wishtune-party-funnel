import React from "react";
import { motion } from "framer-motion";

const AnimatedHeroBackground = () => {
  // Create 12 vertical animated columns
  const columns = Array.from({ length: 12 }, (_, i) => i);

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        repeatDelay: 0.5,
      },
    },
  };

  const columnVariants = {
    animate: {
      opacity: [0.1, 0.5, 0.2, 0.7, 0.15, 0.6, 0.1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gradient overlay base */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-plum/20 to-brand-dark z-10" />

      {/* Animated columns container */}
      <motion.div
        className="absolute inset-0 flex items-stretch justify-center gap-4 px-4"
        variants={containerVariants}
        animate="animate"
      >
        {columns.map((_, idx) => (
          <motion.div
            key={idx}
            className="flex-1 min-w-0 bg-gradient-to-t from-brand-plum/40 to-brand-gold/20 rounded-lg"
            variants={columnVariants}
            style={{
              minHeight: "100%",
              maxWidth: "80px",
            }}
          />
        ))}
      </motion.div>

      {/* Abstract animated gradient ball */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-plum/30 rounded-full blur-[120px] animate-pulse" />
    </div>
  );
};

export default AnimatedHeroBackground;
