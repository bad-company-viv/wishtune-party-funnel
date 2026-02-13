import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Zap, User, Droplets, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 'sleep',
        title: 'Sleep Better',
        subtitle: 'FALL ASLEEP FASTER, NATURALLY',
        icon: <Moon size={24} />,
        color: 'bg-gradient-to-br from-[#3D1219] to-[#2A0A10] border-[#5A2A34]', // Deeper Burgundy
        hoverColor: 'group-hover:text-pink-300'
    },
    {
        id: 'party',
        title: 'Social Energy',
        subtitle: 'BOOST CHARISMA & VIBE',
        icon: <Zap size={24} />,
        color: 'bg-gradient-to-br from-[#3D2612] to-[#25150A] border-[#5A3E25]', // Deeper Brown
        hoverColor: 'group-hover:text-orange-300'
    },
    {
        id: 'shower',
        title: 'Shower Clarity',
        subtitle: 'RESET YOUR MIND IN MINUTES',
        icon: <Droplets size={24} />,
        color: 'bg-gradient-to-br from-[#0F224A] to-[#081229] border-[#223A6E]', // Deeper Navy
        hoverColor: 'group-hover:text-blue-300'
    },
    {
        id: 'personalized',
        title: 'Personalized',
        subtitle: 'MADE JUST FOR YOU',
        icon: <Sparkles size={24} />,
        color: 'bg-gradient-to-br from-[#24123D] to-[#150A25] border-[#3E255A]', // Deeper Purple
        hoverColor: 'group-hover:text-purple-300'
    }
];

const MoodSelectorCard = () => {
    return (
        <div className="w-full max-w-lg bg-[#0F0F16] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            {/* Glow Effect behind */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-plum/10 blur-[100px] rounded-full pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-serif text-white mb-6">
                What do you want to feel right now?
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {categories.map((cat) => (
                    <Link to={`/shop/${cat.id}`} key={cat.id}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`${cat.color} border border-opacity-30 p-5 rounded-xl h-full flex flex-col justify-between cursor-pointer group hover:border-opacity-60 transition-all`}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className={`text-white/80 ${cat.hoverColor} transition-colors`}>
                                    {cat.icon}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-1">
                                    {cat.title}
                                </h4>
                                <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest leading-tight">
                                    {cat.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>

            <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl transition-colors text-sm font-semibold border border-white/5"
            >
                Explore <ChevronRight size={16} />
            </Link>
        </div>
    );
};

export default MoodSelectorCard;
