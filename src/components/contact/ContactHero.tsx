
import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      >
        <div className="absolute inset-0 bg-lawfirm-charcoal/90"></div>
      </div>
      <div className="content-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Get in touch with our team of legal professionals for expert assistance with your legal needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
