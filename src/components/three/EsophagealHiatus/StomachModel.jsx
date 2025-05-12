// src/components/three/StomachModel.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Stomach() {
  // useGLTF автоматично кешує модель
  const { scene } = useGLTF('/models/stomach.glb');
  return <primitive object={scene} />;
}

export default function StomachViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<mesh><boxGeometry/><meshBasicMaterial color="gray" /></mesh>}>
        <Stomach />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}