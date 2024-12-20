import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { christmasMusic, initializeAudio } from '../utils/music';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize audio with user interaction handling
    initializeAudio();
    setIsPlaying(true);

    return () => {
      christmasMusic.stop();
      christmasMusic.unload();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      christmasMusic.pause();
    } else {
      christmasMusic.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-sm p-4 rounded-full 
        hover:bg-white/20 transition-all duration-300 z-50 group
        hover:scale-110 active:scale-95"
      onClick={togglePlay}
      aria-label={isPlaying ? 'Mute' : 'Unmute'}
    >
      {isPlaying ? (
        <Volume2 size={24} className="text-green-400 group-hover:animate-pulse" />
      ) : (
        <VolumeX size={24} className="text-white/70" />
      )}
      <div className="absolute -top-8 right-0 bg-black/80 text-white text-xs px-2 py-1 rounded
        opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {isPlaying ? 'Click to mute' : 'Click to play'}
      </div>
    </button>
  );
}