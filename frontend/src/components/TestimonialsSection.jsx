import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I prescribe sleep medication daily, but this is what I use personally. It’s the only thing that shuts off my 'doctor brain' after a 14-hour shift.",
    author: "Dr. Sarah Jenkins",
    role: "Emergency Medicine Physician",
    type: "Clinical",
  },
  {
    quote:
      "My mind usually races with code and strategy until 3am. Wishtune is like a kill-switch for my overthinking. I'm out in 10 minutes.",
    author: "Alex V.",
    role: "Senior Software Architect",
    type: "High Performer",
  },
  {
    quote:
      "I was skeptical because I hate 'meditation music'. This isn't that. It feels like a deep tissue massage for your nervous system.",
    author: "Marcus T.",
    role: "Hedge Fund Manager",
    type: "High Performer",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            Trusted by <span className="text-brand-gold italic">restless</span>{" "}
            achievers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 p-8 rounded-2xl relative hover:bg-gray-100 transition-colors"
            >
              <Quote className="text-brand-gold mb-6 opacity-60" size={32} />
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-1 h-12 ${t.type === "Clinical" ? "bg-blue-500" : "bg-brand-gold"} rounded-full`}
                />
                <div>
                  <h5 className="text-gray-900 font-bold">{t.author}</h5>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
