import React from 'react';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import TeamHighlights from '../components/landing/TeamHighlights';
import FeaturedProjects from '../components/landing/FeaturedProjects';
import Testimonials from '../components/landing/Testimonials';
import CallToAction from '../components/landing/CallToAction';
import SpaceThemeLayout from '../components/layouts/SpaceThemeLayout';

const HomePage = () => {
  return (
    <SpaceThemeLayout
      title="ELECTROYALS | Beyond Boundaries"
      description="Pioneering the next generation of solutions, exploring new frontiers to help your business reach cosmic potential."
    >
      <Hero />
      <Services />
      <TeamHighlights />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
    </SpaceThemeLayout>
  );
};

export default HomePage;
