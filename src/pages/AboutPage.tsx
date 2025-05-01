import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet';
import AboutHero from '../components/about/AboutHero';
import OurValues from '../components/about/OurValues';
import OurHistory from '../components/about/OurHistory';
import OurVision from '../components/about/OurVision';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | ELECTROYALS</title>
        <meta name="description" content="Learn about our professional team's journey, values, and vision for the future." />
      </Helmet>
      <Navbar />
      <main>
        <AboutHero />
        <OurHistory />
        <OurValues />
        <OurVision />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage; 