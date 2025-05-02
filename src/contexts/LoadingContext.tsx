import React, { createContext, useContext, useState, useCallback } from 'react';

interface LoadingContextType {
  globalLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  setLoadingWithTimeout: (duration?: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState(false);

  const startLoading = useCallback(() => {
    setGlobalLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setGlobalLoading(false);
  }, []);

  const setLoadingWithTimeout = useCallback((duration = 1000) => {
    setGlobalLoading(true);
    setTimeout(() => {
      setGlobalLoading(false);
    }, duration);
  }, []);

  const value = {
    globalLoading,
    startLoading,
    stopLoading,
    setLoadingWithTimeout
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext; 