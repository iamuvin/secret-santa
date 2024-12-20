import React from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
  userName: string;
}

export function ChristmasWish({ userName }: Props) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      w-full max-w-lg p-6 md:p-8 bg-gradient-to-br from-green-600/90 to-red-600/90 
      backdrop-blur-lg rounded-2xl shadow-2xl z-50 text-center border border-white/20">
      <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4 animate-spin-slow" />
      
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        🎄 Merry Christmas, {userName}! 🎄
      </h2>
      
      <p className="text-lg md:text-xl text-white/90 mb-6">
        May your days be merry and bright, filled with joy, love, and the magic of the season!
      </p>
      
      <div className="space-y-4 text-white/80">
        <p>🎁 Wishing you wonderful surprises</p>
        <p>⭐ Magical moments with loved ones</p>
        <p>🕯️ Peace and warmth in your heart</p>
        <p>🎅 And all the blessings of Christmas!</p>
      </div>
      
      <div className="mt-6 text-sm text-white/60">
        With love, from Santa's Workshop 🏠❄️
      </div>
    </div>
  );
}