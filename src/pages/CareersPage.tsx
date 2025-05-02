import React from 'react';
import CareersHero from '../components/careers/CareersHero';
import JobListings from '../components/careers/JobListings';
import CompanyBenefits from '../components/careers/CompanyBenefits';
import CompanyCulture from '../components/careers/CompanyCulture';
import SpaceThemeLayout from '../components/layouts/SpaceThemeLayout';

const CareersPage = () => {
  return (
    <SpaceThemeLayout
      title="Interstellar Careers | ELECTROYALS"
      description="Launch your career into orbit with our team of cosmic innovators pushing the boundaries of what's possible."
    >
      <CareersHero />
      <CompanyCulture />
      <CompanyBenefits />
      <JobListings />
    </SpaceThemeLayout>
  );
};

export default CareersPage; 