import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface BlackHoleProps {
  position?: [number, number, number];
  size?: number;
}

const BlackHole: React.FC<BlackHoleProps> = ({ 
  position = [8, 0, -5], 
  size = 3 
}) => {
  const blackHoleRef = useRef<THREE.Mesh>(null);
  const discRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (discRef.current) {
      discRef.current.rotation.z += 0.003;
    }
    
    if (glowRef.current) {
      glowRef.current.rotation.z -= 0.001;
    }
  });

  return (
    <group position={position}>
      {/* Black hole center (event horizon) */}
      <mesh ref={blackHoleRef}>
        <sphereGeometry args={[size * 0.5, 32, 32]} />
        <meshBasicMaterial color="black" />
      </mesh>
      
      {/* Accretion disc */}
      <mesh ref={discRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[size * 0.6, size * 2, 64]} />
        <meshBasicMaterial 
          side={THREE.DoubleSide}
          transparent={true}
          opacity={0.7}
        >
          <gradientTexture 
            stops={[0, 0.3, 0.6, 1]} 
            colors={['#9c27b0', '#3f51b5', '#2196f3', '#000000']} 
            attach="map"
          />
        </meshBasicMaterial>
      </mesh>
      
      {/* Outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 0.55, 32, 32]} />
        <meshBasicMaterial 
          color="#3f51b5"
          transparent={true}
          opacity={0.2}
        />
      </mesh>
      
      {/* Light emission */}
      <pointLight color="#3f51b5" intensity={2} distance={20} />
    </group>
  );
};

export default BlackHole; 