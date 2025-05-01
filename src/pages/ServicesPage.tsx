import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServiceProcess from '../components/services/ServiceProcess';
import ClientsSection from '../components/services/ClientsSection';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | ELECTROYALS</title>
        <meta name="description" content="Explore our comprehensive range of professional services designed to help your business succeed." />
      </Helmet>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServiceProcess />
        <ClientsSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage; 