
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Bature Ibrahim, Esq.",
      role: "Principal Partner",
      image: "/placeholder.svg",
      bio: "Bature Ibrahim, highly experienced, leads our firm with expertise in corporate law, litigation, and digital asset regulation. His strategic approach has guided numerous high-profile cases to success."
    },
    {
      name: "Adamu Khalifah, Esq.",
      role: "Junior Associate",
      image: "/placeholder.svg",
      bio: "Adamu specializes in cryptocurrency regulations and blockchain technology law. His cutting-edge knowledge helps clients navigate the complex intersection of technology and legal compliance."
    },
    {
      name: "Abdullah Shittabbey, Esq.",
      role: "Junior Associate",
      image: "/placeholder.svg",
      bio: "Abdullah focuses on intellectual property protection and civil litigation. His analytical skills and attention to detail make him a valuable asset for clients facing complex legal challenges."
    }
  ];

  const firmValues = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in our legal practice, delivering exceptional results for our clients."
    },
    {
      title: "Integrity",
      description: "We uphold ethical principles and transparency in all client relationships and legal proceedings."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to address evolving legal challenges."
    },
    {
      title: "Discretion",
      description: "We handle sensitive matters with the utmost confidentiality and professional care."
    }
  ];

  return (
    <div>
      {/* Enhanced Hero Section with image and overlay */}
      <section className="relative py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
        >
          <div className="absolute inset-0 bg-lawfirm-charcoal/85"></div>
        </div>
        <div className="content-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">About Our Firm</h1>
            <p className="text-gray-300 text-lg">
              Bature & Ford LP delivers high-level legal counsel to private clients, corporations, and government bodies. We combine discretion, precision, and strategic insight across complex legal matters.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded with a vision to bridge traditional legal expertise with emerging digital technologies, Bature & Ford LP has established itself as a forward-thinking law firm dedicated to excellence in legal practice.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with a commitment to providing comprehensive legal services across conventional areas while developing specialized expertise in cryptocurrency, blockchain, and digital asset regulation.
              </p>
              <p className="text-gray-700">
                Today, we serve a diverse clientele ranging from individuals and businesses to government agencies, maintaining our founding principles of integrity, innovation, and client-focused service.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-medium text-lawfirm-burgundy mb-6">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {firmValues.map((value, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow-sm">
                    <h4 className="text-lg font-serif font-medium text-lawfirm-burgundy mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our talented team of legal professionals dedicated to providing exceptional service and expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-1 text-lawfirm-burgundy">{member.name}</h3>
                  <p className="text-lawfirm-charcoal font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Bature & Ford LP</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and client satisfaction sets us apart from other law firms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-lawfirm-burgundy">
              <h3 className="text-xl font-serif font-medium mb-3 text-lawfirm-burgundy">Specialized Expertise</h3>
              <p className="text-gray-600">
                Our attorneys possess deep knowledge in both traditional legal areas and emerging technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-lawfirm-burgundy">
              <h3 className="text-xl font-serif font-medium mb-3 text-lawfirm-burgundy">Client-Centric Approach</h3>
              <p className="text-gray-600">
                We prioritize understanding your unique needs and developing tailored legal strategies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-lawfirm-burgundy">
              <h3 className="text-xl font-serif font-medium mb-3 text-lawfirm-burgundy">Proven Results</h3>
              <p className="text-gray-600">
                Our track record demonstrates successful outcomes across diverse legal challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-lawfirm-burgundy">
              <h3 className="text-xl font-serif font-medium mb-3 text-lawfirm-burgundy">Forward-Thinking</h3>
              <p className="text-gray-600">
                We anticipate legal developments and prepare clients for emerging challenges and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-lawfirm-burgundy text-white">
        <div className="content-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our legal team can assist with your specific needs and challenges.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-lawfirm-burgundy hover:bg-lawfirm-cream px-8 py-6 text-lg font-medium">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
