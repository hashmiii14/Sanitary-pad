import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

interface AccordionProps {
  items: FAQItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-blush-deep rounded-2xl bg-white transition-all overflow-hidden"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl font-semibold text-charcoal pr-4">
                {item.question}
              </span>
              <div
                className={`p-1.5 rounded-full bg-blush text-plum transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-rose text-white' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm md:text-base text-charcoal-muted leading-relaxed border-t border-cream-200 animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
