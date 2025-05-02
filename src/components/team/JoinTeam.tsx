import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import SectionLoading from "../ui/SectionLoading";

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
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLoading customDelay={1200}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Join Our Growing Team
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. If you're passionate about innovation, 
                problem-solving, and creating exceptional work, we want to hear from you.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                Why work with us?
              </h3>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/careers">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-600/90 hover:to-purple-700/90 text-white backdrop-blur-sm">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-900/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-900/30 rounded-full blur-xl"></div>
              
              <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-xl p-8 relative z-10 border border-indigo-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Team collaboration" 
                  className="rounded-xl w-full h-auto mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 border-l-4 border-blue-500/80 pl-3">
                    <h4 className="text-lg font-semibold text-white">Collaborative Culture</h4>
                  </div>
                  <div className="flex items-center space-x-3 border-l-4 border-indigo-500/80 pl-3">
                    <h4 className="text-lg font-semibold text-white">Innovation-Driven</h4>
                  </div>
                  <div className="flex items-center space-x-3 border-l-4 border-purple-500/80 pl-3">
                    <h4 className="text-lg font-semibold text-white">Professional Growth</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionLoading>
      </div>
    </section>
  );
};

export default JoinTeam; 