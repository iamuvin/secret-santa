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
        {/* ... rest of the existing Canvas code ... */}
      </div>
    </>
  );
}