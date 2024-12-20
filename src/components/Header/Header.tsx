import React from 'react';
import { TreePine } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center py-4 md:py-8">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <TreePine className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
        <h1 className="text-2xl md:text-4xl font-bold text-white">Christmas Magic</h1>
        <TreePine className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
      </div>
      <p className="mt-2 text-sm md:text-lg text-white/80">
        Discover the joy of giving this holiday season
      </p>
    </header>
  );
}