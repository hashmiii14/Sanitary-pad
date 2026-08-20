import React, { useState } from 'react';
import { Button } from '../ui/Button';
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
    <section className="py-16 md:py-20 bg-blush-soft border-y border-blush-deep/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream text-rose-dark text-xs font-bold uppercase tracking-wider border border-blush-deep">
          <Sparkles className="w-3.5 h-3.5" />
          <span>STAY INFORMED WITH LUNA</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum">
          Subscribe for Organic Period Care Updates
        </h2>

        <p className="text-sm md:text-base text-charcoal-muted max-w-lg mx-auto leading-relaxed">
          Sign up to receive period wellness guides, organic material insights, and new product launch announcements directly in your inbox.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-white border border-sage/40 max-w-md mx-auto text-sage-dark font-medium flex items-center justify-center gap-2 shadow-soft animate-fade-in">
            <CheckCircle2 className="w-5 h-5" />
            <span>Thank you for subscribing to Luna product news!</span>
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
                className="w-full px-5 py-3 rounded-full bg-white border border-blush-deep text-sm text-charcoal placeholder-charcoal-light focus:outline-none focus:ring-2 focus:ring-rose"
              />
              <Mail className="w-4 h-4 text-charcoal-muted absolute right-4 top-3.5 pointer-events-none" />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full sm:w-auto shrink-0 shadow-md"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-[11px] text-charcoal-light">
          No spam, ever. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
};
