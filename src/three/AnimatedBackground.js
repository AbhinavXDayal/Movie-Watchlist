import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const mountRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0); // transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Responsive
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Particles
    const particles = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    for (let i = 0; i < particles; i++) {
      positions.push((Math.random() - 0.5) * 200);
      positions.push((Math.random() - 0.5) * 120);
      positions.push((Math.random() - 0.5) * 100);
      // Netflix red with some variation
      const color = new THREE.Color().setHSL(0, 0.85, 0.45 + Math.random() * 0.1);
      colors.push(color.r, color.g, color.b);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 2.5, vertexColors: true, opacity: 0.7, transparent: true });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation
    let frameId;
    const animate = () => {
      points.rotation.y += 0.0015;
      points.rotation.x += 0.0007;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
        opacity: 0.7,
      }}
    />
  );
};

export default AnimatedBackground; 