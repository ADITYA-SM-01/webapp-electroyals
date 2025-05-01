
import React from 'react';
import SignupForm from '../components/auth/SignupForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SignupPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up | FuturoFlow</title>
        <meta name="description" content="Create your FuturoFlow account and start your journey to financial success with AI-powered insights." />
      </Helmet>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left side - Brand message */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-finance-500 to-blue-600 text-white">
          <div className="max-w-xl mx-auto px-8 py-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Start your financial journey</h2>
            <p className="text-finance-50 mb-8">
              Join thousands of people using FuturoFlow to make smarter financial decisions and reach their goals faster.
            </p>
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Quick Setup</h3>
                </div>
                <p className="text-sm text-finance-50 ml-12">Create your account in minutes and start getting personalized advice</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Powerful Insights</h3>
                </div>
                <p className="text-sm text-finance-50 ml-12">Our AI analyzes your finances and provides actionable recommendations</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Bank-Level Security</h3>
                </div>
                <p className="text-sm text-finance-50 ml-12">Your data is protected with enterprise-grade encryption and security</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <Link to="/" className="inline-flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-finance-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  F
                </div>
                <span className="text-xl font-display font-bold tracking-tight">FuturoFlow</span>
              </Link>
            </div>
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
