
import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';

const ContactPage: React.FC = () => {
  return (
    <div>
      <ContactHero />
      
      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="content-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <LocationMap />
    </div>
  );
};

export default ContactPage;
