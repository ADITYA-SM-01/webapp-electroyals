import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoadingContext } from "../../contexts/LoadingContext";

interface LoadingRouteProps {
  children: React.ReactNode;
}

const LoadingRoute = ({ children }: LoadingRouteProps) => {
  const { startLoading, stopLoading } = useLoadingContext();
  const location = useLocation();

  // Show loading animation when location changes
  useEffect(() => {
    startLoading();
    
    // Wait a bit to simulate loading, then stop
    const timer = setTimeout(() => {
      stopLoading();
    }, 800);
    
    return () => clearTimeout(timer);
  }, [location.pathname, startLoading, stopLoading]);

  return <>{children}</>;
};

export default LoadingRoute; 