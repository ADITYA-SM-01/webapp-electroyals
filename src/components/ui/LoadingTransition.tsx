import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";

interface LoadingTransitionProps {
  children: React.ReactNode;
  loading?: boolean; 
  delay?: number;
  loadingText?: string;
  size?: "small" | "medium" | "large";
  minHeight?: string;
}

const LoadingTransition = ({
  children,
  loading: externalLoading,
  delay = 800,
  loadingText = "Loading...",
  size = "medium", 
  minHeight = "200px"
}: LoadingTransitionProps) => {
  const [internalLoading, setInternalLoading] = useState(true);
  
  // Use external loading state if provided, otherwise use internal
  const loading = externalLoading !== undefined ? externalLoading : internalLoading;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setInternalLoading(false);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className="relative" style={{ minHeight }}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <LoadingAnimation size={size} />
            {loadingText && (
              <motion.p 
                className="mt-4 text-blue-400 animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {loadingText}
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingTransition; 