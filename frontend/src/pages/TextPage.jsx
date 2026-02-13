import React from "react";
import ReactMarkdown from "react-markdown";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TextPage = ({ title, content, date }) => {
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
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-gold mb-8 transition-colors font-medium"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        {/* Document Card */}
        <div className="bg-gray-50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 md:p-16 animate-fade-in-up">
          {/* Header */}
          <div className="mb-12 border-b border-gray-100 pb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              {title}
            </h1>
            {date && (
              <p className="text-brand-gold/60 text-xs md:text-sm uppercase tracking-widest font-bold">
                {date}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-gold prose-headings:font-bold prose-p:leading-relaxed prose-a:text-brand-gold">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
