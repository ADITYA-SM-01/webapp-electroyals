import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const EnhancedStarsCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create starfields with different depths for parallax effect
    const createStarfield = (count: number, size: number, depth: number, color: number, opacity: number) => {
      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({
        color: color,
        size: size,
        transparent: true,
        opacity: opacity
      });
      
      const starsPositions = new Float32Array(count * 3);
      
      for (let i = 0; i < count * 3; i += 3) {
        starsPositions[i] = (Math.random() - 0.5) * depth;
        starsPositions[i + 1] = (Math.random() - 0.5) * depth;
        starsPositions[i + 2] = (Math.random() - 0.5) * depth;
      }
      
      starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
      const stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);
      
      return { geometry: starsGeometry, material: starsMaterial, object: stars };
    };
    
    // Create multiple star layers for depth effect
    const nearStars = createStarfield(500, 0.8, 100, 0xffffff, 0.8);
    const midStars = createStarfield(1000, 0.6, 200, 0xeeeeff, 0.6);
    const farStars = createStarfield(2000, 0.5, 300, 0xaaaaff, 0.4);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x3333aa, 0.2);
    scene.add(ambientLight);
    
    // Animation function
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      // Rotate star layers at different speeds for parallax effect
      nearStars.object.rotation.y += 0.0008;
      nearStars.object.rotation.x += 0.0002;
      
      midStars.object.rotation.y += 0.0004;
      midStars.object.rotation.x += 0.0001;
      
      farStars.object.rotation.y += 0.0002;
      
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
    
    // Cleanup function
    return () => {
      cleanup();
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      nearStars.geometry.dispose();
      nearStars.material.dispose();
      midStars.geometry.dispose();
      midStars.material.dispose();
      farStars.geometry.dispose();
      farStars.material.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default EnhancedStarsCanvas; 