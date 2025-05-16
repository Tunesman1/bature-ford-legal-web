
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gavel, FileText, FileSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PracticeAreasSection: React.FC = () => {
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
  );
};

export default PracticeAreasSection;
