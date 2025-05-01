import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const teamMembers = [
  {
    name: 'Jane Doe',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: '15+ years experience in business strategy and leadership'
  },
  {
    name: 'John Smith',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Expert in software architecture and emerging technologies'
  },
  {
    name: 'Emily Chen',
    position: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Award-winning designer with a passion for user-centered design'
  },
  {
    name: 'Michael Johnson',
    position: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    bio: 'Full-stack developer with expertise in multiple frameworks'
  }
];

const TeamHighlights = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our talented professionals bring diverse expertise and a shared commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-100 dark:border-blue-900">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{member.position}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/team">
            <Button variant="outline" size="lg" className="rounded-full">
              View Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamHighlights; 