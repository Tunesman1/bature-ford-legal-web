
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, BookOpen, FileText } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="content-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title text-5xl mb-6">A Modern Firm with Traditional Values</h2>
            <p className="mb-6 text-gray-700 text-lg">
              At Bature & Ford LP, we combine traditional legal expertise with specialized knowledge in emerging digital fields. Our team delivers tailored legal strategies across conventional and innovative practice areas.
            </p>
            <p className="mb-6 text-gray-700 text-lg">
              We pride ourselves on our ability to anticipate challenges, provide clear guidance, and deliver results for clients ranging from individuals to multinational corporations and government bodies.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-lawfirm-burgundy hover:text-lawfirm-burgundy-dark font-medium transition-colors text-lg group"
            >
              Learn more about our firm
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-lawfirm-burgundy transform hover:translate-y-[-5px] transition-transform duration-300">
              <Briefcase size={42} className="text-lawfirm-burgundy mb-4" />
              <h3 className="text-xl font-serif font-medium mb-2">Corporate Excellence</h3>
              <p className="text-gray-600">Providing strategic legal guidance for businesses of all sizes.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-lawfirm-burgundy transform hover:translate-y-[-5px] transition-transform duration-300">
              <Users size={42} className="text-lawfirm-burgundy mb-4" />
              <h3 className="text-xl font-serif font-medium mb-2">Expert Team</h3>
              <p className="text-gray-600">Led by experienced attorneys with specialized knowledge.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-lawfirm-burgundy transform hover:translate-y-[-5px] transition-transform duration-300">
              <BookOpen size={42} className="text-lawfirm-burgundy mb-4" />
              <h3 className="text-xl font-serif font-medium mb-2">Legal Innovation</h3>
              <p className="text-gray-600">Pioneering approaches to emerging legal challenges.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-lawfirm-burgundy transform hover:translate-y-[-5px] transition-transform duration-300">
              <FileText size={42} className="text-lawfirm-burgundy mb-4" />
              <h3 className="text-xl font-serif font-medium mb-2">Comprehensive Service</h3>
              <p className="text-gray-600">Addressing diverse legal needs under one roof.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
