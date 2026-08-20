import React from 'react';
import { FlowLevel } from '../../types';
import { Droplet, Leaf, Sparkles, ShieldCheck } from 'lucide-react';

interface FlowBadgeProps {
  level: FlowLevel;
  label?: string;
  showDroplets?: boolean;
}

export const FlowBadge: React.FC<FlowBadgeProps> = ({ level, label, showDroplets = true }) => {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blush-soft border border-rose-light text-xs font-medium text-plum">
      {showDroplets && (
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Droplet
              key={idx}
              className={`w-3 h-3 ${
                idx < level ? 'fill-rose text-rose' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      )}
      {label && <span className="font-semibold">{label}</span>}
    </div>
  );
};

export const OrganicBadge: React.FC = () => (
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sage-light text-sage-dark border border-sage/40 text-xs font-semibold">
    <Leaf className="w-3 h-3" />
    100% Organic Cotton
  </span>
);

export const BestsellerBadge: React.FC = () => (
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-light text-rose-dark border border-rose/30 text-xs font-semibold">
    <Sparkles className="w-3 h-3" />
    Bestseller
  </span>
);

export const NewBadge: React.FC = () => (
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-plum text-cream text-xs font-semibold">
    <ShieldCheck className="w-3 h-3 text-rose-light" />
    New Arrival
  </span>
);
