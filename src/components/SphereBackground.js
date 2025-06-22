'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles, Ring } from '@react-three/drei';
import * as THREE from 'three';

// Sphere component with interactive drag rotation
const WireframeSphere = () => {
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  useFrame(() => {
    if (sphereRef.current && !isDragging) {
      // Only auto-rotate when not being dragged
      const speed = hovered ? 0.15 : 0.08;
      sphereRef.current.rotation.y += speed * 0.01;
      sphereRef.current.rotation.z += (speed / 2) * 0.01;
    }
  });
  
  return (
    <group
      position={[-3, 0, 0]}
      ref={sphereRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
    >
      <mesh>
        <sphereGeometry args={[3.2, 64, 64]} />
        <meshStandardMaterial 
          color={hovered ? "#2a0060" : "#150033"} 
          emissive={hovered ? "#9500FF" : "#7F00FF"}
          emissiveIntensity={hovered ? 0.3 : 0.2}
          metalness={0.8}
          roughness={0.5}
          wireframe={true}
        />
      </mesh>
    </group>
  );
};

// Custom controls component for better sphere interaction
const CustomControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  
  return (
    <OrbitControls 
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={false}
      autoRotate={false}
      enablePan={false}
      rotateSpeed={0.7}
      target={new THREE.Vector3(-3, 0, 0)} // Target the sphere position
      enableDamping={true}
      dampingFactor={0.05}
    />
  );
};

// Rings component with interactive animation
const OrbitalRings = () => {
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const ringRef3 = useRef();
  
  useFrame((state) => {
    if (ringRef1.current) {
      ringRef1.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      ringRef1.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = -state.clock.getElapsedTime() * 0.15;
      ringRef2.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      ringRef3.current.rotation.z = -state.clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <group position={[-3, 0, 0]}>
      <Ring 
        ref={ringRef1}
        args={[3.5, 3.6, 64]} 
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial color="#7F00FF" transparent opacity={0.4} side={THREE.DoubleSide} />
      </Ring>
      
      <Ring 
        ref={ringRef2}
        args={[3.8, 3.9, 64]} 
        rotation={[Math.PI / 4, 0, 0]}
      >
        <meshBasicMaterial color="#5E00FF" transparent opacity={0.3} side={THREE.DoubleSide} />
      </Ring>

      <Ring 
        ref={ringRef3}
        args={[4.1, 4.15, 64]} 
        rotation={[Math.PI / 3, Math.PI / 6, 0]}
      >
        <meshBasicMaterial color="#9500FF" transparent opacity={0.2} side={THREE.DoubleSide} />
      </Ring>
    </group>
  );
};

// Loading placeholder
const LoadingPlaceholder = () => (
  <mesh>
    <sphereGeometry args={[1, 16, 16]} />
    <meshBasicMaterial color="#7F00FF" wireframe />
  </mesh>
);

// Main component
const SphereBackground = () => {
  // Add cursor style for draggable area
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .draggable-canvas {
        cursor: grab;
      }
      .draggable-canvas:active {
        cursor: grabbing;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-full draggable-canvas pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]} // Better performance on high-DPI screens
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[-5, 0, 5]} intensity={1.5} color="#7F00FF" />
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#5E00FF" />
        
        <Suspense fallback={<LoadingPlaceholder />}>
          <WireframeSphere />
          <OrbitalRings />
          <Stars 
            radius={100} 
            depth={50} 
            count={2000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          <Sparkles 
            count={80} 
            scale={10} 
            size={1} 
            speed={0.3} 
            color="#FFFFFF" 
          />
          <CustomControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SphereBackground; 