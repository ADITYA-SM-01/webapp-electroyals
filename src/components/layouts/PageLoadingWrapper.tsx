import React, { useState, useEffect } from "react";
import LoadingAnimation from "../ui/LoadingAnimation";

interface PageLoadingWrapperProps {
  children: React.ReactNode;
  delay?: number; // Delay in ms before showing content (to avoid flicker for fast loads)
}

const PageLoadingWrapper = ({ 
  children, 
  delay = 500 
}: PageLoadingWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="min-h-screen relative">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md z-50">
          <div className="space-y-6 text-center">
            <LoadingAnimation size="large" />
            <div className="text-blue-400 font-medium animate-pulse">
              Navigating through space...
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default PageLoadingWrapper; 