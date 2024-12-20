import { Gift } from '../types';

export function generateRandomGifts(): Gift[] {
  const gifts: Gift[] = [];
  const positions = [
    { x: -3, y: 0, z: 3 },
    { x: 3, y: 0, z: 3 },
    { x: -2, y: 0, z: -2 },
    { x: 2, y: 0, z: -2 },
    { x: 0, y: 0, z: 4 },
    { x: -4, y: 0, z: 0 },
    { x: 4, y: 0, z: 0 },
    { x: 0, y: 0, z: -4 },
    { x: -2, y: 0, z: 2 },
    { x: 2, y: 0, z: 2 },
  ];

  // Shuffle positions
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  return positions.map((position, index) => ({
    id: `gift-${index}`,
    position,
    // Make it harder to win - only 3% chance
    discount: Math.random() < 0.03 ? Math.floor(Math.random() * 26) + 5 : 0,
    isRevealed: false,
  }));
}