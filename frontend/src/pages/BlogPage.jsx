import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: "music-vs-manifestation",
    title: "Regular Music vs. Manifestation Music: What's the Difference?",
    excerpt:
      "Most music is designed to entertain. Manifestation music is designed to reprogram. Here is the science behind the shift.",
    category: "Science",
    image: "/images/blogs/manifestation.png",
    readTime: "5 min read",
  },
  {
    id: "silent-affirmations",
    title: "How Do Silent Affirmations Work?",
    excerpt:
      "Can your subconscious hear what your ears can't? The surprising truth about subliminal messaging and neural pathways.",
    category: "Science",
    image: "/images/blogs/silent.png",
    readTime: "7 min read",
  },
  {
    id: "manifestation-mythbusting",
    title: "Manifestation Mythbusting: Why 'High Vibes' Isn't Enough",
    excerpt:
      "Toxic positivity might be blocking your blessings. True alignment requires owning your full electromagnetic signature.",
    category: "Mythbusting",
    image: "/images/blogs/manifestation mythbusting.png",
    readTime: "4 min read",
  },
  {
    id: "21-day-shift",
    title: "The 21-Day Shift: Rewiring the Subconscious",
    excerpt:
      "Why 21 days? It's not just a habit rule—it's the biological cycle for neural plasticity to solidify new patterns.",
    category: "Guide",
    image: "/images/blogs/21day.png",
    readTime: "6 min read",
  },
  {
    id: "fun-faster-results",
    title: "Fun = Faster Results: The Chemistry of Joy",
    excerpt:
      "Struggle creates resistance. Joy creates flow. Learn how dopamine acts as a lubricant for your manifestation mechanism.",
    category: "Lifestyle",
    image: "/images/blogs/fun=faster.png",
    readTime: "3 min read",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/30 to-amber-50 text-gray-900 pt-32 pb-20 px-4">
      {/* Blog Hero */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900">
          The Wishtune Journal
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Exploring the intersection of sound science, subconscious
          reprogramming, and the art of easy manifestation.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="group block">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-b from-yellow-50/80 to-orange-50/50 border border-amber-200/60 rounded-2xl overflow-hidden hover:border-brand-gold/70 transition-all hover:shadow-md h-full flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-sm text-gray-700 group-hover:text-brand-gold group-hover:translate-x-2 transition-all">
                  Read Article <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
