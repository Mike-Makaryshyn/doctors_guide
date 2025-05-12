import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import stomachUrl from './realistic_stomach.glb?url';
import diaphragmUrl from './240112_diaphragm.glb?url';
import DiaphragmModel from './DiaphragmModel.jsx';

/* ────────── допоміжний груповий вузол ────────── */
function HiatusScene() {
  /* геометрія та матеріали */
  const crusGeom    = new THREE.BoxGeometry(0.4, 0.1, 2.5);     // crura
  const crusMat     = new THREE.MeshStandardMaterial({ color: '#d7d7d7', roughness: 0.6 });

  const esophGeom   = new THREE.CylinderGeometry(0.2, 0.2, 3, 32);
  const esophMat    = new THREE.MeshStandardMaterial({ color: '#ff8a65', roughness: 0.5 });

  // Load model from imported URL
  const { scene: stomachScene } = useGLTF(stomachUrl);
  const { scene: diaphragmScene } = useGLTF(diaphragmUrl);

  return (
    <group>
      {/* linkes Crus */}
      <mesh geometry={crusGeom} material={crusMat} position={[-0.3, -0.05, 0]} rotation={[0, 0.2, 0]}>
        <Text
          billboard
          fontSize={0.1}
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 1.3]}
        >
          Crus sinistrum
        </Text>
      </mesh>

      {/* rechtes Crus */}
      <mesh geometry={crusGeom} material={crusMat} position={[ 0.3, -0.05, 0]} rotation={[0, -0.2, 0]}>
        <Text
          billboard
          fontSize={0.1}
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 1.3]}
        >
          Crus dextrum
        </Text>
      </mesh>

      {/* durchziehender Ösophagus */}
      <mesh geometry={esophGeom} material={esophMat} position={[0, 0.65, 0]}>
        <Text
          fontSize={0.2}
          anchorX="center"
          anchorY="middle"
          position={[0.22, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          Ösophagus
        </Text>
      </mesh>

      {/* Realistischer Magen */}
      <primitive object={stomachScene.clone()} position={[0, -3.15, 0]} scale={[0.5, 0.5, 0.5]} />
      <Text
        billboard
        fontSize={0.3}
        anchorX="center"
        anchorY="middle"
        position={[0, -3.15, 0.8]}
      >
        Magen
      </Text>

      {/* Realistisches Zwerchfell-Fragment */}
      <DiaphragmModel position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
    </group>
  );
}

/* ────────── обгортка Canvas ────────── */
export default function DetailedEsophagealCanal3D() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 2, 6], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <HiatusScene />
        </Suspense>
        <OrbitControls enablePan={false}
                       minPolarAngle={Math.PI * 0.25}
                       maxPolarAngle={Math.PI * 0.75} />
      </Canvas>
    </div>
  );
}

useGLTF.preload(stomachUrl);
useGLTF.preload(diaphragmUrl);
