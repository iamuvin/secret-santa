import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import { ChristmasTree3D } from './3D/ChristmasTree3D';
import { Gift3D } from './3D/Gift3D';
import { Gift, Sparkles } from 'lucide-react';
import type { Gift as GiftType } from '../types';

interface Props {
  gifts: GiftType[];
  onGiftClick: (id: string) => void;
  attemptsLeft: number;
  isMobile: boolean;
}

export function Scene3D({ gifts, onGiftClick, attemptsLeft, isMobile }: Props) {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center gap-2">
          <Gift className="w-8 h-8 md:w-10 md:h-10" />
          Christmas Gift Hunt
          <Sparkles className="w-8 h-8 md:w-10 md:h-10" />
        </h2>
        <p className="text-lg text-white/80">
          Find the magical gifts around the tree and reveal your special Christmas discount!
        </p>
      </div>

      <div className="w-full h-[60vh] md:h-[80vh] relative rounded-xl overflow-hidden shadow-2xl">
        <Canvas shadows>
          <color attach="background" args={['#0a192f']} />
          <fog attach="fog" args={['#0a192f', 5, 20]} />
          
          <PerspectiveCamera 
            makeDefault 
            position={isMobile ? [0, 6, 14] : [0, 4, 10]} 
            fov={isMobile ? 60 : 75}
          />
          
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
            enablePan={false}
            touches={{
              one: true,
              two: false
            }}
          />
          
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
          
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
            <ChristmasTree3D />
            {gifts.map((gift) => (
              <Gift3D
                key={gift.id}
                gift={gift}
                onClick={() => onGiftClick(gift.id)}
                disabled={attemptsLeft === 0}
              />
            ))}
            <Environment preset="night" />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="#ffffff" opacity={0.1} transparent />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full">
        <p className="text-white font-medium text-base md:text-lg">
          🎮 Attempts left: <span className="font-bold text-green-400">{attemptsLeft}</span>
        </p>
      </div>
    </>
  );
}