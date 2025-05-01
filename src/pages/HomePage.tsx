
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Gavel, FileText, Users, BookOpen, FileSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage: React.FC = () => {
  const featuredPracticeAreas = [
    {
      title: "Criminal & Civil Law",
      description: "Comprehensive legal support for criminal defense and civil litigation matters.",
      icon: Gavel,
      link: "/practice-areas#criminal-civil"
    },
    {
      title: "Crypto & Blockchain",
      description: "Expert guidance on cryptocurrency regulations, blockchain governance, and digital asset management.",
      icon: FileSearch,
      link: "/practice-areas#crypto"
    },
    {
      title: "Intellectual Property",
      description: "Protection for your innovations, brands, and creative works in traditional and digital spaces.",
      icon: FileText,
      link: "/practice-areas#intellectual"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lawfirm-burgundy to-lawfirm-burgundy-dark text-white">
        <div className="content-container py-20 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Strategic Legal Solutions for Complex Challenges
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Bature & Ford delivers high-level legal counsel blending traditional expertise with cutting-edge knowledge in digital technologies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button className="bg-white text-lawfirm-burgundy hover:bg-lawfirm-cream px-6 py-6 text-base">
                  Free Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-base">
                  About Our Firm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">A Modern Firm with Traditional Values</h2>
              <p className="mb-6 text-gray-700">
                At Bature & Ford, we combine traditional legal expertise with specialized knowledge in emerging digital fields. Our team delivers tailored legal strategies across conventional and innovative practice areas.
              </p>
              <p className="mb-6 text-gray-700">
                We pride ourselves on our ability to anticipate challenges, provide clear guidance, and deliver results for clients ranging from individuals to multinational corporations and government bodies.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-lawfirm-burgundy hover:text-lawfirm-burgundy-dark font-medium transition-colors"
              >
                Learn more about our firm
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-lawfirm-burgundy">
                <Briefcase size={36} className="text-lawfirm-burgundy mb-4" />
                <h3 className="text-lg font-serif font-medium mb-2">Corporate Excellence</h3>
                <p className="text-sm text-gray-600">Providing strategic legal guidance for businesses of all sizes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-lawfirm-burgundy">
                <Users size={36} className="text-lawfirm-burgundy mb-4" />
                <h3 className="text-lg font-serif font-medium mb-2">Expert Team</h3>
                <p className="text-sm text-gray-600">Led by experienced attorneys with specialized knowledge.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-lawfirm-burgundy">
                <BookOpen size={36} className="text-lawfirm-burgundy mb-4" />
                <h3 className="text-lg font-serif font-medium mb-2">Legal Innovation</h3>
                <p className="text-sm text-gray-600">Pioneering approaches to emerging legal challenges.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-lawfirm-burgundy">
                <FileText size={36} className="text-lawfirm-burgundy mb-4" />
                <h3 className="text-lg font-serif font-medium mb-2">Comprehensive Service</h3>
                <p className="text-sm text-gray-600">Addressing diverse legal needs under one roof.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Practice Areas */}
      <section className="py-16 md:py-24">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Practice Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From traditional legal fields to cutting-edge digital technologies, our expertise spans diverse practice areas to meet your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPracticeAreas.map((area, index) => (
              <Card key={index} className="border-t-4 border-lawfirm-burgundy hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <area.icon className="h-12 w-12 text-lawfirm-burgundy mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Link 
                    to={area.link} 
                    className="inline-flex items-center text-lawfirm-burgundy hover:text-lawfirm-burgundy-dark font-medium transition-colors"
                  >
                    Learn more 
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/practice-areas">
              <Button className="bg-lawfirm-burgundy hover:bg-lawfirm-burgundy-dark text-white">
                View All Practice Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-lawfirm-charcoal text-white">
        <div className="content-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our team of experienced attorneys is ready to provide the guidance and representation you need. Contact us today for a consultation.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-lawfirm-burgundy hover:bg-lawfirm-cream px-8 py-6 text-lg font-medium">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
