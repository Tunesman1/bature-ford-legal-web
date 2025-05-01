
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <div className="bg-lawfirm-burgundy text-white p-1 mr-1">
                  <span className="font-serif font-bold text-2xl md:text-3xl tracking-wider">B</span>
                </div>
                <div className="bg-lawfirm-burgundy text-white p-1">
                  <span className="font-serif font-bold text-2xl md:text-3xl tracking-wider">F</span>
                </div>
              </div>
              <div className="hidden md:block ml-4 border-l-2 border-lawfirm-burgundy pl-4">
                <span className="font-serif text-lawfirm-charcoal text-xl">BATURE & FORD LP</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lawfirm-charcoal hover:text-lawfirm-burgundy px-3 py-2 text-sm font-medium transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="ml-8 bg-lawfirm-burgundy hover:bg-lawfirm-burgundy-dark text-white px-4 py-2 rounded text-sm font-medium transition duration-300"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-lawfirm-burgundy inline-flex items-center justify-center p-2 rounded-md"
              onClick={toggleMobileMenu}
              aria-label="Main menu"
              aria-expanded="false"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden bg-white transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lawfirm-charcoal hover:text-lawfirm-burgundy block px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-lawfirm-burgundy transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center mt-4 bg-lawfirm-burgundy hover:bg-lawfirm-burgundy-dark text-white px-4 py-2 rounded text-base font-medium transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
