import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Download, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f030e] text-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl w-full text-center space-y-8"
            >
                {/* Success Icon */}
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <Check size={48} className="text-green-400" strokeWidth={3} />
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                    You're In.
                </h1>
                <p className="text-xl text-white/60">
                    Your order is confirmed and your manifestation tools are on the way.
                </p>

                {/* Access Box */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left space-y-6 mt-8">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                        <Mail size={20} className="text-brand-gold" />
                        Check Your Email
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                        We've sent a secure access link to your inbox. <br />
                        Subject: <strong>[Access] Your Wishtune Audio Files 🎧</strong>
                    </p>

                    <div className="h-px bg-white/10" />

                    <h3 className="text-lg font-bold flex items-center gap-2">
                        <Download size={20} className="text-brand-gold" />
                        Instant Download
                    </h3>
                    <button className="w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                        Download Shower Mixtape (MP3)
                    </button>
                </div>

                <button
                    onClick={() => navigate('/shop')}
                    className="text-white/40 hover:text-white text-sm flex items-center justify-center gap-1 mx-auto transition-colors"
                >
                    Return to Shop <ArrowRight size={14} />
                </button>

            </motion.div>
        </div>
    );
};

export default ThankYouPage;
