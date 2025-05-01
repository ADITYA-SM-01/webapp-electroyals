import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-electroyals-50 dark:from-electroyals-navy dark:to-electroyals-navy overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-electroyals-100 dark:bg-electroyals-900/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-electroyals-200 dark:bg-electroyals-800/20 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-electroyals-500 to-electroyals-600">Expert Team</span> Delivering Exceptional Solutions
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We are a team of dedicated professionals with expertise across multiple disciplines, committed to helping your business reach its full potential.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-electroyals-500 to-electroyals-600 hover:from-electroyals-600 hover:to-electroyals-700 text-electroyals-navy">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full border-electroyals-500 text-electroyals-600 dark:text-electroyals-400 hover:bg-electroyals-50 dark:hover:bg-electroyals-900/20">
                  Our Services
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-transparent border-2 border-white dark:border-gray-900 flex items-center justify-center overflow-hidden">
                    <img src="/images/electroyals-icon.png" alt="Team member" className="w-8 h-8 object-cover" />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Trusted by 100+ clients</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-electroyals-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-gray-500">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Illustration */}
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-200 dark:border-gray-700 animate-float">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/images/team-photo.jpg" 
                  alt="ELECTROYALS" 
                  className="w-full h-auto object-cover rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";
                  }}
                />
              </div>
              <div className="mt-4 p-4 bg-electroyals-50 dark:bg-electroyals-900/30 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center overflow-hidden">
                      <img src="/images/electroyals-icon.png" alt="ELECTROYALS" className="w-12 h-12 object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Jane Doe, CEO</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">"Our mission is to deliver excellence in everything we do, while building lasting relationships with our clients."</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-12 w-44 h-44 bg-electroyals-200 dark:bg-electroyals-800/30 rounded-full blur-2xl"></div>
            <div className="hidden md:block absolute -top-20 -left-20 w-72 h-72 bg-electroyals-100 dark:bg-electroyals-900/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
