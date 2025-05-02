import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";

interface SectionLoadingProps {
  children: React.ReactNode;
  isLoading?: boolean;
  customDelay?: number;
}

const SectionLoading = ({ 
  children, 
  isLoading: externalLoading, 
  customDelay = 800 
}: SectionLoadingProps) => {
  const [internalLoading, setInternalLoading] = useState(true);
  const isLoading = externalLoading !== undefined ? externalLoading : internalLoading;

  useEffect(() => {
    const timer = setTimeout(() => {
      setInternalLoading(false);
    }, customDelay);

    return () => clearTimeout(timer);
  }, [customDelay]);

  return (
    <div className="relative">
      {isLoading ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-[200px] flex items-center justify-center"
        >
          <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-indigo-900/20">
            <LoadingAnimation size="small" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default SectionLoading; 