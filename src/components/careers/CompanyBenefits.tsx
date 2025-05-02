import React from "react";
import { 
  DollarSign, 
  Clock, 
  GraduationCap, 
  Heart, 
  Globe, 
  Coffee
} from "lucide-react";
import { motion } from "framer-motion";
import { SimpleAnimation, SimpleStagger } from "../common/SimpleAnimation";

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
        <SimpleAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Benefits of Working With Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We value our team members and offer a range of benefits to support your professional growth and personal wellbeing.
            </p>
          </div>
        </SimpleAnimation>

        <SimpleStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <SimpleAnimation 
              key={index}
              delay={index * 0.1}
              className="bg-gradient-to-br from-electroyals-50/80 to-electroyals-100/90 dark:from-electroyals-900/80 dark:to-electroyals-800/90 
              backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-xl 
              hover:shadow-electroyals-300/20 dark:hover:shadow-electroyals-600/20 
              transition-all duration-300 hover:-translate-y-1 relative overflow-hidden 
              border border-electroyals-200/50 dark:border-electroyals-700/50"
            >
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-electroyals-200/30 dark:bg-electroyals-600/20 rounded-full blur-xl"></div>
              
              <div className="w-14 h-14 mb-6 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center 
              shadow-inner shadow-electroyals-200 dark:shadow-electroyals-700 z-10 relative">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </SimpleAnimation>
          ))}
        </SimpleStagger>
      </div>
    </section>
  );
};

export default CompanyBenefits; 