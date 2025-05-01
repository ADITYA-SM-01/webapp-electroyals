import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Code, Lightbulb, MessageSquare, PenTool, UserPlus } from 'lucide-react';
import { Button } from '../ui/button';

const services = [
  {
    icon: <Code className="h-6 w-6 text-blue-600" />,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with modern technologies.'
  },
  {
    icon: <PenTool className="h-6 w-6 text-indigo-600" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user experience and drive engagement.'
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-purple-600" />,
    title: 'Strategic Consulting',
    description: 'Expert guidance to help your business grow and navigate complex challenges.'
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-green-600" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights to drive informed business decisions.'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-yellow-600" />,
    title: 'Digital Marketing',
    description: 'Targeted digital marketing strategies to reach and convert your ideal customers.'
  },
  {
    icon: <UserPlus className="h-6 w-6 text-red-600" />,
    title: 'Team Augmentation',
    description: 'Scale your team with skilled professionals to meet your project needs.'
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We offer a comprehensive range of professional services to help your business succeed in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-4 p-3 bg-white dark:bg-gray-700 rounded-xl inline-block shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-full">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 