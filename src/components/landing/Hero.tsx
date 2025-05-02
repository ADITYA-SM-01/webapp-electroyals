import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import ModelViewer from '../3d/ModelViewer';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const modelContainerRef = useRef(null);
  const modelRef = useRef(null);

  // Detect if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Create a completely transparent overlay div to block touches in the bottom 60% on mobile
  useEffect(() => {
    if (!isMobile || !modelContainerRef.current) return;

    // Create a block element for the bottom 60% of the screen
    const blockElement = document.createElement('div');
    blockElement.style.position = 'absolute';
    blockElement.style.left = '0';
    blockElement.style.right = '0';
    blockElement.style.bottom = '0';
    blockElement.style.top = '40vh';
    blockElement.style.zIndex = '1000';
    blockElement.style.background = 'transparent';
    blockElement.id = 'model-touch-blocker';
    
    // Add it to the model container
    modelContainerRef.current.appendChild(blockElement);
    
    // Setup touch handlers on the block element to prevent propagation to the model
    const handleTouch = (e) => {
      e.stopPropagation();
    };
    
    blockElement.addEventListener('touchstart', handleTouch, { passive: false, capture: true });
    blockElement.addEventListener('touchmove', handleTouch, { passive: false, capture: true });
    blockElement.addEventListener('touchend', handleTouch, { passive: false, capture: true });
    
    // Cleanup
    return () => {
      if (blockElement && blockElement.parentNode) {
        blockElement.removeEventListener('touchstart', handleTouch);
        blockElement.removeEventListener('touchmove', handleTouch);
        blockElement.removeEventListener('touchend', handleTouch);
        blockElement.parentNode.removeChild(blockElement);
      }
    };
  }, [isMobile]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Full-screen 3D model container - must have highest z-index for desktop */}
      <div ref={modelContainerRef} className="absolute inset-0 z-50">
        {/* The 3D model */}
        <div ref={modelRef} className="w-full h-full">
          <ModelViewer 
            modelPath="/models/space.glb" 
            className="h-full w-full" 
            showStars={true} 
            rotate={true}
            enableZoom={false}
          />
        </div>
        
        {/* Instruction tooltip - Positioned differently on mobile vs desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={`absolute bg-indigo-600/70 px-4 py-2 rounded-lg z-1001 text-xs text-white shadow-lg pointer-events-none ${
            isMobile ? 'top-20 right-4' : 'bottom-8 right-8'
          }`}
        >
          <p className={isMobile ? "hidden" : "block"}>Click and drag to rotate the galaxy</p>
          <p className={isMobile ? "block" : "hidden"}>Tap & drag in top area to control galaxy</p>
        </motion.div>
      </div>

      {/* Main content container - lower z-index than model on desktop */}
      <div className={`container relative mx-auto px-4 sm:px-6 lg:px-8 py-0 min-h-screen ${isMobile ? 'z-70' : 'z-40'}`}>
        <div className="flex items-center min-h-[80vh] pt-20 md:pt-24">
          {/* Text Content with proper spacing from top */}
          <div className={`w-full lg:w-2/3 select-none mt-16 ${isMobile ? 'z-80' : 'z-40'}`}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">Beyond </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold">Boundaries</span> 
                <br />
                <span className="text-white">Into The </span>
                <span className="text-blue-300">Future</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-xl text-gray-100">
                We are pioneering the next generation of solutions, exploring new frontiers to help your business reach cosmic potential.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg">
                    Launch Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-full border-blue-500 text-blue-300 hover:bg-blue-900/20 text-lg border-2">
                    Explore Services
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-transparent border-2 border-white flex items-center justify-center overflow-hidden">
                      <img src="/images/electroyals-icon.png" alt="Team member" className="w-10 h-10 object-cover" />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white">Trusted by 100+ clients</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-white">4.9/5</span>
                  </div>
                </div>
              </div>

              {/* Testimonial with enhanced visibility */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="mt-12 p-5 bg-transparent border-l-4 border-blue-400 max-w-md"
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-base font-semibold text-white">Jane Doe, CEO</h3>
                    <p className="text-base mt-1 text-blue-200 italic">"We're not just reaching for the stars, we're building the rockets to get there."</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle left-side gradient for text readability */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-10"></div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
