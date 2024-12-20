import React from 'react';

export function SnowEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-snowfall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 10}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            opacity: 0.6 + Math.random() * 0.4,
            fontSize: `${Math.random() * 10 + 10}px`
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  );
}