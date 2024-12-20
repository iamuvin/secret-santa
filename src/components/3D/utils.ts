import { Vector3 } from 'three';

interface Decoration {
  type: 'bauble' | 'light';
  position: Vector3;
  color: string;
  scale: number;
}

const DECORATION_COLORS = [
  '#ff0000', // Red
  '#ffd700', // Gold
  '#00ff00', // Bright Green
  '#ff69b4', // Pink
  '#4169e1', // Royal Blue
  '#ff4500', // Orange Red
  '#9400d3', // Purple
];

export function generateTreeDecorations(): Decoration[] {
  const decorations: Decoration[] = [];
  
  // Generate baubles
  for (let layer = 0; layer < 6; layer++) {
    const y = layer * 0.8 + 1;
    const radius = 2.2 - (layer * 0.3);
    const count = 14 - layer;
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      decorations.push({
        type: 'bauble',
        position: new Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ),
        color: DECORATION_COLORS[Math.floor(Math.random() * DECORATION_COLORS.length)],
        scale: 0.18 + Math.random() * 0.12
      });
    }
  }

  // Generate lights
  for (let i = 0; i < 80; i++) {
    const y = (i / 80) * 4.5 + 0.5;
    const radius = 2.2 - (y / 4.5);
    const angle = (i / 40) * Math.PI * 12;
    decorations.push({
      type: 'light',
      position: new Vector3(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      ),
      color: DECORATION_COLORS[i % DECORATION_COLORS.length],
      scale: 0.1
    });
  }

  return decorations;
}