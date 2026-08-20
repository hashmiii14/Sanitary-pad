import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';
import { Button } from '../ui/Button';
import { Sparkles, ArrowRight, RotateCcw, Check, MessageSquare } from 'lucide-react';
import { Product } from '../../types';

export const PeriodQuiz: React.FC = () => {
  const { navigateToProduct, setCurrentView } = useCart();
  const [step, setStep] = useState(1);
  const [flow, setFlow] = useState<'light' | 'regular' | 'heavy' | 'overnight'>('regular');
  const [activity, setActivity] = useState<'workout' | 'office' | 'sleep' | 'all'>('all');
  const [skinSensitivity, setSkinSensitivity] = useState<'high' | 'normal'>('high');

  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  const handleNext = () => {
    if (step === 3) {
      let match = PRODUCTS[0]; // default Daily
      if (flow === 'overnight' || activity === 'sleep') {
        match = PRODUCTS[1]; // Ultra Night
      } else if (flow === 'heavy') {
        match = PRODUCTS[2]; // Heavy Flow Max
      } else if (flow === 'light') {
        match = PRODUCTS[3]; // Liners
      } else if (activity === 'workout') {
        match = PRODUCTS[5]; // Active-Flex
      }
      setRecommendedProduct(match);
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFlow('regular');
    setActivity('all');
    setSkinSensitivity('high');
    setRecommendedProduct(null);
  };

  return (
    <section className="py-16 md:py-24 bg-blush-soft border-y border-blush-deep/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-blush-deep shadow-editorial space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-light text-rose-dark text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>30-SECOND FLOW FINDER</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum">
              Find Your Perfect Organic Match
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto">
              Answer 3 quick questions about your flow and routine to receive your tailored organic pad recommendation.
            </p>
          </div>

          {/* Progress Indicator Bar */}
          {step <= 3 && (
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex items-center gap-2 text-xs font-bold ${
                    step >= s ? 'text-rose' : 'text-gray-300'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      step >= s ? 'bg-rose text-white' : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {s}
                  </span>
                  <span className="hidden sm:inline">
                    {s === 1 ? 'Flow Intensity' : s === 2 ? 'Daily Routine' : 'Skin Type'}
                  </span>
                  {s < 3 && <span className="text-gray-300 ml-1">•</span>}
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Flow */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-base font-bold text-plum text-center">
                1. How would you describe your typical peak flow days?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'light', title: 'Featherlight / Spotting', desc: 'Pre or post-period discharge' },
                  { id: 'regular', title: 'Moderate Regular Flow', desc: 'Normal daytime flow (Days 2-4)' },
                  { id: 'heavy', title: 'Heavy Peak Day Flow', desc: 'Frequent changes needed on Day 1-2' },
                  { id: 'overnight', title: 'Super Heavy / Night Leaks', desc: 'Leaks onto bedsheets overnight' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFlow(item.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      flow === item.id
                        ? 'border-rose bg-rose-light/60 text-plum font-semibold shadow-xs'
                        : 'border-blush-deep text-charcoal hover:border-rose/40'
                    }`}
                  >
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs text-charcoal-muted mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Activity */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-base font-bold text-plum text-center">
                2. What does your day usually look like during your period?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'workout', title: 'Active & Sports', desc: 'Gym, yoga, running, constant movement' },
                  { id: 'office', title: 'Desk & Travel', desc: 'Sitting at work, commuting, long meetings' },
                  { id: 'sleep', title: 'Rest & Overnight Sleep', desc: 'Lying in bed, side sleeping' },
                  { id: 'all', title: 'Mix of Everything', desc: 'Balanced lifestyle across all activities' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActivity(item.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      activity === item.id
                        ? 'border-rose bg-rose-light/60 text-plum font-semibold shadow-xs'
                        : 'border-blush-deep text-charcoal hover:border-rose/40'
                    }`}
                  >
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs text-charcoal-muted mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Skin Sensitivity */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-base font-bold text-plum text-center">
                3. Do you experience skin irritation or chafing from conventional pads?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'high', title: 'Yes, Sensitive Skin', desc: 'I frequently get red bumps, itching, or chafing' },
                  { id: 'normal', title: 'No, Normal Skin', desc: 'I just want clean organic ingredients' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSkinSensitivity(item.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      skinSensitivity === item.id
                        ? 'border-rose bg-rose-light/60 text-plum font-semibold shadow-xs'
                        : 'border-blush-deep text-charcoal hover:border-rose/40'
                    }`}
                  >
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs text-charcoal-muted mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result Step */}
          {step === 4 && recommendedProduct && (
            <div className="text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-sage-dark text-xs font-bold">
                <Check className="w-4 h-4" /> 100% MATCH FOUND
              </div>

              <div className="bg-blush-soft p-6 rounded-3xl border border-blush-deep flex flex-col md:flex-row items-center gap-6 text-left">
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  className="w-36 h-36 rounded-2xl object-cover bg-white border border-blush-deep shrink-0 shadow-soft"
                />
                <div className="space-y-2 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose">
                    {recommendedProduct.flowLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-plum">
                    {recommendedProduct.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {recommendedProduct.description}
                  </p>
                  <p className="text-xs font-semibold text-plum pt-1">
                    Dimensions: {recommendedProduct.dimensions}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigateToProduct(recommendedProduct)}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  View Product Specifications
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setCurrentView('contact')}
                  leftIcon={<MessageSquare className="w-4 h-4" />}
                >
                  Inquire About Luna
                </Button>
                <button
                  onClick={handleReset}
                  className="text-xs text-charcoal-muted hover:text-plum flex items-center gap-1 font-semibold underline px-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                </button>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          {step <= 3 && (
            <div className="flex items-center justify-between pt-4 border-t border-blush-deep">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-xs font-semibold text-charcoal-muted hover:text-plum"
                >
                  ← Back
                </button>
              ) : (
                <span />
              )}
              <Button
                variant="primary"
                onClick={handleNext}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                {step === 3 ? 'See My Custom Match' : 'Next Question'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
