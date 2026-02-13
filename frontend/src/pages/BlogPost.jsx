import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, PlayCircle } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-plum/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-gold mb-8 transition-colors font-medium"
        >
          <ArrowLeft size={20} /> Back to Journal
        </Link>

        {/* Document Card */}
        <article className="bg-gray-50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 md:p-12 animate-fade-in-up">
          {/* Hero Image */}
          <div className="w-full aspect-video rounded-xl overflow-hidden mb-10 border border-gray-100 relative group">
            <div className="absolute inset-0 bg-brand-plum/20 group-hover:bg-transparent transition-colors z-10" />
            <img
              src="/images/blogs/manifestation.png"
              alt="Blog Cover"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Header */}
          <div className="mb-12 border-b border-gray-100 pb-8 text-center">
            <div className="flex justify-center items-center gap-4 text-sm text-brand-gold/80 mb-4 uppercase tracking-widest font-bold">
              <span>Science</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
              Regular Music vs. Manifestation Music: What's the Difference?
            </h1>
            <p className="text-gray-600 italic">
              By Wishtune Research • October 24, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-headings:font-bold prose-p:leading-relaxed prose-p:text-gray-700 prose-a:text-brand-gold prose-a:hover:text-brand-dark border-b border-gray-100 pb-12 mb-12">
            <p className="lead text-xl text-gray-800 font-serif">
              Most music is designed to{" "}
              <span className="text-brand-gold italic">entertain</span>. It
              keeps you hooked, stimulates your emotions, and often, reinforces
              the loops you're already stuck in. Manifestation music is
              different. It is designed to{" "}
              <span className="text-brand-gold italic">reprogram</span>.
            </p>

            <h3>The Frequency of Entertainment</h3>
            <p>
              Pop music is engineered to be catchy. It uses repetition, distinct
              hooks, and relatable lyrics. While this is great for a dopamine
              hit, notice what the lyrics are usually about: heartbreak,
              longing, struggle, or "grinding" to get to the top. When you
              listen to a heartbreak song on repeat, you are essentially
              affirming the vibration of loss into your subconscious mind.
            </p>

            <h3>The Science of Wishtune</h3>
            <p>
              Wishtune tracks are built differently. We start with the{" "}
              <strong>Binaural Beat</strong> or{" "}
              <strong>Solfeggio Frequency</strong> layer—sounds proven to shift
              brainwave states (e.g., from Beta stress to Alpha flow).
            </p>
            <p>
              Then, we layer <strong>Subliminal Affirmations</strong>. These are
              positive statements recorded just below the threshold of conscious
              hearing. Your conscious mind hears a synth pad or a drum loop, but
              your subconscious hears:{" "}
              <em>"I am worthy of abundance. Money flows to me easily."</em>
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 py-2 my-8 text-gray-700 italic bg-brand-gold/5 rounded-r-lg">
              "You don't manifest what you want. You manifest who you are. And
              who you are is a collection of subconscious patterns."
            </blockquote>

            <h3>Why Passive Listening Works Best</h3>
            <p>
              The biggest mistake in manifestation is "trying". Effort creates
              resistance. By embedding these codes into high-quality music you
              actually <em>want</em> to listen to (like our Party or Shower
              mixtapes), you bypass the critical faculty of the mind. You shift
              your vibration on autopilot.
            </p>

            <p>
              So next time you reach for a playlist, ask yourself: Is this music
              entertaining me, or is it expanding me?
            </p>
          </div>

          {/* Bottom CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-8 text-center hover:bg-brand-gold/20 transition-all">
              <h3 className="text-2xl font-serif font-bold mb-2 text-gray-900">
                Shop The Vibe
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Get the exact audio technology mentioned in this article.
              </p>
              <Link
                to="/shop"
                className="block w-full bg-brand-gold hover:bg-white text-brand-dark font-bold py-3 rounded-lg transition-colors"
              >
                Start Listening Now
              </Link>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 text-center hover:bg-gray-100 transition-all">
              <h3 className="text-2xl font-serif font-bold mb-2 text-gray-900">
                Free Gift
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Try the technology before you buy. Download our starter track.
              </p>
              <Link
                to="/free-gift"
                className="flex items-center justify-center gap-2 text-gray-900 font-bold hover:text-brand-gold transition-colors border border-gray-200 py-3 rounded-lg hover:border-brand-gold"
              >
                <PlayCircle size={20} /> Get Free Track
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
