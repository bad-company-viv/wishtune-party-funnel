import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';

const AudioBar = ({ delay }) => (
    <motion.div
        animate={{
            height: [20, 60, 30, 80, 40, 20],
        }}
        transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
        }}
        className="w-2 bg-brand-gold/80 rounded-full mx-1"
    />
);

const StaticBar = () => (
    <div className="w-2 h-4 bg-white/10 rounded-full mx-1" />
);

const ProductPreviewSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-plum/5 radial-gradient-center pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4 block">
                        Experience the Shift
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                        Hear what <span className="italic text-white/50">calm</span> sounds like.
                    </h2>
                    <p className="text-white/60 max-w-lg mx-auto">
                        No guided voices. No distracting melodies. Just pure, neuro-acoustic sound designed to lower your cortisol levels.
                    </p>
                </motion.div>

                {/* Player Interface */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-24 mb-8 w-full">
                            {isPlaying ? (
                                <>
                                    {[...Array(15)].map((_, i) => (
                                        <AudioBar key={i} delay={i * 0.05} />
                                    ))}
                                </>
                            ) : (
                                <>
                                    {[...Array(15)].map((_, i) => (
                                        <StaticBar key={i} />
                                    ))}
                                </>
                            )}
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="text-right hidden md:block">
                                <h4 className="text-white font-bold">Deep Sleep Reset</h4>
                                <p className="text-white/40 text-xs uppercase tracking-wider">Delta Wave Series</p>
                            </div>

                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark hover:scale-105 transition-transform shadow-[0_0_30px_rgba(197,160,89,0.3)]"
                            >
                                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                            </button>

                            <div className="text-left hidden md:block">
                                <h4 className="text-white font-bold">09:42 Remaining</h4>
                                <div className="flex items-center gap-2 text-white/40 text-xs">
                                    <Volume2 size={12} />
                                    <span>Headphones Recommended</span>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Title */}
                        <div className="mt-6 md:hidden">
                            <h4 className="text-white font-bold">Deep Sleep Reset</h4>
                            <p className="text-white/40 text-xs uppercase tracking-wider">Delta Wave Series</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPreviewSection;
