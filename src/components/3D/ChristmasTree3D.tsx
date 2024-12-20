import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TREE_COLORS } from '../../utils/constants';
import { generateTreeDecorations } from './utils';

export function ChristmasTree3D() {
  const treeRef = useRef<THREE.Group>(null);
  const lightsRef = useRef<THREE.PointLight[]>([]);

  // Enhanced tree layers for a fuller look
  const treeLayers = [
    { scale: 1.8, height: 1.5, y: 4.5 },
    { scale: 2.3, height: 2.0, y: 3.0 },
    { scale: 2.8, height: 2.0, y: 1.5 },
    { scale: 3.2, height: 1.8, y: 0.8 }
  ];

  const decorations = generateTreeDecorations();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    lightsRef.current.forEach((light, i) => {
      if (light) {
        light.intensity = 0.8 + Math.sin(time * 2 + i) * 0.4;
      }
    });
    if (treeRef.current) {
      treeRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <group ref={treeRef}>
      {treeLayers.map((layer, i) => (
        <mesh key={i} position={[0, layer.y, 0]} castShadow>
          <coneGeometry args={[layer.scale, layer.height, 32]} />
          <meshStandardMaterial 
            color={TREE_COLORS.main}
            roughness={0.3}
            metalness={0.2}
            emissive={TREE_COLORS.emissive}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}

      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.6, 1, 12]} />
        <meshStandardMaterial 
          color={TREE_COLORS.trunk}
          roughness={0.8}
          metalness={0.2}
          emissive={TREE_COLORS.trunkEmissive}
          emissiveIntensity={0.2}
        />
      </mesh>

      {decorations.map((dec, i) => (
        <mesh key={i} position={dec.position} scale={dec.scale}>
          {dec.type === 'bauble' ? (
            <>
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial 
                color={dec.color}
                metalness={0.9}
                roughness={0.1}
                envMapIntensity={2}
              />
            </>
          ) : (
            <>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial
                color={dec.color}
                emissive={dec.color}
                emissiveIntensity={2}
              />
              <pointLight
                ref={(light) => {
                  if (light) lightsRef.current[i] = light;
                }}
                color={dec.color}
                intensity={0.8}
                distance={4}
              />
            </>
          )}
        </mesh>
      ))}

      <group position={[0, 6.2, 0]} rotation={[0, Math.PI / 4, 0]}>
        <mesh castShadow>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color={TREE_COLORS.star}
            metalness={0.9}
            roughness={0.1}
            emissive={TREE_COLORS.star}
            emissiveIntensity={2}
          />
        </mesh>
        <pointLight color={TREE_COLORS.star} intensity={2} distance={8} />
      </group>

      <pointLight position={[3, 4, 3]} color={TREE_COLORS.ambient1} intensity={1.5} />
      <pointLight position={[-3, 3, -3]} color={TREE_COLORS.ambient2} intensity={1.5} />
      <pointLight position={[0, 5, 0]} color={TREE_COLORS.ambient3} intensity={1.8} />
    </group>
  );
}