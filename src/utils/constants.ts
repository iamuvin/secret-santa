export const CHRISTMAS_MUSIC_URL = 'https://cdn.pixabay.com/download/audio/2022/12/15/audio_2a1fea69cd.mp3?filename=christmas-magic-141605.mp3';

export const TREE_COLORS = {
  main: '#0f9b4d', // Brighter green
  emissive: '#1a4d2e', // Deep green glow
  trunk: '#8b4513', // Rich brown
  trunkEmissive: '#3d200b', // Warm brown glow
  star: '#ffd700', // Bright gold
  ambient1: '#ff6b6b', // Warm red
  ambient2: '#4ecdc4', // Cool teal
  ambient3: '#ffe66d', // Warm yellow
} as const;

export const ANIMATION_CLASSES = {
  button: 'transform hover:scale-105 active:scale-95 transition-all duration-200',
  input: 'transition-all duration-200 focus:ring-2 focus:ring-green-400/20',
  card: 'backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5',
} as const;