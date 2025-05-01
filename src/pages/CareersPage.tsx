import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet';
import CareersHero from '../components/careers/CareersHero';
import JobListings from '../components/careers/JobListings';
import CompanyBenefits from '../components/careers/CompanyBenefits';
import CompanyCulture from '../components/careers/CompanyCulture';

const CareersPage = () => {
  return (
    <>
      <Helmet>
        <title>Careers | ELECTROYALS</title>
        <meta name="description" content="Join our growing team of professionals and take your career to the next level." />
      </Helmet>
      <Navbar />
      <main>
        <CareersHero />
        <CompanyCulture />
        <CompanyBenefits />
        <JobListings />
      </main>
      <Footer />
    </>
  );
};

export default CareersPage; 