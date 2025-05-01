import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const openPositions = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA (Remote Option)',
    type: 'Full-time',
    description: 'We are looking for a Senior Software Engineer with experience in modern web technologies to join our growing engineering team. You will be responsible for designing, developing, and maintaining high-quality software solutions.'
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'San Francisco, CA (Remote Option)',
    type: 'Full-time',
    description: 'We are seeking a talented UX/UI Designer to create beautiful, intuitive interfaces that provide exceptional user experiences. You will collaborate closely with product managers and engineers to deliver outstanding designs.'
  },
  {
    id: 3,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA (Remote Option)',
    type: 'Full-time',
    description: 'We are looking for a Product Manager to help define product strategy and roadmap. You will work closely with customers, stakeholders, and the development team to deliver products that solve real-world problems.'
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'San Francisco, CA (Remote Option)',
    type: 'Full-time',
    description: 'We are seeking a Digital Marketing Specialist to develop and implement marketing strategies across digital channels. You will be responsible for growing our online presence and generating leads.'
  },
  {
    id: 5,
    title: 'Junior Developer',
    department: 'Engineering',
    location: 'San Francisco, CA (Remote Option)',
    type: 'Full-time',
    description: 'We are looking for a talented Junior Developer to join our engineering team. This is a great opportunity for someone early in their career to work with experienced developers and grow their skills.'
  }
];

const JobListings = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Open Positions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join our team and work on exciting projects with talented professionals
          </p>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {openPositions.map((job) => (
            <div 
              key={job.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {job.department} • {job.location} • {job.type}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      New
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex gap-4">
                    <span className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400">
                      <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Application deadline: June 30, 2023
                    </span>
                  </div>
                  
                  <Link to={`/careers/job/${job.id}`}>
                    <Button variant="outline" size="sm" className="rounded-full">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-xl mx-auto text-center mt-16 bg-blue-50 dark:bg-gray-700 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            Don't see a role that fits your skills?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/contact">
            <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobListings; 