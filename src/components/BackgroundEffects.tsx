import React from 'react';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 animate-gradient-shift"></div>
      
      {/* Floating ornaments */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2
            }}
          />
        ))}
      </div>
      
      {/* Northern lights effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-green-500/10 animate-aurora"></div>
    </div>
  );
}