
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Home } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lawfirm-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-4">
              <img 
                src="/lovable-uploads/2d50a29b-9cb6-49bd-84b8-0451218bdc2f.png" 
                alt="Bature & Ford LP Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Delivering high-level legal counsel to private clients, corporations, and government bodies with discretion and strategic insight.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-serif mb-4 text-lawfirm-cream">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-lawfirm-gold transition duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-lawfirm-gold transition duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-gray-300 hover:text-lawfirm-gold transition duration-300 text-sm">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-lawfirm-gold transition duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Practice Areas */}
          <div className="col-span-1">
            <h3 className="text-lg font-serif mb-4 text-lawfirm-cream">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/practice-areas#criminal-civil" className="text-gray-300 hover:text-lawfirm-gold transition duration-300 text-sm">
                  Criminal & Civil Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas#crypto" className="text-gray-300 hover:text-lawfirm-gold transition duration-300 text-sm">
                  Cryptocurrency & Blockchain
                </Link>
              </li>
              <li>
                <Link to="/practice-areas#privacy" className="text-gray-300 hover:text-lawfirm-gold transition duration-300 text-sm">
                  Data Privacy & Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/practice-areas#intellectual" className="text-gray-300 hover:text-lawfirm-gold transition duration-300 text-sm">
                  Intellectual Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-serif mb-4 text-lawfirm-cream">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Home size={18} className="mr-2 mt-1 text-lawfirm-gold" />
                <p className="text-sm text-gray-300">123 Legal Avenue, City Center, Lagos, Nigeria</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-lawfirm-gold" />
                <a href="tel:+234-123-456-7890" className="text-sm text-gray-300 hover:text-lawfirm-gold transition duration-300">
                  +234 123 456 7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-lawfirm-gold" />
                <a href="mailto:info@batureford.com" className="text-sm text-gray-300 hover:text-lawfirm-gold transition duration-300">
                  info@batureford.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Bature & Ford LP. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-lawfirm-gold mr-4 transition duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-gray-400 hover:text-lawfirm-gold transition duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
