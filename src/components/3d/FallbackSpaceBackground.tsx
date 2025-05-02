import React from 'react';

const FallbackSpaceBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none bg-black"
      style={{
        background: 'linear-gradient(to bottom, #111827, #000000)',
        overflow: 'hidden'
      }}
    >
      {/* Static star field using CSS */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 5px)',
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px'
        }}
      ></div>
      
      {/* Simple blue glow on right side simulating black hole */}
      <div 
        className="absolute -right-20 top-1/4"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(63,81,181,0.2) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(30px)'
        }}
      ></div>
      
      {/* Simple purple glow */}
      <div 
        className="absolute top-1/3 left-1/4"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,39,176,0.1) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(20px)'
        }}
      ></div>
    </div>
  );
};

export default FallbackSpaceBackground; 