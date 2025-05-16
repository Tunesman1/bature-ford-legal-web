
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Gavel, FileText, Users, BookOpen, FileSearch, Award, Shield, Scale } from 'lucide-react';
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

  const testimonials = [
    {
      text: "Bature & Ford LP provided exceptional guidance through a complex litigation case. Their strategic thinking and attention to detail were invaluable.",
      author: "Sarah Johnson",
      position: "CEO, Tech Innovations Ltd"
    },
    {
      text: "The team's expertise in cryptocurrency regulations helped our startup navigate the evolving legal landscape with confidence.",
      author: "Michael Chen",
      position: "Founder, BlockChain Solutions"
    },
    {
      text: "Their comprehensive approach to intellectual property protection ensured our creative assets remained secure during international expansion.",
      author: "David Williams",
      position: "Creative Director, Design Works Inc."
    }
  ];

  return (
    <div>
      {/* Enhanced Hero Section with better styling and new image */}
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

      {/* About Section - With improved card design */}
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

      {/* Featured Practice Areas - With improved card design */}
      <section className="py-20 md:py-28">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="section-title text-5xl">Our Practice Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From traditional legal fields to cutting-edge digital technologies, our expertise spans diverse practice areas to meet your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {featuredPracticeAreas.map((area, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-shadow overflow-hidden group">
                <div className="h-2 bg-lawfirm-burgundy w-full"></div>
                <CardContent className="pt-8 p-8">
                  <div className="bg-lawfirm-burgundy bg-opacity-10 p-4 rounded-full inline-block mb-6">
                    <area.icon className="h-10 w-10 text-lawfirm-burgundy" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <Link 
                    to={area.link} 
                    className="inline-flex items-center text-lawfirm-burgundy hover:text-lawfirm-burgundy-dark font-medium transition-colors group"
                  >
                    Learn more 
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/practice-areas">
              <Button className="bg-lawfirm-burgundy hover:bg-lawfirm-burgundy-dark text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                View All Practice Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Section - Why Choose Us */}
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

      {/* New Section - Testimonials */}
      <section className="py-20 md:py-28 bg-lawfirm-charcoal text-white">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Client Testimonials</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See what our clients say about our services and commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="mb-4 text-lawfirm-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-gray-100 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-lg">{testimonial.author}</p>
                  <p className="text-gray-300 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Improved design */}
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
    </div>
  );
};

export default HomePage;
