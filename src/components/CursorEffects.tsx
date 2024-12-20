import React, { useEffect, useState } from 'react';

export function CursorEffects() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="relative">
          {/* Snowflake cursor */}
          <div className="absolute w-8 h-8 animate-spin-slow">
            ❄️
          </div>
          {/* Glow effect */}
          <div className="absolute w-12 h-12 bg-white/20 rounded-full blur-md -translate-x-1/2 -translate-y-1/2" />
          {/* Trail effect */}
          <div className="absolute w-4 h-4 bg-white rounded-full animate-ping -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      
      {/* Sparkle trail */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-sparkle"
            style={{
              left: Math.cos(i * 60 * Math.PI / 180) * 10,
              top: Math.sin(i * 60 * Math.PI / 180) * 10,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    </>
  );
}