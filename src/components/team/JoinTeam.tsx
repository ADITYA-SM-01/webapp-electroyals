import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const benefits = [
  "Competitive salary and benefits package",
  "Flexible work arrangements and remote options",
  "Continuous learning and professional development",
  "Collaborative and innovative work environment",
  "Work on exciting projects with cutting-edge technologies",
  "Make a real impact with your skills and ideas"
];

const JoinTeam = () => {
  return (
    <section className="py-16 bg-electroyals-50 dark:bg-electroyals-navy/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. If you're passionate about innovation, 
              problem-solving, and creating exceptional work, we want to hear from you.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Why work with us?
            </h3>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-electroyals-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/careers">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-electroyals-500 to-electroyals-600 hover:from-electroyals-600 hover:to-electroyals-700 text-electroyals-navy">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-electroyals-100 dark:bg-electroyals-900/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-electroyals-200 dark:bg-electroyals-800/30 rounded-full blur-xl"></div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Team collaboration" 
                className="rounded-xl w-full h-auto mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-3 border-l-4 border-electroyals-500 pl-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Collaborative Culture</h4>
                </div>
                <div className="flex items-center space-x-3 border-l-4 border-electroyals-600 pl-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Innovation-Driven</h4>
                </div>
                <div className="flex items-center space-x-3 border-l-4 border-electroyals-700 pl-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Professional Growth</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam; 