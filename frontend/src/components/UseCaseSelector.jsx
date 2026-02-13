import React from "react";
import { motion } from "framer-motion";
import { Moon, Sparkles, Zap, User } from "lucide-react";
import { Link } from "react-router-dom";

const useCases = [
  {
    id: "overthinking",
    title: "Overthinking at Night",
    icon: <Moon size={32} />,
    desc: "Quiet the mental chatter",
    color: "from-indigo-900 to-slate-900",
  },
  {
    id: "workday",
    title: "High-Pressure Workdays",
    icon: <Zap size={32} />,
    desc: "Decompress & Reset",
    color: "from-amber-900 to-orange-900",
  },
  {
    id: "deep-sleep",
    title: "Deep Sleep Reset",
    icon: <Sparkles size={32} />,
    desc: "Clinical-grade rest",
    color: "from-purple-900 to-slate-900",
  },
  {
    id: "therapy",
    title: "Personal Sound Therapy",
    icon: <User size={32} />,
    desc: "Bespoke audio for your mind",
    color: "from-brand-plum to-pink-900",
  },
];

const UseCaseSelector = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gray-900">
          What do you want to{" "}
          <span className="text-brand-gold italic">feel</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, index) => (
            <Link to={`/shop/${item.id}`} key={item.id}>
              <motion.div
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl p-6 h-64 flex flex-col justify-between cursor-pointer group border border-gray-100 bg-gradient-to-br ${item.color}`}
              >
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-gold/20 transition-colors">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{item.desc}</p>
                  <div className="text-brand-gold text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                    Explore →
                  </div>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSelector;
