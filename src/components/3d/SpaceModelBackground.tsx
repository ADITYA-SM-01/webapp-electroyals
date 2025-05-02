import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Space model that fills the entire background
function SpaceModel() {
  const modelRef = useRef<THREE.Group>();
  const [modelLoaded, setModelLoaded] = useState(false);
  const { viewport } = useThree();
  
  // Load model with error handling
  const { scene } = useGLTF('/models/space.glb');
  
  // Set model as loaded once it's processed
  useEffect(() => {
    if (scene) {
      setModelLoaded(true);
    }
  }, [scene]);
  
  // Scale model to fill viewport
  useEffect(() => {
    if (modelRef.current && scene) {
      // Get bounding box of model
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      
      // Calculate scale to fill screen
      const scaleX = (viewport.width * 2) / size.x;
      const scaleY = (viewport.height * 2) / size.y;
      const scale = Math.max(scaleX, scaleY) * 2; // Scale up to ensure coverage
      
      // Apply scale
      modelRef.current.scale.set(scale, scale, scale);
      
      // Center the model
      modelRef.current.position.set(0, 0, -20);
    }
  }, [scene, viewport, modelLoaded]);
  
  // Apply slow rotation to the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0003;
    }
  });

  // Don't render if model failed to load
  if (!scene || !modelLoaded) return null;

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      dispose={null}
    />
  );
}

// Black hole positioned at the right side of the screen
function BlackHole() {
  const discRef = useRef<THREE.Mesh>();
  const { viewport } = useThree();
  
  // Calculate position based on viewport
  const posX = viewport.width * 0.4; // Position on the right side
  
  useFrame(() => {
    if (discRef.current) {
      discRef.current.rotation.z += 0.003;
    }
  });
  
  return (
    <group position={[posX, 0, -25]}>
      {/* Black hole center */}
      <mesh>
        <sphereGeometry args={[4, 24, 24]} />
        <meshBasicMaterial color="black" />
      </mesh>
      
      {/* Accretion disc */}
      <mesh ref={discRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[5, 16, 32]} />
        <meshBasicMaterial 
          color="#3f51b5"
          side={THREE.DoubleSide}
          transparent={true}
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

// Simple sphere as fallback
function FallbackSphere() {
  return (
    <mesh>
      <sphereGeometry args={[2, 16, 16]} />
      <meshBasicMaterial color="#111827" />
    </mesh>
  );
}

const SpaceModelBackground: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  
  // Error boundary
  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      console.error("3D rendering error:", event);
      setHasError(true);
    };
    
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);
  
  if (hasError) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 70 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'default',
          failIfMajorPerformanceCaveat: true
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        dpr={[0.8, 1.5]} // Lower resolution for performance
      >
        <ambientLight intensity={0.3} />
        
        <Suspense fallback={<FallbackSphere />}>
          <SpaceModel />
          <BlackHole />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpaceModelBackground;