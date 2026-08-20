import React from 'react';
import { useCart } from '../../context/CartContext';
import { ArrowRight, Moon, Sun, Flame, Feather, Gift } from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  const { setCurrentView } = useCart();

  const categories = [
    {
      id: 'regular',
      name: 'Regular Flow',
      subtitle: '240mm Ultra-Thin',
      desc: 'Invisible daily protection for moderate flow days.',
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      badge: 'Everyday'
    },
    {
      id: 'heavy',
      name: 'Heavy Flow Max',
      subtitle: '280mm Peak Day',
      desc: 'High-capacity rapid absorption for heavy days.',
      icon: <Flame className="w-5 h-5 text-rose" />,
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
      badge: 'Peak Flow'
    },
    {
      id: 'overnight',
      name: 'Ultra Night Wings',
      subtitle: '330mm Flared Tail',
      desc: '12-hour 360° leak protection for deep sleep.',
      icon: <Moon className="w-5 h-5 text-indigo-400" />,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      badge: '360° Sleep'
    },
    {
      id: 'liners',
      name: 'Air-Touch Liners',
      subtitle: '155mm Featherlight',
      desc: 'Micro-breathable liners for daily freshness.',
      icon: <Feather className="w-5 h-5 text-sage-dark" />,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      badge: 'Daily'
    },
    {
      id: 'starter-kits',
      name: 'Cycle Starter Boxes',
      subtitle: 'Full Monthly Supply',
      desc: 'Curated box featuring Day, Night & Liners.',
      icon: <Gift className="w-5 h-5 text-purple-500" />,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      badge: 'Complete Set'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-rose uppercase">
            EXPLORE BY FLOW & NEED
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum">
            Tailored Care for Every Stage of Your Cycle
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            From featherlight daily liners to 330mm overnight coverage, find the exact absorbent pad built for your rhythm.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setCurrentView('products')}
              className="group bg-white rounded-3xl border border-blush-deep/60 p-5 shadow-soft hover:shadow-editorial hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-blush-soft">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-plum border border-blush-deep">
                    {cat.badge}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  {cat.icon}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-dark">
                    {cat.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-plum group-hover:text-rose transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-blush-soft flex items-center justify-between text-xs font-bold text-plum group-hover:text-rose">
                <span>Explore Category</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
