import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden pt-20 pb-10 border-t border-amber-200/40">
      <div className="w-full relative z-10 flex flex-col items-center text-center">
        {/* Massive Brand Name - Animated */}
        <div className="w-full overflow-hidden mb-8 select-none flex justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] md:text-[18vw] font-black font-sans leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 whitespace-nowrap px-4"
          >
            WISHTUNE
          </motion.h1>
        </div>

        {/* Footer Bottom: Socials + Copyright */}
        <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row justify-between items-center border-t border-amber-200/40 pt-8 gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/ria-gupta-007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-colors bg-white p-3 rounded-full hover:bg-gray-100 border border-gray-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/@manifestologywithria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF0000] transition-colors bg-white p-3 rounded-full hover:bg-gray-100 border border-gray-200"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.instagram.com/riiagupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E1306C] transition-colors bg-white p-3 rounded-full hover:bg-gray-100 border border-gray-200"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs md:text-sm tracking-[0.2em] font-medium uppercase hover:text-gray-900 transition-colors">
            2026 Wishtune – All Rights Reserved.
          </p>

          <div className="flex gap-4 items-center flex-wrap justify-center">
            <a href="https://riagupta.com/blog" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-gold font-bold hover:text-gray-900 transition-colors uppercase tracking-widest underline decoration-brand-gold/30 underline-offset-4">Ria's Blogs</a>
          </div>
        </div>
      </div>

      {/* Subtle background glow behind the text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-brand-plum/5 blur-[100px] pointer-events-none" />
    </footer >
  );
};

export default Footer;
