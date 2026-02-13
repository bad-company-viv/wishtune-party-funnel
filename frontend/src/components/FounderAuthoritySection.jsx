import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Headphones, Brain, Mic2 } from "lucide-react";

const FounderAuthoritySection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-white relative shadow-lg group cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,160,89,0.12)]">
            {/* Placeholder for Ria Gupta - Studio Vibe */}
            <div className="absolute inset-0 bg-[url('/images/founder.jpeg')] bg-cover bg-center opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>

            {/* Hover Glow Overlay */}
            <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>

            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-serif text-gray-900 mb-1">
                Ria Gupta
              </h3>
              <div className="flex items-center gap-2 text-brand-gold font-semibold uppercase tracking-widest text-xs">
                <BadgeCheck size={16} />
                Founder • Wishtune
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            <span className="text-gray-500 block text-lg font-sans font-bold tracking-widest uppercase mb-4">
              The Wishtune Difference
            </span>
            Psychology meets <br />
            <span className="text-brand-gold italic">Sound Design.</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Most sleep apps are built by tech companies. Wishtune was created
              by <strong>Ria Gupta</strong> — a licensed psychologist and
              professional DJ who spent years studying how sound affects the
              nervous system.
            </p>
            <p>
              She noticed that clinical sounds were boring, and entertaining
              music satisfied the ego but distracted the mind.
            </p>
            <p className="text-white border-l-2 border-brand-gold pl-6 py-2 italic font-serif text-xl">
              “I designed Wishtune to bridge the gap. Science that calms the
              mind, art that moves the soul.”
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="flex flex-col gap-2">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-gold">
                <Brain size={24} />
              </div>
              <h4 className="font-bold text-gray-900">Psychologist</h4>
              <p className="text-gray-500 text-sm">Understands the mind</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-gold">
                <Headphones size={24} />
              </div>
              <h4 className="font-bold text-gray-900">Sound Designer</h4>
              <p className="text-gray-500 text-sm">Understands the vibe</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderAuthoritySection;
