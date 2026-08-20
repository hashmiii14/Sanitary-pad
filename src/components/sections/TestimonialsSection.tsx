import React from 'react';
import { RatingStars } from '../ui/RatingStars';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Hannah M.',
      location: 'San Francisco, CA',
      product: 'Luna Daily Organic',
      comment: 'Comfortable, simple, and easy. I’ve been using the daily pack for a while now and really like how soft the organic cotton feels against sensitive skin.'
    },
    {
      name: 'Claire R.',
      location: 'Chicago, IL',
      product: 'Luna Ultra Night Wings',
      comment: 'The overnight wings are fantastic. The 330mm flared tail keeps everything completely leak-free through the night on day 2.'
    },
    {
      name: 'Jessica T.',
      location: 'Austin, TX',
      product: 'Luna Starter Box',
      comment: 'No rashes, no synthetic plastic feel, zero artificial perfume. Just soft organic pads that fit comfortably.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-blush-deep/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-dark">
            REAL FEEDBACK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum">
            What Women Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-[#FBF5F4] p-8 rounded-3xl border border-[#E8D7D5] space-y-4 shadow-soft"
            >
              <RatingStars rating={5} />
              <p className="text-sm text-charcoal leading-relaxed font-sans italic">
                "{r.comment}"
              </p>

              <div className="pt-4 border-t border-[#E8D7D5] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif text-base font-bold text-plum">{r.name}</h4>
                  <span className="text-charcoal-muted">{r.location}</span>
                </div>
                <span className="text-sage-dark font-semibold text-[11px] bg-sage-light px-2.5 py-0.5 rounded-full">
                  {r.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
