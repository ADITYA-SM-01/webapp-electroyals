import React, { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

// BlackHole component with accretion disk
function BlackHole() {
  const blackHoleRef = useRef();
  const accretionDiskRef = useRef();
  const { viewport } = useThree();
  
  // Scale based on viewport size - increased for more prominence
  const scale = useMemo(() => Math.min(2.0, Math.max(1.0, viewport.width / 18)), [viewport]);
  
  // Create shader material for black hole effect
  const blackHoleMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color('#000000') }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        
        void main() {
          // Calculate distance from center
          vec2 center = vec2(0.5, 0.5);
          float dist = distance(vUv, center);
          
          // Black hole effect - very dark in the center
          float intensity = smoothstep(0.2, 0.5, dist);
          gl_FragColor = vec4(color * intensity, 1.0);
        }
      `,
    });
  }, []);

  // Accretion disk material with glow - enhanced brightness
  const accretionDiskMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vPos;
        
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }
        
        void main() {
          // Radial coordinates
          vec2 center = vec2(0.5, 0.5);
          float dist = distance(vUv, center);
          
          // Only show ring, not entire disk
          float ring = smoothstep(0.2, 0.25, dist) * (1.0 - smoothstep(0.4, 0.5, dist));
          
          // Colors - fiery orange/blue mix with increased vibrancy
          vec3 color1 = vec3(1.0, 0.7, 0.2); // Brighter Orange
          vec3 color2 = vec3(0.2, 0.5, 1.0); // Brighter Blue
          
          // Noise for variation
          float noise = hash(vUv + time * 0.05);
          
          // Rotation animation
          float angle = atan(vPos.y, vPos.x);
          float rotation = mod(angle + time * 0.2, 3.14159 * 2.0);
          
          // Pulsing
          float pulse = sin(time * 0.5) * 0.15 + 0.9; // Increased pulse intensity
          
          // Mix colors based on position and time
          vec3 finalColor = mix(color1, color2, sin(rotation * 3.0 + time) * 0.5 + 0.5);
          
          // Combine effects with increased brightness
          float alpha = ring * pulse * (noise * 0.3 + 0.8);
          gl_FragColor = vec4(finalColor * 1.3, alpha); // Brighten by 30%
        }
      `,
      side: THREE.DoubleSide
    });
  }, []);

  // Update time uniform for animations
  useFrame((state) => {
    if (blackHoleRef.current) {
      blackHoleRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
    if (accretionDiskRef.current) {
      accretionDiskRef.current.material.uniforms.time.value = state.clock.elapsedTime;
      // Slow down rotation for better performance
      accretionDiskRef.current.rotation.z += 0.0008; // Slightly faster for better visibility
    }
  });

  return (
    <group scale={[scale, scale, scale]} position={[0, 2, 0]}>
      {/* Black hole sphere */}
      <mesh ref={blackHoleRef}>
        <sphereGeometry args={[1.5, 24, 24]} />
        <primitive object={blackHoleMaterial} attach="material" />
      </mesh>
      
      {/* Accretion disk */}
      <mesh ref={accretionDiskRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 7, 48]} />
        <primitive object={accretionDiskMaterial} attach="material" />
      </mesh>
    </group>
  );
}

// Distant stars and particles
function SpaceEnvironment() {
  const particlesRef = useRef();
  const { viewport } = useThree();
  
  // Adjust star count based on viewport/device
  const starCount = useMemo(() => {
    return viewport.width < 10 ? 2000 : 3500;
  }, [viewport]);
  
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <group ref={particlesRef}>
      <Stars radius={100} depth={50} count={starCount} factor={4} saturation={0} fade speed={0.5} />
    </group>
  );
}

export default function BlackHoleBackground() {
  // Handle device performance adjustments
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  useEffect(() => {
    // Simple detection for mobile devices or low performance
    const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsLowPerformance(isMobile);
    
    // Clean up ThreeJS resources when unmounting
    return () => {
      // Force garbage collection hint (not guaranteed)
      if (typeof window !== 'undefined') {
        if (window.gc) window.gc();
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full z-0 overflow-hidden pointer-events-none bg-black">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: isLowPerformance ? 60 : 55 }}
        dpr={[1, isLowPerformance ? 1.5 : 2]} // Lower resolution for mobile
        performance={{ min: 0.5 }}
        gl={{ 
          powerPreference: "high-performance", 
          antialias: !isLowPerformance,
          stencil: false,
          depth: false 
        }}
      >
        <color attach="background" args={['#000']} />
        <fog attach="fog" args={['#000', 10, 40]} />
        
        <Suspense fallback={null}>
          <BlackHole />
          <SpaceEnvironment />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.1}
        />
      </Canvas>
    </div>
  );
} 