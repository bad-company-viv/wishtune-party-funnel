import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-20">
            <div className="container-custom max-w-7xl mx-auto px-4 py-12 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-gold-500/10 rounded-[2.5rem] blur-2xl" />
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/images/founder.jpeg"
                                alt="Ria Gupta, Founder of Wishtune"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Optional: Overlay gradient for better text visibility if needed, keeps it moody */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-[#C9A96E] uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                                The Philosophy
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6">
                                Manifestation shouldn't <br />
                                <span className="italic text-gray-400">feel like a chore.</span>
                            </h1>
                        </div>

                        <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed max-w-xl">
                            <p>
                                "I built Wishtune to blend real music with belief-focused audio
                                design. Most people fail at manifestation because it requires too
                                much conscious effort.
                            </p>
                            <p>
                                Wishtune bypasses the resistance by using the music you already
                                love to listen to."
                            </p>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-[#C9A96E] text-2xl font-serif mb-1">
                                Ria Gupta
                            </h3>
                            <p className="text-gray-500 italic font-light">
                                &mdash; Founder, Wishtune
                            </p>
                        </div>

                        {/* Signature or subtle visual element */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="pt-8 opacity-30"
                        >
                            <Sparkles className="w-6 h-6 text-[#C9A96E]" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
