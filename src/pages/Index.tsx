import React from 'react';
import HomePage from './HomePage';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ELECTROYALS - Expert consultants delivering innovative solutions" />
        <meta name="keywords" content="professional team, experts, consultants, solutions, services, projects" />
        <meta property="og:title" content="ELECTROYALS - Expert Consultants" />
        <meta property="og:description" content="A team of professionals dedicated to delivering high-quality solutions for your business." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ELECTROYALS - Expert Consultants" />
        <meta name="twitter:description" content="A team of professionals dedicated to delivering high-quality solutions for your business." />
      </Helmet>
      <HomePage />
    </>
  );
};

export default Index;
