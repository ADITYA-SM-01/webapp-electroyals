import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { Helmet } from 'react-helmet';
import StarsCanvas from '../effects/StarsCanvas';
import FallbackSpaceBackground from '../3d/FallbackSpaceBackground';
import SpaceModelBackground from '../3d/SpaceModelBackground';
import PageLoadingWrapper from './PageLoadingWrapper';
import PageTransition from './PageTransition';

interface SpaceThemeLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const SpaceThemeLayout: React.FC<SpaceThemeLayoutProps> = ({ 
  children, 
  title = "ELECTROYALS | Cosmic Solutions", 
  description = "Pioneering the next generation of solutions, exploring new frontiers to help your business reach cosmic potential."
}) => {
  // Start with the 3D background and fallback if needed
  const [use3DBackground, setUse3DBackground] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  // Check if 3D background is working
  useEffect(() => {
    // Set a timeout to check if 3D loaded properly
    const timer = setTimeout(() => {
      const bodyBg = window.getComputedStyle(document.body).backgroundColor;
      if (bodyBg === 'rgb(255, 255, 255)') {
        console.log('3D background failed to load, falling back to simple background');
        setUse3DBackground(false);
        setLoadFailed(true);
      }
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLoadingWrapper>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Space themed backgrounds */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Decide which background to show */}
          {loadFailed ? (
            <FallbackSpaceBackground />
          ) : (
            <>
              {/* Basic stars always visible as fallback */}
              <StarsCanvas />
              
              {/* 3D model background when enabled */}
              {use3DBackground && <SpaceModelBackground />}
            </>
          )}
          
          {/* This simulates a subtle nebula effect */}
          <div className="absolute inset-0" style={{ 
            background: 'radial-gradient(circle, rgba(15,23,42,0.3) 0%, rgba(0,0,0,0) 70%)',
            backgroundSize: '150% 150%'
          }}></div>
          
          {/* Glowing orbs - transparent */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/4 -left-20 w-60 h-60 bg-indigo-900/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content="#0f172a" />
        </Helmet>
        
        <Navbar />
        
        <main className="relative z-10">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        
        <Footer />
      </div>
    </PageLoadingWrapper>
  );
};

export default SpaceThemeLayout; 