
import React from 'react';
import { Award, Shield, Scale } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-5xl">Why Choose Bature & Ford LP</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our commitment to excellence sets us apart as a leading legal firm.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-lawfirm-burgundy rounded-full p-4 inline-flex mb-6">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-4">Excellence</h3>
            <p className="text-gray-600">
              We maintain the highest standards of legal practice, delivering exceptional results and service.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-lawfirm-burgundy rounded-full p-4 inline-flex mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-4">Integrity</h3>
            <p className="text-gray-600">
              We uphold ethical principles and transparency in all client relationships and legal proceedings.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-lawfirm-burgundy rounded-full p-4 inline-flex mb-6">
              <Scale className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-4">Expertise</h3>
            <p className="text-gray-600">
              Our attorneys bring specialized knowledge and experience to every case we handle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
