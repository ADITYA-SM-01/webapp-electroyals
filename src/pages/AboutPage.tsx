import React from 'react';
import AboutHero from '../components/about/AboutHero';
import OurValues from '../components/about/OurValues';
import OurHistory from '../components/about/OurHistory';
import OurVision from '../components/about/OurVision';
import AboutSpaceBackground from '../components/about/AboutSpaceBackground';
import SpaceThemeLayout from '../components/layouts/SpaceThemeLayout';

const AboutPage = () => {
  return (
    <SpaceThemeLayout
      title="About Us | ELECTROYALS"
      description="Learn about our cosmic journey, interstellar values, and vision for the universal future."
    >
      {/* Custom space background for About page */}
      <AboutSpaceBackground />
      
      <AboutHero />
      <OurHistory />
      <OurValues />
      <OurVision />
    </SpaceThemeLayout>
  );
};

export default AboutPage; 