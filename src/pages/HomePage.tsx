
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import PracticeAreasSection from '@/components/home/PracticeAreasSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToActionSection from '@/components/home/CallToActionSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
