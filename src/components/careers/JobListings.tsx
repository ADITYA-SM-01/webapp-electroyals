import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, ChevronRight, Briefcase, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { SimpleAnimation, SimpleStagger } from "../common/SimpleAnimation";

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / San Francisco, CA",
    type: "Full-time",
    description: "We're looking for an experienced software engineer to join our team and help build scalable, robust applications that power our platform.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in JavaScript, TypeScript, and React",
      "Experience with Node.js and database technologies",
      "Strong problem-solving skills and attention to detail"
    ]
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote / New York, NY",
    type: "Full-time",
    description: "Join our design team to create intuitive, beautiful user experiences that delight our customers and solve complex problems.",
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio demonstrating UX/UI design skills",
      "Experience with Figma, Sketch, or similar design tools",
      "Ability to translate business requirements into design solutions"
    ]
  },
  {
    id: 3,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Help drive our marketing efforts and increase brand awareness through various digital channels and innovative campaigns.",
    requirements: [
      "3+ years of experience in digital marketing",
      "Proficiency in social media management and content creation",
      "Experience with analytics tools and performance tracking",
      "Creative thinking and excellent communication skills"
    ]
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote / Austin, TX",
    type: "Full-time",
    description: "Build strong relationships with our customers, ensure their success with our platform, and drive retention and growth.",
    requirements: [
      "2+ years of experience in customer success or account management",
      "Strong communication and interpersonal skills",
      "Problem-solving mindset and ability to work in fast-paced environments",
      "Experience with CRM systems and customer onboarding processes"
    ]
  }
];

const requirementVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const JobListings = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (jobId: number) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SimpleAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join our team and work on exciting projects that make a difference.
            </p>
          </div>
        </SimpleAnimation>

        <SimpleStagger className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <SimpleAnimation 
                key={job.id}
                delay={index * 0.1}
                className="bg-gradient-to-br from-electroyals-50/80 to-electroyals-100/90 dark:from-electroyals-900/80 dark:to-electroyals-800/90 
                backdrop-blur-sm rounded-xl overflow-hidden
                shadow-md hover:shadow-xl 
                hover:shadow-electroyals-300/20 dark:hover:shadow-electroyals-600/20 
                transition-all duration-300 relative 
                border border-electroyals-200/50 dark:border-electroyals-700/50"
              >
                {/* Decorative element */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-electroyals-200/30 dark:bg-electroyals-600/20 rounded-full blur-xl"></div>
                
                <div className="p-6 relative z-10">
                  <div 
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{job.title}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Briefcase className="h-4 w-4 mr-1" />
                          <span>{job.department}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300">
                        {job.description}
                      </p>
                    </div>
                    
                    <motion.div 
                      className="flex-shrink-0 ml-4"
                      animate={{ rotate: expandedJob === job.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-electroyals-100 dark:bg-electroyals-800 flex items-center justify-center">
                        <ChevronRight className="h-5 w-5 text-electroyals-600 dark:text-electroyals-400" />
                      </div>
                    </motion.div>
                  </div>
                  
                  {expandedJob === job.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Requirements:</h4>
                      <SimpleStagger className="space-y-2 mb-4">
                        {job.requirements.map((req, index) => (
                          <div 
                            key={index} 
                            className="flex items-start"
                          >
                            <ArrowRight className="h-4 w-4 text-electroyals-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{req}</span>
                          </div>
                        ))}
                      </SimpleStagger>
                      
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-4 py-2 bg-electroyals-500 dark:bg-electroyals-600 text-white rounded-lg hover:bg-electroyals-600 dark:hover:bg-electroyals-700 transition-colors"
                      >
                        Apply Now
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </SimpleAnimation>
            ))}
          </div>
        </SimpleStagger>
      </div>
    </section>
  );
};

export default JobListings; 