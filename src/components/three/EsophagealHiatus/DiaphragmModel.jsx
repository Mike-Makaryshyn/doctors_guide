import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import diaphragmUrl from './240112_diaphragm.glb?url';

export default function DiaphragmModel() {
  const { scene: diaphragmScene } = useGLTF(diaphragmUrl);

  return (
    <Suspense fallback={<mesh><boxGeometry /><meshBasicMaterial color="gray" /></mesh>}>
      {/* Realistisches Zwerchfell-Fragment */}
      <primitive
        object={diaphragmScene.clone()}
        position={[0, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      {/* other components */}
    </Suspense>
  );
}

useGLTF.preload(diaphragmUrl);