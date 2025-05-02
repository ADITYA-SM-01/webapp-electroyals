import React from 'react';
import { motion } from 'framer-motion';

const AboutSpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-80">
      {/* Dark background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-electroyals-navy/70 to-black/70"
      ></div>
      
      {/* Animated stars */}
      {[...Array(40)].map((_, i) => (
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
      
      {/* Larger pulsating stars - reduced quantity on mobile */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1, scale: 0.5 }}
          animate={{ 
            opacity: [0.4, 0.7, 0.4], 
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 4 + Math.random() * 3, 
            repeat: Infinity, 
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          className="absolute bg-blue-300 rounded-full w-1.5 h-1.5"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.4)"
          }}
        />
      ))}
      
      {/* Deep space nebula 1 - top right - smaller on mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.15, 0.3, 0.15],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -right-20 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Deep space nebula 2 - bottom left - smaller on mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.08, 0.2, 0.08],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-20 -left-20 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(49, 46, 129, 0.05) 50%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />
      
      {/* Galaxy spiral - center - smaller on mobile */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ 
          opacity: 0.15,
          scale: 1,
          rotate: 360
        }}
        transition={{ 
          duration: 180, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] sm:w-[50rem] h-[25rem] sm:h-[50rem]"
        style={{
          background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 75%, rgba(59, 130, 246, 0) 100%)',
          filter: 'blur(30px) sm:blur(60px)',
          transform: 'translateX(-50%) translateY(-50%)'
        }}
      />
      
      {/* Moving cosmic dust particles - adjusted size for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ 
          opacity: [0, 0.15, 0],
          y: [0, 100, 200]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px, 60px 60px',
          backgroundPosition: '0 0, 15px 15px',
        }}
      />
      
      {/* Moving comet - visibility controlled for mobile */}
      <motion.div
        initial={{ 
          x: -100,
          y: -100,
          opacity: 0
        }}
        animate={{ 
          x: ['-100vw', '100vw'],
          y: ['-10vh', '50vh'],
          opacity: [0, 0.8, 0.8, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatDelay: 20,
          ease: "easeInOut",
          times: [0, 0.1, 0.9, 1]
        }}
        className="absolute w-0.5 h-0.5 bg-white hidden sm:block"
        style={{
          boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.2), 0 0 40px 20px rgba(59, 130, 246, 0.1)',
          borderRadius: '50%'
        }}
      />
    </div>
  );
};

export default AboutSpaceBackground; 