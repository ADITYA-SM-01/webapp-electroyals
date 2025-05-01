import React from "react";
import { 
  DollarSign, 
  Clock, 
  GraduationCap, 
  Heart, 
  Globe, 
  Coffee
} from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8 text-green-500" />,
    title: "Competitive Compensation",
    description: "We offer competitive salaries and comprehensive benefits packages."
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    title: "Flexible Work Options",
    description: "Work from home options and flexible scheduling to support work-life balance."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
    title: "Professional Development",
    description: "Ongoing training, learning opportunities, and career growth pathways."
  },
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for you and your family."
  },
  {
    icon: <Globe className="h-8 w-8 text-indigo-500" />,
    title: "Global Opportunities",
    description: "Opportunities to work on international projects and collaborate globally."
  },
  {
    icon: <Coffee className="h-8 w-8 text-yellow-500" />,
    title: "Great Culture",
    description: "Collaborative, inclusive environment with regular team events and activities."
  },
];

const CompanyBenefits = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Benefits of Working With Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We value our team members and offer a range of benefits to support your professional growth and personal wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 mb-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefits; 