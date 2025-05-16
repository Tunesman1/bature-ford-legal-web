
import React from 'react';

const LocationMap: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="content-container">
        <h2 className="section-title text-center mb-10">Our Location</h2>
        <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
          <div className="relative w-full h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504528.75276527595!2d6.9223735176272045!3d8.913865333716934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e6157ce3eeda9%3A0x32af1c368be32dfc!2sFederal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1746108323802!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Bature & Ford LP Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
