import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface SimpleBlackHoleProps {
  className?: string;
}

const SimpleBlackHole: React.FC<SimpleBlackHoleProps> = ({ 
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create black hole
    const blackHoleGeometry = new THREE.SphereGeometry(5, 32, 32);
    const blackHoleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    // Position it to the right side of the screen
    blackHole.position.set(20, 0, -20);
    scene.add(blackHole);
    
    // Create accretion disc
    const discGeometry = new THREE.RingGeometry(6, 18, 64);
    const discMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x3f51b5,
      side: THREE.DoubleSide,
      opacity: 0.7,
      transparent: true
    });
    const disc = new THREE.Mesh(discGeometry, discMaterial);
    disc.rotation.x = Math.PI / 3;
    disc.position.copy(blackHole.position);
    scene.add(disc);
    
    // Add glow
    const glowGeometry = new THREE.SphereGeometry(5.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x3f51b5,
      opacity: 0.2,
      transparent: true
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.copy(blackHole.position);
    scene.add(glow);
    
    // Add stars around black hole
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true
    });
    
    const starsCount = 2000;
    const starsPositions = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount * 3; i += 3) {
      starsPositions[i] = (Math.random() - 0.5) * 100;
      starsPositions[i + 1] = (Math.random() - 0.5) * 100;
      starsPositions[i + 2] = (Math.random() - 0.5) * 100;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    // Animation
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      disc.rotation.z += 0.005;
      stars.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    };
    
    const cleanup = animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cleanup();
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      blackHoleGeometry.dispose();
      blackHoleMaterial.dispose();
      discGeometry.dispose();
      discMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
    />
  );
};

export default SimpleBlackHole; 