import React, { useState } from 'react';
import { Sparkles, Mail, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#F6F0FA] border-y border-purple-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-brand-purple text-xs font-bold uppercase tracking-wider border border-purple-200 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
          <span>STAY INFORMED WITH MAKEASY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 tracking-tight">
          Subscribe for <span className="font-semibold text-brand-purple">Hygiene & Care Updates</span>
        </h2>

        <p className="text-sm md:text-base text-gray-600 font-light max-w-lg mx-auto leading-relaxed">
          Sign up to receive period wellness guides, UTI prevention tips, and new Makeasy product launch announcements directly in your inbox.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-white border border-emerald-200 max-w-md mx-auto text-emerald-600 font-medium flex items-center justify-center gap-2 shadow-md animate-fade-in text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>Thank you for subscribing to Makeasy news!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <div className="relative w-full">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-white border border-purple-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-magenta shadow-sm"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute right-4 top-3.5 pointer-events-none" />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full px-8 py-3 text-xs font-semibold shadow-md transition-all shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-gray-400 font-light">
          No spam, ever. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
};
