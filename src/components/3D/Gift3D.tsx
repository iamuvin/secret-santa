import React from 'react';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { Gift } from '../../types';

interface Props {
  gift: Gift;
  onClick: () => void;
  disabled: boolean;
}

export function Gift3D({ gift, onClick, disabled }: Props) {
  const [spring, api] = useSpring(() => ({
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  const handlePointerOver = () => {
    if (!disabled && !gift.isRevealed) {
      api.start({ scale: [1.2, 1.2, 1.2] });
    }
  };

  const handlePointerOut = () => {
    api.start({ scale: [1, 1, 1] });
  };

  const handleClick = () => {
    if (!disabled && !gift.isRevealed) {
      onClick();
      api.start({
        rotation: [0, Math.PI * 2, 0],
      });
    }
  };

  return (
    <animated.group
      position={[gift.position.x, gift.position.y, gift.position.z]}
      scale={spring.scale}
      rotation={spring.rotation}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {/* Gift box */}
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={gift.isRevealed ? '#cccccc' : '#ff0000'}
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
      
      {/* Ribbon */}
      <mesh position={[0, 0.51, 0]} castShadow>
        <boxGeometry args={[1.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#ffeb3b" metalness={0.3} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.51, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[1.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#ffeb3b" metalness={0.3} roughness={0.2} />
      </mesh>
    </animated.group>
  );
}