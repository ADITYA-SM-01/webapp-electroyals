import React from "react";

const AboutHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-electroyals-50 dark:from-electroyals-navy dark:to-electroyals-navy pt-24 pb-16 md:pt-36 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-electroyals-100 dark:bg-electroyals-900/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-electroyals-200 dark:bg-electroyals-800/20 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-electroyals-500 to-electroyals-600">Our Team</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Learn about our professional team's journey, values, and vision for the future.
            We're dedicated to delivering excellence and innovation in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero; 