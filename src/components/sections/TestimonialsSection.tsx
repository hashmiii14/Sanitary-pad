import React from 'react';
import { TESTIMONIALS, PRESS_QUOTES } from '../../data/testimonials';
import { RatingStars } from '../ui/RatingStars';
import { Quote, CheckCircle2, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-rose uppercase">
            REAL STORIES • REAL WOMEN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum">
            Loved by Over 50,000 Women Nationwide
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-charcoal font-semibold pt-1">
            <RatingStars rating={4.9} />
            <span>4.9 / 5.0 Average Rating (2,400+ Verified Reviews)</span>
          </div>
        </div>

        {/* Press Quotes Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-blush-soft p-6 md:p-8 rounded-3xl border border-blush-deep">
          {PRESS_QUOTES.map((press, idx) => (
            <div key={idx} className="space-y-3 text-center md:text-left">
              <Quote className="w-6 h-6 text-rose/60" />
              <p className="font-serif italic text-base text-plum leading-snug">
                {press.quote}
              </p>
              <p className="text-xs font-bold tracking-widest uppercase text-rose-dark">
                — {press.outlet}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-3xl border border-blush-deep/70 shadow-soft flex flex-col justify-between space-y-4 hover:shadow-editorial transition-all"
            >
              <div className="space-y-3">
                <RatingStars rating={t.rating} />
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-blush-soft flex items-center gap-3">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-rose-light"
                  />
                )}
                <div>
                  <h4 className="font-serif text-base font-bold text-plum">{t.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-sage-dark font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Buyer • {t.productName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
