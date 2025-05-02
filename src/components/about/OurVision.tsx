import React from "react";
import { Rocket, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SimpleAnimation, slideUp, slideLeft, slideRight } from "../common/SimpleAnimation";

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const OurVision = () => {
  return (
    <section className="py-12 sm:py-16 relative bg-gradient-to-b from-gray-900/90 to-black text-white overflow-hidden">
      {/* Space theme decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated stars */}
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
            className="absolute bg-blue-300 dark:bg-blue-400 rounded-full w-1 h-1"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.3)"
            }}
          />
        ))}
        
        {/* Larger glowing orbs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-20 -right-20 w-40 sm:w-60 h-40 sm:h-60 bg-blue-700/30 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-0 left-0 w-40 sm:w-80 h-40 sm:h-80 bg-indigo-700/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SimpleAnimation variants={slideUp}>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Our Cosmic Vision & Interstellar Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Navigating the digital universe and expanding the boundaries of what's possible.
            </p>
          </div>
        </SimpleAnimation>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          {/* Vision Card */}
          <SimpleAnimation variants={slideLeft} className="md:w-1/2" delay={0.2}>
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 
            backdrop-blur-sm rounded-xl p-5 sm:p-8 shadow-md hover:shadow-xl 
            hover:shadow-blue-600/20 
            transition-all duration-300 hover:-translate-y-1 relative overflow-hidden 
            border border-blue-700/50 h-full">
              {/* Galaxy spiral effect */}
              <div className="absolute -top-8 -right-8 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-conic from-blue-600/30 via-indigo-600/15 to-transparent rounded-full blur-xl animate-slow-spin"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-800/40 to-indigo-800/40 flex items-center justify-center 
                  shadow-inner shadow-blue-700/30 z-10 relative mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0"
                >
                  <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 text-center sm:text-left">Our Vision</h3>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                To be the leading provider of innovative technology solutions that empower businesses to achieve their full potential in the digital age. We envision a world where technology enhances human capabilities and drives positive change.
              </p>
              
              <motion.ul 
                className="space-y-2 sm:space-y-3" 
                initial="hidden" 
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["Pioneering technological advancements", "Setting new industry standards", "Creating sustainable technological ecosystems"].map((item, index) => (
                  <motion.li 
                    key={index} 
                    variants={listItemVariants}
                    custom={index}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    </motion.div>
                    <span className="text-sm sm:text-base text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </SimpleAnimation>
          
          {/* Mission Card */}
          <SimpleAnimation variants={slideRight} className="md:w-1/2" delay={0.3}>
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 
            backdrop-blur-sm rounded-xl p-5 sm:p-8 shadow-md hover:shadow-xl 
            hover:shadow-indigo-600/20 
            transition-all duration-300 hover:-translate-y-1 relative overflow-hidden 
            border border-indigo-700/50 h-full">
              {/* Pulsating light effect */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 5, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
                className="absolute -top-8 -left-8 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-radial from-indigo-600/30 to-transparent rounded-full blur-xl"
              ></motion.div>
              
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-indigo-800/40 to-purple-800/40 flex items-center justify-center 
                  shadow-inner shadow-indigo-700/30 z-10 relative mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0"
                >
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-500" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 text-center sm:text-left">Our Mission</h3>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                To deliver exceptional technology solutions that solve complex business challenges, drive growth, and create lasting value for our clients. We are committed to excellence, innovation, and building strong, collaborative partnerships.
              </p>
              
              <motion.ul 
                className="space-y-2 sm:space-y-3" 
                initial="hidden" 
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["Delivering transformative solutions", "Building lasting client relationships", "Maintaining the highest standards of excellence"].map((item, index) => (
                  <motion.li 
                    key={index} 
                    variants={listItemVariants}
                    custom={index}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    </motion.div>
                    <span className="text-sm sm:text-base text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </SimpleAnimation>
        </div>
      </div>
    </section>
  );
};

export default OurVision; 