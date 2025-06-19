'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Simplified sphere component
const BackgroundSphere = () => {
    const sphereRef = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            sphereRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
        }
    });
    
    return (
        <mesh ref={sphereRef} position={[-5, 0, 0]}>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial 
                color="#150033" 
                emissive="#7F00FF"
                emissiveIntensity={0.2}
                metalness={0.8}
                roughness={0.5}
                wireframe={true}
            />
        </mesh>
    );
};

// Simple loading fallback
const LoadingFallback = () => (
    <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshBasicMaterial color="#7F00FF" wireframe />
    </mesh>
);

// Main component
const ModelViewer = () => {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={1.2} />
                <pointLight position={[-5, 0, 5]} intensity={1.5} color="#7F00FF" />
                
                <Suspense fallback={<LoadingFallback />}>
                    <BackgroundSphere />
                    <Stars 
                        radius={100} 
                        depth={50} 
                        count={5000} 
                        factor={4} 
                        saturation={0} 
                        fade 
                        speed={1} 
                    />
                    <Sparkles 
                        count={150} 
                        scale={15} 
                        size={1} 
                        speed={0.3} 
                        color="#FFFFFF" 
                    />
                </Suspense>
                
                <OrbitControls 
                    enableZoom={false} 
                    autoRotate 
                    autoRotateSpeed={0.3}
                    enablePan={false}
                />
            </Canvas>
        </div>
    );
};

export default ModelViewer; 