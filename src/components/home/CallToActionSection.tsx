
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-lawfirm-burgundy opacity-90"></div>
      <div className="content-container relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-white">Ready to Discuss Your Legal Needs?</h2>
        <p className="text-gray-100 max-w-2xl mx-auto mb-10 text-lg">
          Our team of experienced attorneys is ready to provide the guidance and representation you need. Contact us today for a consultation.
        </p>
        <Link to="/contact">
          <Button className="bg-white text-lawfirm-burgundy hover:bg-lawfirm-cream px-10 py-7 text-xl font-medium shadow-lg hover:shadow-xl transition-all">
            Schedule a Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
