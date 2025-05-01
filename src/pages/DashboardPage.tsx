
import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import OverviewDashboard from '../components/dashboard/OverviewDashboard';
import { Helmet } from 'react-helmet';

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | FuturoFlow</title>
        <meta name="description" content="Your personal financial dashboard with AI-powered insights and recommendations." />
      </Helmet>
      <DashboardLayout>
        <OverviewDashboard />
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;
