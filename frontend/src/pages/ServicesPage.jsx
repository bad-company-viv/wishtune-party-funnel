import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Globe,
  CheckCircle,
  Music,
  User,
  BookOpen,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";
import TestimonialsSection from "../components/TestimonialsSection";

const TrustSignal = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 border border-gray-100 bg-gray-50 rounded-2xl hover:border-brand-gold/30 transition-colors">
    <div className="text-brand-gold mb-4">{icon}</div>
    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ServiceCard = ({ icon, title, desc, link, linkText, color }) => (
  <div
    className={`p-8 rounded-3xl border-2 border-amber-200/50 ${color} relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-sm`}
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gray-100 transition-colors opacity-40" />

    <div className="relative z-10 flex flex-col h-full">
      <div className="bg-white border border-amber-200/30 w-16 h-16 rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>

      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-700 mb-8 flex-grow leading-relaxed">{desc}</p>

      <Link
        to={link}
        className="inline-flex items-center gap-2 text-brand-gold font-bold border-b border-brand-gold/30 pb-1 hover:border-brand-gold transition-colors self-start"
      >
        {linkText} <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left hover:text-brand-gold transition-colors"
      >
        <span className="text-lg font-serif font-bold">{question}</span>
        {isOpen ? (
          <Minus size={20} className="text-brand-gold" />
        ) : (
          <Plus size={20} className="text-brand-gold" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="overflow-hidden"
        >
          <div className="pt-4 text-gray-600 leading-relaxed max-w-2xl">
            {answer}
          </div>
        </motion.div>
      )}
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/30 to-amber-50 text-gray-900 pt-24">
      {/* HERO */}
      <section className="text-center px-4 max-w-4xl mx-auto mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
        >
          Start Here
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
        >
          The Science Behind <br />
          <span className="text-gray-500 italic">Your Shift.</span>
        </motion.h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A unique blend of psychology and sound design created to bypass your
          conscious resistance and rewire your reality.
        </p>
      </section>

      {/* TRUST GRID */}
      <section className="px-4 max-w-2xl mx-auto mb-32">
        <div className="flex flex-col gap-6">
          <TrustSignal
            icon={<Award size={32} />}
            title="5+ Years of Study"
            desc="Graduated with First Class Honors in Psychology. Mastered subconscious reprogramming."
          />
          <TrustSignal
            icon={<Users size={32} />}
            title="Hundreds Changed"
            desc="From entrepreneurs to everyday dreamers—helping people dissolve blocks."
          />
          <TrustSignal
            icon={<Globe size={32} />}
            title="10,000+ Listeners"
            desc="Worldwide adoption. Listeners shifting their energy daily with intention."
          />
          <TrustSignal
            icon={<CheckCircle size={32} />}
            title="Real Life Tested"
            desc="Everything I teach is something I lived, tested, and proved personally."
          />
        </div>
      </section>

      {/* MANIFEST YOUR WAY (Services) */}
      <section className="bg-gradient-to-r from-orange-100/60 via-amber-50 to-orange-100/60 py-24 px-4 border-y border-amber-200/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 text-gray-900">
            Manifest <span className="text-brand-gold italic">Your Way.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Music size={32} />}
              title="Start With Music"
              desc="Manifest effortlessly with every beat. The core Wishtune experience."
              link="/shop"
              linkText="Browse Library"
              color="bg-gradient-to-br from-indigo-100/70 to-indigo-50/50"
            />
            <ServiceCard
              icon={<User size={32} />}
              title="Personalized Coaching"
              desc="Get 1:1 guidance to supercharge your results. Deep dive sessions with Ria."
              link="/contact"
              linkText="Book Session"
              color="bg-gradient-to-br from-pink-100/70 to-pink-50/50"
            />
            <ServiceCard
              icon={<BookOpen size={32} />}
              title="Deepen With Journals"
              desc="Rewire even faster with guided inner work prompts and daily tracking."
              link="/shop/journal"
              linkText="Get Journal"
              color="bg-gradient-to-br from-amber-100/70 to-yellow-50/50"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">
          Burning Questions
        </h2>
        <div className="space-y-4">
          <FAQItem
            question="Why 21 Days to See Results?"
            answer="Neuroplasticity research suggests it takes about 21 days of consistent repetition to form new neural pathways. This is the sweet spot for habit formation and mindset shifts."
          />
          <FAQItem
            question="What Are Affirmations?"
            answer="Affirmations are positive statements that challenge and overcome self-sabotaging and negative thoughts. When repeated often, and believed, you can start to make positive changes."
          />
          <FAQItem
            question="How Long Should I Listen Each Day?"
            answer="We recommend at least 15-20 minutes daily. Consistency is more important than duration. The tracks are designed to loop, so you can listen as long as you like."
          />
          <FAQItem
            question="Do I Need Headphones?"
            answer="For the best results with our binaural beats tracks (Sleep, Focus), yes. For general mood-shifting tracks (Party, Shower), speakers work great too."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-serif mb-8">Ready to start?</h2>
        <Link
          to="/shop"
          className="bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
        >
          Get Your First Track
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
