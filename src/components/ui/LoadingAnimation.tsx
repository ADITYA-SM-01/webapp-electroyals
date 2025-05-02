import React from "react";
import { motion } from "framer-motion";

interface LoadingAnimationProps {
  size?: "small" | "medium" | "large";
}

const LoadingAnimation = ({ size = "medium" }: LoadingAnimationProps) => {
  const sizeMap = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  const className = sizeMap[size];

  return (
    <div className="flex items-center justify-center">
      <div className={`relative ${className}`}>
        {/* Outer orbit */}
        <motion.div
          className="absolute inset-0 border-4 border-blue-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {/* Planet on outer orbit */}
          <motion.div 
            className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
            style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </motion.div>
        
        {/* Middle orbit */}
        <motion.div
          className="absolute inset-2 border-4 border-indigo-500/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          {/* Planet on middle orbit */}
          <motion.div 
            className="absolute w-4 h-4 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"
            style={{ top: '50%', right: '0%', transform: 'translate(50%, -50%)' }}
          />
        </motion.div>
        
        {/* Inner orbit */}
        <motion.div
          className="absolute inset-4 border-4 border-purple-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {/* Planet on inner orbit */}
          <motion.div 
            className="absolute w-2 h-2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
            style={{ bottom: '0%', left: '50%', transform: 'translate(-50%, 50%)' }}
          />
        </motion.div>
        
        {/* Center star/planet pulsing */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/50" />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingAnimation; 