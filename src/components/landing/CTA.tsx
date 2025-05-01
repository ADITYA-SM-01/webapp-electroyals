
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const CTA = () => {
  return (
    <section className="relative py-16 overflow-hidden md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-finance-500/20 to-blue-500/20 dark:from-finance-900/20 dark:to-blue-900/20"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-finance-300/30 dark:bg-finance-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/30 dark:bg-blue-700/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join thousands of users who are taking control of their finances with AI-powered insights and personalized advice.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-finance-500 to-blue-600 hover:from-finance-600 hover:to-blue-700">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="rounded-full">
                See Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
