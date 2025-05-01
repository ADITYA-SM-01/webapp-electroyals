
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PricingPlans from '../components/pricing/PricingPlans';
import FAQ from '../components/pricing/FAQ';
import CTA from '../components/landing/CTA';
import { Helmet } from 'react-helmet';

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | FuturoFlow</title>
        <meta name="description" content="Choose the perfect FuturoFlow plan for your financial needs. Simple, transparent pricing with no hidden fees." />
      </Helmet>
      <Navbar />
      <main>
        <div className="pt-20"> {/* Add padding to account for fixed navbar */}
          <PricingPlans />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
