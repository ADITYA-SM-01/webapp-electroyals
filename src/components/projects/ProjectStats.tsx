import React from "react";
import { CheckCircle, Users, Trophy, Clock } from "lucide-react";

const stats = [
  {
    value: "150+",
    label: "Projects Completed",
    icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    description: "Successfully delivered projects across various industries"
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: <Users className="h-8 w-8 text-blue-500" />,
    description: "Our clients consistently rate our work as exceptional"
  },
  {
    value: "25+",
    label: "Industry Awards",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    description: "Recognized for excellence in design and development"
  },
  {
    value: "10 years",
    label: "Industry Experience",
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    description: "Decade of delivering high-quality solutions"
  }
];

const ProjectStats = () => {
  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Track Record
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We take pride in our achievements and the impact we've made for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-gray-800">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats; 