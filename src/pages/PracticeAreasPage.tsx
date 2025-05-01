import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Gavel, FileText, FileSearch, BookOpen, Link as LinkIcon,
  Search, Home, Briefcase, Mail, Book 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PracticeAreasPage: React.FC = () => {
  const practiceAreas = [
    {
      id: "criminal-civil",
      title: "Criminal and Civil Law",
      description: "Our attorneys provide robust representation in criminal defense and civil litigation matters. We handle cases ranging from misdemeanors to felonies and complex civil disputes.",
      icon: Gavel,
      details: [
        "Criminal Defense",
        "Civil Litigation",
        "Dispute Resolution",
        "Contract Disputes",
        "Personal Injury"
      ]
    },
    {
      id: "energy",
      title: "Energy Law",
      description: "We advise clients on regulatory compliance, transactions, and dispute resolution in the energy sector, with expertise in both traditional and renewable energy matters.",
      icon: Home,
      details: [
        "Oil & Gas Regulations",
        "Renewable Energy Projects",
        "Energy Contracts",
        "Regulatory Compliance",
        "Environmental Assessments"
      ]
    },
    {
      id: "crypto",
      title: "Cryptocurrency & Blockchain Advisory",
      description: "Our specialized team provides guidance on cryptocurrency regulations, blockchain governance, and compliance with evolving legal frameworks in the digital asset space.",
      icon: FileSearch,
      details: [
        "Token Offerings",
        "Regulatory Compliance",
        "Exchange Regulations",
        "Smart Contract Review",
        "Risk Assessment"
      ]
    },
    {
      id: "web3",
      title: "Web3 & Decentralized Technologies",
      description: "We help clients navigate the legal complexities of decentralized applications, DAOs, and other Web3 technologies with forward-thinking legal strategies.",
      icon: LinkIcon,
      details: [
        "DAO Structures",
        "DeFi Regulations",
        "NFT Legal Frameworks",
        "Smart Contract Governance",
        "Metaverse Compliance"
      ]
    },
    {
      id: "digital-assets",
      title: "Digital Assets & Fintech Law",
      description: "Our practice encompasses the full spectrum of legal issues relating to digital assets, payment systems, and innovative financial technologies.",
      icon: Briefcase,
      details: [
        "Digital Asset Classification",
        "Payment Systems Compliance",
        "Banking Partnerships",
        "Investor Protection",
        "Cross-border Transactions"
      ]
    },
    {
      id: "intellectual",
      title: "Intellectual Property & Tech Licensing",
      description: "We protect your innovations and creative works through comprehensive IP strategies, including patents, trademarks, copyrights, and technology licensing agreements.",
      icon: FileText,
      details: [
        "Patent Applications",
        "Trademark Registration",
        "Copyright Protection",
        "Licensing Agreements",
        "IP Litigation"
      ]
    },
    {
      id: "privacy",
      title: "Data Privacy & Cybersecurity",
      description: "Our experts help organizations establish robust data protection frameworks, respond to breaches, and navigate complex privacy regulations across jurisdictions.",
      icon: Search,
      details: [
        "Privacy Policy Development",
        "Breach Response",
        "Compliance Programs",
        "Cross-border Data Transfers",
        "Privacy Impact Assessments"
      ]
    },
    {
      id: "digital-advisory",
      title: "Digital Advisory for Corporate & Government Clients",
      description: "We provide strategic guidance to corporations and government bodies on digital transformation, regulatory compliance, and technology adoption.",
      icon: Book,
      details: [
        "Digital Transformation Strategy",
        "Regulatory Navigation",
        "Technology Procurement",
        "Public-Private Partnerships",
        "Policy Development"
      ]
    },
    {
      id: "property",
      title: "Property & Real Estate Law",
      description: "Our real estate practice covers all aspects of property transactions, development projects, landlord-tenant matters, and property-related disputes.",
      icon: Home,
      details: [
        "Property Transactions",
        "Development Projects",
        "Leasing Agreements",
        "Land Use & Zoning",
        "Real Estate Litigation"
      ]
    },
    {
      id: "banking",
      title: "Banking and Finance Law",
      description: "We advise financial institutions and borrowers on complex financial transactions, regulatory compliance, and dispute resolution in the banking sector.",
      icon: BookOpen,
      details: [
        "Financial Regulations",
        "Loan Agreements",
        "Securities Offerings",
        "Corporate Finance",
        "Banking Disputes"
      ]
    }
  ];

  return (
    <div>
      {/* Enhanced Hero Section with image and overlay */}
      <section className="relative py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
        >
          <div className="absolute inset-0 bg-lawfirm-burgundy/90"></div>
        </div>
        <div className="content-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Our Practice Areas</h1>
            <p className="text-gray-100 text-lg">
              From traditional legal fields to cutting-edge digital technologies, our expertise spans diverse practice areas to meet your complex legal challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 md:py-24">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <Card 
                key={area.id} 
                id={area.id} 
                className="hover:shadow-xl transition-shadow border-t-4 border-lawfirm-burgundy"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-lawfirm-burgundy bg-opacity-10 p-3 rounded-full mr-4">
                      <area.icon className="h-8 w-8 text-lawfirm-burgundy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2 text-lawfirm-burgundy">
                        {area.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{area.description}</p>
                      <h4 className="text-lg font-medium mb-2 text-lawfirm-charcoal">Our Services:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {area.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Need Specialized Legal Assistance?</h2>
              <p className="text-gray-700 mb-6">
                Our team of experienced attorneys is ready to provide personalized guidance for your specific legal challenges. Whether you're facing a complex litigation issue or need advice on emerging technologies, we're here to help.
              </p>
              <Link to="/contact">
                <Button className="bg-lawfirm-burgundy hover:bg-lawfirm-burgundy-dark text-white">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-4 text-lawfirm-burgundy">Request Information</h3>
              <p className="text-gray-600 mb-4">
                Interested in learning more about a specific practice area? Contact us directly for detailed information.
              </p>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-lawfirm-burgundy mr-2" />
                <a 
                  href="mailto:info@batureford.com" 
                  className="text-lawfirm-burgundy hover:text-lawfirm-burgundy-dark underline"
                >
                  info@batureford.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreasPage;
