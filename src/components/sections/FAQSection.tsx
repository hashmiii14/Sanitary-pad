import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What makes Makeasy Classic Care Pads different from traditional pads?',
      answer:
        'Makeasy Classic Care Sanitary Napkins use 100% pure cotton cover sheets instead of synthetic plastic top-meshes. Plastic meshes trap moisture and cause painful friction rashes, whereas Makeasy cotton top-sheets allow natural airflow, preventing skin irritation, itching, and odors.',
    },
    {
      question: 'What is the Makeasy HaPee Urination Device and how does it prevent UTIs?',
      answer:
        'Makeasy HaPee is an innovative, single-use female urination funnel made from coated waterproof paperboard. It allows women to stand and pee in unhygienic public restrooms (airports, railway stations, car trips, offices), completely eliminating contact with dirty toilet seats where bacteria cause Urinary Tract Infections (UTIs).',
    },
    {
      question: 'Are Makeasy products safe for sensitive skin and allergy-prone women?',
      answer:
        'Yes! All Makeasy pads and liners are dermatologist-tested, hypoallergenic, and free from elemental chlorine bleaching, artificial perfumes, parabens, and toxic dyes.',
    },
    {
      question: 'How many hours can I wear a Makeasy Classic Care XL+ Pad?',
      answer:
        'We recommend changing your pad every 4 to 6 hours during daytime flow to maintain peak hygiene and skin health. For overnight sleep, our Makeasy Ultra Night Wings (330mm) provides continuous 12-hour leak protection.',
    },
    {
      question: 'How are Makeasy products packaged for disposal?',
      answer:
        'Each Makeasy pad and PeeDevice is individually paper-wrapped. Simply roll the used product inside its wrapper or disposal pouch and discard in a waste bin.',
    },
  ];

  return (
    <section className="py-20 bg-[#F6F0FA] relative overflow-hidden border-b border-purple-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-brand-purple border border-purple-200">
            <HelpCircle className="w-3.5 h-3.5 text-brand-pink" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight">
            Got questions? <span className="font-semibold text-brand-purple">We’ve got answers.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-purple-100 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-gray-900 text-sm sm:text-base hover:text-brand-purple transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-crimson shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 font-light leading-relaxed border-t border-purple-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
