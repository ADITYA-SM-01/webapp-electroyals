
import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login | FuturoFlow</title>
        <meta name="description" content="Log in to your FuturoFlow account to access personalized financial insights and advice." />
      </Helmet>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left side - Form */}
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
            <LoginForm />
          </div>
        </div>
        
        {/* Right side - Image/Brand */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-finance-500 to-blue-600 text-white">
          <div className="max-w-xl mx-auto px-8 py-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Welcome back!</h2>
            <p className="text-finance-50 mb-8">
              Access your personalized financial dashboard and continue your journey to financial success.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Personalized Insights</h3>
                  <p className="text-sm text-finance-50">Get AI-powered recommendations tailored to your financial situation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Smart Goal Tracking</h3>
                  <p className="text-sm text-finance-50">Monitor your progress and stay on track with your financial goals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Financial Expert On-Demand</h3>
                  <p className="text-sm text-finance-50">Ask questions and get expert advice through our AI assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
