import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServiceProcess from '../components/services/ServiceProcess';
import ClientsSection from '../components/services/ClientsSection';
import SpaceThemeLayout from '../components/layouts/SpaceThemeLayout';

const ServicesPage = () => {
  return (
    <SpaceThemeLayout
      title="Interstellar Services | ELECTROYALS"
      description="Explore our cosmic range of advanced services designed to propel your business beyond traditional boundaries."
    >
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ClientsSection />
    </SpaceThemeLayout>
  );
};

export default ServicesPage; 