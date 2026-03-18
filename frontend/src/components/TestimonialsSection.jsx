import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I approached this skeptically, I'm not someone who believes in anything unproven. But the psychology behind it made sense. After 3 weeks of consistent listening, my anxiety baseline genuinely shifted. I feel calmer without trying.",
    author: "Priya S.",
    role: "Marketing Manager",
    type: "Social",
    img: "/images/testimonials/testimonial1.jpeg",
  },
  {
    quote:
      "I'm a psychology student, so when Ria explained the subconscious mechanism behind the music, I was genuinely impressed. The layering is real - you can feel the shift without consciously hearing it. This is genuinely different from everything else.",
    author: "Arjun K.",
    role: "Psychology Student", 
    type: "Dating",
    img: "/images/testimonials/testimonial2.png",
  },
  {
    quote:
      "A month of listening and I've stopped waking up with that familiar sense of dread. I don't know exactly how to explain it but something fundamental has changed. I'm more decisive, less reactive. Highly recommend starting with the free track.",
    author: "Kavya M.",
    role: "Consultant",
    type: "Professional",
    img: "/images/testimonials/testimonial3.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            Real Results from <span className="text-brand-gold italic">Real</span>{" "}
            People.
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
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/40 to-purple-500/40 rounded-full blur-lg"></div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                    <img
                      src={t.img}
                      alt={t.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
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
