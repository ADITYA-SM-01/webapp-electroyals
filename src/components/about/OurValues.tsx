import React from "react";
import { Heart, Target, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SimpleAnimation, SimpleStagger } from "../common/SimpleAnimation";

const values = [
  {
    icon: <Heart className="h-10 w-10 text-red-500" />,
    title: "Cosmic Passion",
    description: "We are passionate about exploring new digital frontiers and creating stellar experiences for our clients."
  },
  {
    icon: <Target className="h-10 w-10 text-blue-500" />,
    title: "Stellar Excellence",
    description: "We aim for the stars in every project, delivering solutions that exceed expectations across the universe."
  },
  {
    icon: <Users className="h-10 w-10 text-green-500" />,
    title: "Galactic Collaboration",
    description: "We unite diverse talents across space and time to create solutions greater than the sum of their parts."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-purple-500" />,
    title: "Quantum Innovation",
    description: "We harness the power of cutting-edge technology to solve problems in ways never before imagined."
  }
];

const OurValues = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-electroyals-navy/80 to-gray-900/90 text-white relative overflow-hidden">
      {/* Space-themed decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated stars */}
        {[...Array(15)].map((_, i) => (
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
        
        {/* Galaxy spiral effect */}
        <motion.div 
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem]"
          style={{
            background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 75%, rgba(59, 130, 246, 0) 100%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SimpleAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-400">
              Our Interstellar Values
            </h2>
            <p className="text-lg text-gray-300">
              The guiding stars that navigate our journey through the digital cosmos.
            </p>
          </div>
        </SimpleAnimation>

        <SimpleStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <SimpleAnimation 
              key={index}
              delay={index * 0.1}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 
              backdrop-blur-sm rounded-xl p-8 text-center shadow-md hover:shadow-xl 
              hover:shadow-blue-500/20 
              transition-all duration-300 hover:-translate-y-1 relative overflow-hidden 
              border border-indigo-500/20"
            >
              {/* Star glow behind the icon */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full" 
                style={{
                  background: 'radial-gradient(circle, rgba(120, 119, 198, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
                  filter: 'blur(10px)'
                }}
              ></div>

              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-800/80 flex items-center justify-center 
                ring-2 ring-indigo-500/30 z-10 relative"
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
              
              {/* Decorative orbital ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-20 h-20 border border-indigo-500/10 rounded-full"
                style={{ borderRadius: '50%' }}
              ></motion.div>
            </SimpleAnimation>
          ))}
        </SimpleStagger>
      </div>
    </section>
  );
};

export default OurValues; 