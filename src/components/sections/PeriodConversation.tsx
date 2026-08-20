import React from 'react';
import { MessageCircleHeart } from 'lucide-react';

export const PeriodConversation: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F6EBE9] border-y border-[#E8D7D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy Left */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-rose-dark uppercase">
              <MessageCircleHeart className="w-4 h-4 text-rose" />
              <span>NORMALIZING REAL CONVERSATIONS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum leading-tight">
              Periods should never be something you feel awkward talking about.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans font-normal">
              For generations, period care was packaged in plain brown paper bags and spoken of in whispers. We believe in open, honest care—products made from clean materials that you feel proud to have in your bathroom cabinet.
            </p>

            <div className="p-5 rounded-2xl bg-white/80 border border-[#E8D7D5] shadow-soft max-w-lg mx-auto lg:mx-0">
              <p className="font-serif italic text-base text-plum">
                "Period care is basic self-care. It should be simple, comfortable, and completely free of shame."
              </p>
            </div>
          </div>

          {/* Lifestyle Visual Right */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-editorial border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80"
                alt="Women sharing a genuine, comfortable conversation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
