
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-lawfirm-charcoal/95 to-lawfirm-burgundy/90"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="content-container">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
              Strategic Legal <span className="text-lawfirm-gold">Solutions</span> for Complex Challenges
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Bature & Ford LP delivers high-level legal counsel blending traditional expertise with cutting-edge knowledge in digital technologies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button size="lg" className="bg-lawfirm-gold hover:bg-white text-lawfirm-charcoal w-full sm:w-auto px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                  Free Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-2 border-white text-white bg-lawfirm-burgundy/40 hover:bg-white/20 w-full sm:w-auto px-8 py-6 text-base font-semibold">
                  About Our Firm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
    </section>
  );
};

export default HeroSection;
