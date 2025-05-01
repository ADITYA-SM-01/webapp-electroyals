import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-electroyals-600 to-electroyals-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work with our expert team?
          </h2>
          <p className="text-lg text-electroyals-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our professional team can help you achieve your business goals and transform your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="rounded-full bg-white text-electroyals-700 hover:bg-electroyals-50">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-electroyals-700/50">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-electroyals-800 to-transparent opacity-30"></div>
    </section>
  );
};

export default CallToAction; 