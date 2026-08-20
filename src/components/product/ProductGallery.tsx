import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  return (
    <div className="space-y-4">
      {/* Main Feature Display */}
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-blush-soft border border-blush-deep shadow-soft group">
        <img
          src={selectedImage}
          alt={productName}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-cream/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-plum border border-blush-deep">
          🔍 Click image to preview
        </div>
      </div>

      {/* Thumbnails list */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                selectedImage === img
                  ? 'border-rose scale-95 shadow-md'
                  : 'border-transparent opacity-75 hover:opacity-100 hover:scale-95'
              }`}
            >
              <img src={img} alt={`${productName} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
