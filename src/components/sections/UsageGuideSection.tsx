import React from 'react';
import { Heart, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export const UsageGuideSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-crimson">
            HYGIENE & USAGE GUIDE
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight">
            Designed for <span className="font-semibold text-brand-purple">simple, hygienic care</span>
          </h2>
          <p className="text-sm text-gray-600 font-light">
            Follow our recommended usage guidelines to stay 100% fresh, comfortable, and infection-free.
          </p>
        </div>

        {/* 2-Column Usage Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guide 1: Sanitary Napkins */}
          <div className="bg-[#F8F3FC] rounded-3xl p-8 border border-purple-100 space-y-6 shadow-md">
            <div className="flex items-center gap-3 border-b border-purple-200/60 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-700 to-pink-600 text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Makeasy Sanitary Napkin</h3>
                <span className="text-xs font-semibold text-brand-crimson">100% Pure Cotton XL+ Care</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Unwrap & Align</h4>
                  <p className="text-xs text-gray-600 font-light">
                    Remove the paper wrapper and unpeel the backing tape. Align the wide center against your underwear.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Secure Double Wings</h4>
                  <p className="text-xs text-gray-600 font-light">
                    Wrap the double flexing wings around the underside of your underwear to lock the pad in position.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Hassle-Free Disposal</h4>
                  <p className="text-xs text-gray-600 font-light">
                    Change every 4–6 hours. Roll the used pad inside the paper disposal pouch and discard in a trash bin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guide 2: HaPee Urination Device */}
          <div className="bg-[#F8F3FC] rounded-3xl p-8 border border-purple-100 space-y-6 shadow-md">
            <div className="flex items-center gap-3 border-b border-purple-200/60 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-800 text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Makeasy HaPee Urination Device</h3>
                <span className="text-xs font-semibold text-brand-crimson">Stand & Pee Travel Funnel</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-crimson text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Pop Open Funnel</h4>
                  <p className="text-xs text-gray-600 font-light">
                    Gently press the sides of the flat-packed cardboard funnel to expand it into 3D funnel shape.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-crimson text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Position & Stream</h4>
                  <p className="text-xs text-gray-600 font-light">
                    Place the wider open end against your body while standing naturally. Point the outlet downward into the toilet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-crimson text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Single-Use Throw Away</h4>
                  <p className="text-xs text-gray-600 font-light">
                    After use, toss the biodegradable funnel into the waste bin. No water needed, zero contact with dirty seats!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
