import React from "react";
import { motion } from "framer-motion";
import { SimpleAnimation, SimpleStagger, slideUp, slideLeft, slideRight } from "../common/SimpleAnimation";

const timelineItems = [
  {
    year: "2018",
    title: "Our Cosmic Journey Begins",
    description: "Founded with a vision to deliver exceptional digital solutions and explore new frontiers in the digital universe."
  },
  {
    year: "2019",
    title: "Stellar Expansion",
    description: "Expanded our constellation of talent and services to include a wider range of digital transformation solutions."
  },
  {
    year: "2020",
    title: "Universal Adaptation",
    description: "Pioneered remote work solutions during global challenges, helping businesses navigate through uncertain space."
  },
  {
    year: "2021",
    title: "Quantum Innovation",
    description: "Launched our proprietary technology platform, enabling businesses to achieve warp-speed operations."
  },
  {
    year: "2022",
    title: "Galactic Recognition",
    description: "Received industry recognition for our innovative approaches and commitment to excellence across the digital galaxy."
  },
  {
    year: "2023",
    title: "New Frontiers",
    description: "Continuing to explore uncharted territories, embrace new technologies, and expand our reach across the universe."
  }
];

const OurHistory = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-900/90 to-electroyals-navy/80 text-white relative overflow-hidden">
      {/* Space-themed decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{ 
              opacity: [0.3, 0.8, 0.3], 
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4, 
              repeat: Infinity, 
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute bg-white rounded-full w-1 h-1"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.3)"
            }}
          />
        ))}
        
        {/* Nebula glow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute -top-20 -right-20 w-40 sm:w-60 h-40 sm:h-60 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 left-0 w-40 sm:w-80 h-40 sm:h-80 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SimpleAnimation variants={slideUp}>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400">
              Our Interstellar Timeline
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              A journey through time and space - key milestones of our cosmic expedition.
            </p>
          </div>
        </SimpleAnimation>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline center line - spacey glow */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"
            style={{ boxShadow: "0 0 15px 2px rgba(79, 70, 229, 0.3)" }}
          ></motion.div>
          
          <div className="space-y-8 sm:space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`
                  flex items-start relative
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                  flex-row pl-12 md:pl-0
                `}
              >
                {/* Timeline dot - glowing planetary node */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 * index, duration: 0.5 }}
                  className="absolute left-4 md:left-1/2 top-6 transform md:-translate-x-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-blue-500 z-10"
                  style={{ boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.5)" }}
                ></motion.div>
                
                {/* Content card */}
                <div className={`
                  w-full md:w-5/12 
                  ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}
                  text-left
                `}>
                  <SimpleAnimation 
                    variants={index % 2 === 0 ? slideRight : slideLeft} 
                    delay={0.2 * index}
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm 
                    rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl 
                    hover:shadow-blue-500/20 
                    transition-all duration-300 hover:-translate-y-1 relative overflow-hidden 
                    border border-blue-500/20">
                      {/* Decorative element */}
                      <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                      
                      <span className="inline-block bg-blue-900/50 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 border border-blue-600/30">{item.year}</span>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">{item.title}</h3>
                      <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
                    </div>
                  </SimpleAnimation>
                </div>
                
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory; 