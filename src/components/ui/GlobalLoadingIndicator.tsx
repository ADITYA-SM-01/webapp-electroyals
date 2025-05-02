import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoadingContext } from "../../contexts/LoadingContext";
import LoadingAnimation from "./LoadingAnimation";

const GlobalLoadingIndicator = () => {
  const { globalLoading } = useLoadingContext();

  return (
    <AnimatePresence>
      {globalLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
        >
          <div className="text-center">
            <LoadingAnimation size="large" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg text-blue-400 font-medium"
            >
              <div className="flex flex-col space-y-3">
                <div className="animate-pulse">Navigating through space...</div>
                <div className="text-sm text-blue-300/70">
                  Preparing your cosmic experience
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalLoadingIndicator; 