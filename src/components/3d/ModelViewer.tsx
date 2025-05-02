import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars } from '@react-three/drei';

// 3D model with gentle animation
function Model({ url, rotate = true }) {
  const modelRef = useRef();
  const { scene } = useGLTF(url);
  
  // Apply gentle floating motion
  useFrame((state) => {
    if (!modelRef.current) return;
    
    // Apply gentle up/down floating motion
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return <primitive ref={modelRef} object={scene} scale={2.5} position={[0, 0, 0]} />;
}

export default function ModelViewer({ modelPath, className = '', showStars = true, rotate = true, topAreaHeight = '40vh' }) {
  const containerRef = useRef();
  const orbitControlsRef = useRef();
  
  // Add touch event handler to restrict interaction to top area only on mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Function to determine if touch is in the top area
    const isTouchInTopArea = (event) => {
      const topAreaHeightPx = 
        topAreaHeight.endsWith('vh') 
          ? window.innerHeight * (parseInt(topAreaHeight) / 100)
          : parseInt(topAreaHeight);
      return event.touches[0].clientY < topAreaHeightPx;
    };
    
    // Touch event handlers
    const handleTouchStart = (event) => {
      if (!isTouchInTopArea(event)) {
        event.stopPropagation();
      }
    };
    
    const handleTouchMove = (event) => {
      if (!isTouchInTopArea(event)) {
        event.stopPropagation();
      }
    };
    
    // Add touch event listeners to Canvas container
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Cleanup
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [topAreaHeight]);
  
  return (
    <div 
      ref={containerRef}
      className={`h-full w-full ${className} cursor-grab active:cursor-grabbing`}
    >
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]} 
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        {/* Enhanced lighting for better visibility */}
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 5]} intensity={0.8} />
        
        <Suspense fallback={null}>
          <Model url={modelPath} rotate={rotate} />
          
          {showStars && (
            <Stars 
              radius={100} 
              depth={60} 
              count={5000} 
              factor={5} 
              saturation={0} 
              fade 
              speed={0.5}
            />
          )}
          
          <Environment preset="sunset" />
        </Suspense>
        
        {/* Optimized Orbit Controls */}
        <OrbitControls 
          ref={orbitControlsRef}
          makeDefault
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={rotate}
          autoRotateSpeed={0.5}
          zoomSpeed={0.8}
          rotateSpeed={0.8}
          minDistance={4}
          maxDistance={20}
          target={[0, 0, 0]}
          /* Ensures mouse wheel works properly */
          domElement={document.body}
          /* Prevents control issues */
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
} 