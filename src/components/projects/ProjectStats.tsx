import React from "react";
import { CheckCircle, Users, Trophy, Clock } from "lucide-react";
import { SimpleAnimation } from "../common/SimpleAnimation";
import { motion } from "framer-motion";

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
    <section className="py-16 relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Space theme decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 -left-20 w-40 h-40 bg-blue-300 dark:bg-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-10 right-10 w-60 h-60 bg-purple-300 dark:bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.1, 0.3, 0.1], scale: 1 }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 dark:bg-blue-800/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SimpleAnimation 
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Our Cosmic Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Traversing the digital universe to create stellar results for our clients
          </p>
        </SimpleAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <SimpleAnimation 
              key={index}
              delay={index * 0.1}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <motion.div 
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/30 dark:group-hover:to-purple-800/30"
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </SimpleAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats; 