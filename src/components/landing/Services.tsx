import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Code, Zap, Globe, Star, Compass } from 'lucide-react';
import { Button } from '../ui/button';
import ScrollSection, { StaggeredContainer, StaggeredItem } from '../common/ScrollSection';

const services = [
  {
    icon: <Rocket className="h-6 w-6 text-blue-500" />,
    title: 'Space-Age Solutions',
    description: 'Cutting-edge technologies that propel your business into the future with unprecedented efficiency.'
  },
  {
    icon: <Code className="h-6 w-6 text-indigo-500" />,
    title: 'Quantum Development',
    description: 'Advanced software architecture that transcends traditional limitations with innovative approaches.'
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-500" />,
    title: 'Stellar Performance',
    description: 'Optimize your digital presence with lightning-fast, responsive applications that captivate users.'
  },
  {
    icon: <Globe className="h-6 w-6 text-cyan-500" />,
    title: 'Orbital Reach',
    description: 'Expand your global footprint with solutions designed to connect with audiences across the universe.'
  },
  {
    icon: <Star className="h-6 w-6 text-pink-500" />,
    title: 'Cosmic Analytics',
    description: 'Transform vast data constellations into actionable insights that guide your strategic decisions.'
  },
  {
    icon: <Compass className="h-6 w-6 text-teal-500" />,
    title: 'Future Navigation',
    description: 'Strategic guidance to help you chart a course through rapidly evolving technological landscapes.'
  }
];

const Services = () => {
  return (
    <ScrollSection 
      className="py-16 md:py-24 bg-gray-900 bg-opacity-95 bg-[url('/images/stars-bg.png')] bg-fixed"
      variant="fadeIn"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Interstellar</span> Services
          </h2>
          <p className="text-lg text-gray-300">
            Launch your business beyond traditional boundaries with our forward-thinking solutions designed for the digital cosmos.
          </p>
        </div>
        
        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggeredItem 
              key={index} 
              variant="slideUp"
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group"
            >
              <div className="mb-4 p-3 bg-gray-900/80 rounded-xl inline-block shadow-md group-hover:shadow-blue-500/20 transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
        
        <StaggeredItem className="text-center mt-12" variant="fadeIn">
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-full border-blue-500 text-blue-400 hover:bg-blue-900/20">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </StaggeredItem>
      </div>
    </ScrollSection>
  );
};

export default Services; 