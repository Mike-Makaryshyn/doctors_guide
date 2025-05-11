import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import { Suspense, useMemo, useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

const HOLE_RADIUS_RATIO = 0.25; // частка від меншої сторони для отвору
const LABEL_OFFSET = 0.25; // відстань мітки над площиною
const OFFSET = 0.5; // більший відступ, одразу видно окремі стінки

/* Розміри куба */
const W = 2;   // ширина  (x)
const H = 1;   // висота   (y)
const D = 1;   // глибина  (z)

/**
 * дані про кожну з шести граней
 * [id, color, label, size[w,h], базова позиція, обертання, нормаль]
 */
const faces = [
  ['top',    '#d32f2f', 'M. obliquus internus abdominis',  [W, D], [0,  H/2, 0], [-Math.PI / 2, 0, 0],  [0,  1,  0]],
  ['bottom', '#1976d2', 'Leistenband',        [W, D], [0, -H/2, 0], [ Math.PI / 2, 0, 0],  [0, -1,  0]],
  ['front',  '#ffa000', 'Aponeurose des M. obl. exter. abdominis',    [W, H], [0, 0,  D/2], [0, 0, 0],             [0,  0,  1]],
  ['back',   '#388e3c', 'Transversalisfaszie',  [W, H], [0, 0, -D/2], [0, Math.PI, 0],       [0,  0, -1]],
  ['right',  '#7b1fa2', 'Laterale Wand',          [D, H], [ W/2, 0, 0], [0,-Math.PI / 2, 0],   [1,  0,  0]],
  ['left',   '#00796b', 'Mediale Wand',           [D, H], [-W/2, 0, 0], [0, Math.PI / 2, 0],   [-1, 0,  0]],
];

const orientationLabel = {
  top:    'Kranial',
  bottom: 'Kaudal',
  left:   'Medial',
  right:  'Lateral',
};

function makeWallGeometry(id, size) {
  const [w, h] = size;
  if (id === 'left' || id === 'right') {
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2, -h / 2);
    shape.lineTo(w / 2, -h / 2);
    shape.lineTo(w / 2, h / 2);
    shape.lineTo(-w / 2, h / 2);
    shape.lineTo(-w / 2, -h / 2);
    const radius = Math.min(w, h) * HOLE_RADIUS_RATIO;
    const hole = new THREE.Path();
    hole.absarc(0, 0, radius, 0, Math.PI * 2, false);
    shape.holes.push(hole);
    return new THREE.ShapeGeometry(shape);
  }
  return new THREE.PlaneGeometry(w, h);
}

/* проста демпф-інтерполяція для плавного руху */
const damp = (pos, target, lambda = 0.12) => pos + (target - pos) * lambda;

