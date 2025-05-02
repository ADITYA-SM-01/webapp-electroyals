import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useGLTF, Environment } from '@react-three/drei';
import BlackHole from './BlackHole';

// Space model component
function SpaceModel({ url, rotate = true }) {
  const modelRef = useRef();
  const { scene } = useGLTF(url);
  
  // Apply slow rotation to the model
  useFrame((state) => {
    if (modelRef.current && rotate) {
      modelRef.current.rotation.y += 0.0005;
      modelRef.current.rotation.x += 0.0001;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={3} position={[0, 0, -5]} />;
}

interface SpaceBackgroundProps {
  className?: string;
}

const SpaceBackground: React.FC<SpaceBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className}`}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          <SpaceModel url="/models/space.glb" />
          <BlackHole position={[10, 0, -15]} size={6} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpaceBackground; 