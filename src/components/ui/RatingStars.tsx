import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md';
}

export const RatingStars: React.FC<RatingStarsProps> = ({ rating, reviewCount, size = 'sm' }) => {
  const starSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center text-amber-500">
        {Array.from({ length: 5 }).map((_, idx) => {
          const filled = idx < Math.floor(rating);
          const half = idx === Math.floor(rating) && rating % 1 >= 0.5;
          return (
            <Star
              key={idx}
              className={`${starSize} ${
                filled || half ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
              }`}
            />
          );
        })}
      </div>
      <span className="text-xs font-semibold text-charcoal ml-0.5">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-xs text-charcoal-light">({reviewCount})</span>
      )}
    </div>
  );
};
