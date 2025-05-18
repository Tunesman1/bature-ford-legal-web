
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import WhatsAppWidget from './WhatsAppWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Remove top padding on homepage for full-width hero
  const isHomePage = location.pathname === '/';
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${isHomePage ? '' : 'pt-4'}`}>{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
