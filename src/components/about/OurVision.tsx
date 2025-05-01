import React from "react";
import { Rocket } from "lucide-react";

const OurVision = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-electroyals-100 dark:bg-electroyals-900/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-electroyals-200 dark:bg-electroyals-800/30 rounded-full blur-xl"></div>
            
            <div className="bg-gradient-to-br from-electroyals-500 to-electroyals-600 p-1 rounded-2xl shadow-lg relative z-10">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-electroyals-100 dark:bg-electroyals-900/30 rounded-full flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-electroyals-600 dark:text-electroyals-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  To be the global leader in innovative solutions that transform businesses and create lasting value for our clients.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We envision a future where technology seamlessly enhances human potential, and we're committed to making that vision a reality.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Looking to the Future
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our vision guides our strategy and inspires us to continually innovate and push boundaries. We're focused on creating solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-electroyals-500 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to staying at the forefront of technological advancements and industry trends.
                </p>
              </div>
              
              <div className="border-l-4 border-electroyals-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Impact</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We aim to expand our reach and make a positive impact on businesses around the world.
                </p>
              </div>
              
              <div className="border-l-4 border-electroyals-700 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sustainable Growth</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We're building for the long term, with sustainable practices and responsible business models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision; 