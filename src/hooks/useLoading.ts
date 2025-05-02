import { useState, useEffect } from 'react';

interface UseLoadingOptions {
  delay?: number;
  staggered?: boolean;
  staggerAmount?: number;
  initialDelay?: number;
}

/**
 * Custom hook for managing loading states with optional staggered delays
 * 
 * @param options Configuration options
 * @returns Loading state and functions to control it
 */
const useLoading = ({
  delay = 800,
  staggered = false,
  staggerAmount = 200,
  initialDelay = 0
}: UseLoadingOptions = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay + delay);
    
    return () => clearTimeout(timer);
  }, [delay, initialDelay]);
  
  /**
   * Creates a staggered loading effect for multiple items
   * @param index The index of the item in a list
   * @returns Whether the specific item is still loading
   */
  const createStaggeredLoader = (index: number) => {
    const [itemLoading, setItemLoading] = useState(true);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setItemLoading(false);
      }, initialDelay + delay + (staggered ? index * staggerAmount : 0));
      
      return () => clearTimeout(timer);
    }, [index]);
    
    return itemLoading;
  };
  
  /**
   * Force the loading state back to true
   */
  const startLoading = () => {
    setIsLoading(true);
  };
  
  /**
   * Force the loading state to false
   */
  const stopLoading = () => {
    setIsLoading(false);
  };
  
  return {
    isLoading,
    startLoading,
    stopLoading,
    createStaggeredLoader
  };
};

export default useLoading; 