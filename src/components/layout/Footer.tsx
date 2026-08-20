import React from 'react';
import { useCart } from '../../context/CartContext';
import { PageView } from '../../types';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView } = useCart();

  const handleNavClick = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#2A0548] to-[#1F0335] text-white pt-16 pb-8 border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand Info & Script Logo */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none"
            >
              <span className="font-script text-4xl text-white block">Makeasy</span>
              <span className="text-[10px] tracking-widest uppercase font-montserrat text-pink-300 block">
                LUNA Period Care & Hygiene
              </span>
            </button>

            <p className="text-xs text-purple-200/80 leading-relaxed font-light max-w-sm">
              Makeasy is a women hygiene and healthcare brand established with the desire to revolutionize period care, daily hygiene, and comfort for women everywhere.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#instagram" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links (matching Reference Image 1) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-pink-300 border-b border-purple-800/60 pb-2 inline-block">
              Useful Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-purple-100/90 font-light pt-1">
              <button onClick={() => handleNavClick('home')} className="text-left hover:text-white transition-colors py-1">
                Home
              </button>
              <button onClick={() => handleNavClick('about')} className="text-left hover:text-white transition-colors py-1">
                Privacy Policy
              </button>
              <button onClick={() => handleNavClick('about')} className="text-left hover:text-white transition-colors py-1">
                About Us
              </button>
              <button onClick={() => handleNavClick('about')} className="text-left hover:text-white transition-colors py-1">
                Terms of Services
              </button>
              <button onClick={() => handleNavClick('products')} className="text-left hover:text-white transition-colors py-1">
                Our Products
              </button>
              <button onClick={() => handleNavClick('about')} className="text-left hover:text-white transition-colors py-1">
                Refund Policy
              </button>
              <button onClick={() => handleNavClick('products')} className="text-left hover:text-white transition-colors py-1">
                Events
              </button>
              <button onClick={() => handleNavClick('contact')} className="text-left hover:text-white transition-colors py-1">
                Shipping Policy
              </button>
            </div>
          </div>

          {/* Column 3: Contact Us (matching Reference Image 1) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-pink-300 border-b border-purple-800/60 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs text-purple-100/90 font-light pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Web Office 101/B, New Apollo Area, Railway Road NIT Faridabad - 121001 India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <span>+91-888-956-781</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <span>care@makeasyhygiene.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="border-t border-purple-900/60 pt-6 text-center text-[11px] text-purple-300/70 font-light flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Makeasy LUNA Period Care. All Rights Reserved.</p>
          <p>Designed with ❤️ for Women Hygiene & Care</p>
        </div>
      </div>
    </footer>
  );
};
