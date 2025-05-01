
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import FAQ from '../components/pricing/FAQ';
import CTA from '../components/landing/CTA';
import { Helmet } from 'react-helmet';

const FaqPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | FuturoFlow</title>
        <meta name="description" content="Find answers to commonly asked questions about FuturoFlow's AI-powered financial advice platform." />
      </Helmet>
      <Navbar />
      <main>
        <div className="pt-24 pb-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Find answers to the most common questions about our platform, features, and services.
              </p>
            </div>
          </div>
        </div>
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default FaqPage;
