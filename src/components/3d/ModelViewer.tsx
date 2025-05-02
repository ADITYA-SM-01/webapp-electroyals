import React, { Suspense, useRef, useEffect, useState } from 'react';
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

export default function ModelViewer({ modelPath, className = '', showStars = true, rotate = true, enableZoom = false }) {
  const containerRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

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
        
        {/* Orbit Controls */}
        <OrbitControls 
          makeDefault
          enableZoom={isMobile || enableZoom} // Enable zoom on mobile, or if specifically enabled
          enablePan={false}
          enableRotate={true}
          autoRotate={rotate}
          autoRotateSpeed={0.5}
          zoomSpeed={0.8}
          rotateSpeed={0.8}
          minDistance={4}
          maxDistance={20}
          target={[0, 0, 0]}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
} 