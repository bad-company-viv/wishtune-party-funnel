import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center px-4">
            {/* Background Gradient/Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-plum/20 to-brand-dark z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-plum/30 via-brand-dark/50 to-brand-dark z-0 opacity-50" />

            {/* Content */}
            <div className="z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/30 text-brand-gold text-sm tracking-wider uppercase bg-brand-gold/5 mb-6">
                        Manifestation Music
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 text-white drop-shadow-2xl">
                        Music Designed to Shift <br />
                        <span className="text-brand-gold fitalic">Your Mood</span> in Minutes 🎧
                    </h1>
                </motion.div>

                <motion.p
                    className="text-lg md:text-xl text-gray-300 tracking-wide mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Sleep • Party • Shower • Manifest • Focus
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <button className="bg-brand-gold hover:bg-white text-brand-dark hover:text-brand-plum font-semibold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-glow flex items-center gap-3">
                        <PlayCircle size={24} />
                        Find Your Vibe
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
