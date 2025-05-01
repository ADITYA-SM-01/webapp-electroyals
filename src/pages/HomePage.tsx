import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import TeamHighlights from '../components/landing/TeamHighlights';
import FeaturedProjects from '../components/landing/FeaturedProjects';
import Testimonials from '../components/landing/Testimonials';
import CallToAction from '../components/landing/CallToAction';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>ELECTROYALS | Expert Consultants</title>
        <meta name="description" content="A team of professionals dedicated to delivering high-quality solutions for your business." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TeamHighlights />
        <FeaturedProjects />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