/* окрема грань (Plane), яка може «виїжджати» */
function Face({ data, explode }) {
  const [id, color, label, size, basePos, rot, normal] = data;
  const groupRef = useRef(null);

  const ringGeometry = useMemo(() => {
    if (id !== 'left' && id !== 'right') return null;
    const radius = Math.min(size[0], size[1]) * HOLE_RADIUS_RATIO;
    const tubeRadius = radius * 0.1;
    return new THREE.TorusGeometry(radius, tubeRadius, 16, 64);
  }, [id, size]);

  const ringMaterial = useMemo(() => {
    if (!ringGeometry) return null;
    return new THREE.MeshStandardMaterial({
      color,
      roughness: 0.4,
      metalness: 0.2,
      side: THREE.DoubleSide,
    });
  }, [ringGeometry, color]);

  const material = useMemo(() => {
    // Base settings
    const params = {
      side: THREE.DoubleSide,
      roughness: 0.6,
      metalness: 0,
    };

    if (id === 'top') {
      return new THREE.MeshStandardMaterial({
        ...params,
        color: '#d94545',          // muscle‑red
      });
    }
    if (id === 'bottom') {
      return new THREE.MeshStandardMaterial({
        ...params,
        color: '#d7d7d7',          // fibrous ligament
      });
    }
    if (id === 'back') {
      return new THREE.MeshPhysicalMaterial({
        color: '#64ffda',
        transmission: 0.8,
        roughness: 0.3,
        thickness: 0.01,
        side: THREE.DoubleSide,
      });
    }
    // default for other walls
    return new THREE.MeshStandardMaterial({
      ...params,
      color,
    });
  }, [id, color]);

  const isRingFace = id === 'left' || id === 'right';
  const ringLabel =
    id === 'left'
      ? 'Anulus inguinalis superficialis'
      : id === 'right'
      ? 'Anulus inguinalis profundus'
      : null;

  useFrame(() => {
    if (!groupRef.current) return;
    const offset = explode ? OFFSET : 0;
    const target = new THREE.Vector3(
      basePos[0] + normal[0] * offset,
      basePos[1] + normal[1] * offset,
      basePos[2] + normal[2] * offset,
    );
    const p = groupRef.current.position;
    p.set(damp(p.x, target.x), damp(p.y, target.y), damp(p.z, target.z));
  });

  return (
    <group ref={groupRef} rotation={rot} position={basePos}>
      {/* main wall */}
      <mesh
        geometry={makeWallGeometry(id, size)}
        material={material}
      />
      {/* 3‑D ring for medial & lateral walls */}
      {ringGeometry && (
        <mesh
          geometry={ringGeometry}
          material={ringMaterial}
          position={[0, 0, 0.02]}   // push slightly outward
        />
      )}
      {/* label */}
      {(() => {
        const liftY = (id === 'left' || id === 'right') ? size[1] * 0.35 : 0;
        return (
          <Text
            billboard
            fontSize={0.1}
            color="white"
            anchorX="center"
            anchorY="middle"
            position={[0, liftY, (id === 'left' || id === 'right') ? -0.04 : 0.04]}
            rotation={[0, (id === 'left' || id === 'right') ? Math.PI : 0, 0]}
          >
            {label}
          </Text>
        );
      })()}
      {ringLabel && (
        <Text
          billboard
          fontSize={0.07}
          color="yellow"
          outlineWidth={0.004}
          outlineColor="black"
          anchorX="center"
          anchorY="middle"
          position={[0, isRingFace ? 0 : -size[1] * 0.4, isRingFace ? -0.02 : 0.06]}
          rotation={[0, isRingFace ? Math.PI : 0, 0]}
        >
          {ringLabel}
        </Text>
      )}
    </group>
  );
}

function Canal({ explode }) {
  const grp = useRef();
  useEffect(() => {
    // анатомічна орієнтація: медіальна стінка трохи нижче, латеральна — вище
    if (grp.current) {
      grp.current.rotation.set(-0.15, 0.35, 0.25); // X (cranial tilt), Y (isometry), Z (roll)
    }
  }, []);
  return (
    <group ref={grp}>
      {faces.map((data) => (
        <Face key={data[0]} data={data} explode={explode} />
      ))}
      {/* Orientation labels positioned outside each face */}
      {faces.map(([id, , , , basePos, , normal]) =>
        orientationLabel[id] ? (
          <Text
            key={`label-${id}`}
            billboard
            fontSize={0.16}
            color="black"
            depthTest={false}
            outlineWidth={0.005}
            outlineColor="white"
            anchorX="center"
            anchorY="middle"
            position={[
              basePos[0] + normal[0] * (OFFSET + LABEL_OFFSET),
              basePos[1] + normal[1] * (OFFSET + LABEL_OFFSET),
              basePos[2] + normal[2] * (OFFSET + LABEL_OFFSET),
            ]}
          >
            {orientationLabel[id]}
          </Text>
        ) : null
      )}
    </group>
  );
}

/* Основний компонент сцени */
export default function InguinalCanal3D() {
  const [explode, setExplode] = useState(false);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />
      {/* орієнтири */}
      {/* <Text billboard fontSize={0.12} position={[0, H/2 + 0.4, 0]}>Cranial</Text>
      <Text billboard fontSize={0.12} position={[0, -H/2 - 0.4, 0]}>Caudal</Text>
      <Text billboard fontSize={0.12} position={[-W/2 - 0.7, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        Medial
      </Text>
      <Text billboard fontSize={0.12} position={[W/2 + 0.7, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        Lateral
      </Text> */}
      <Suspense fallback={null}>
        <Canal explode={explode} />
      </Suspense>
      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI * 0.15}
        maxPolarAngle={Math.PI * 0.85}
      />
      {/* HTML‑кнопка поверх Canvas */}
      <Html position={[0, -H - 0.8, 0]} style={{ pointerEvents: 'auto' }}>
        <button
          onClick={() => setExplode(prev => !prev)}   // toggle explode state
          style={{
            padding: '8px 14px',
            fontWeight: 600,
            borderRadius: 6,
            border: 'none',
            background: '#013b6e',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          {explode ? 'Скласти канал' : 'Розгорнути стінки'}
        </button>
      </Html>
    </Canvas>
  );
}