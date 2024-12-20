import { Howl } from 'howler';

// Multiple fallback URLs for better reliability
const MUSIC_URLS = [
  'https://cdn.pixabay.com/download/audio/2022/12/15/audio_2a1fea69cd.mp3',
  'https://assets.mixkit.co/music/preview/mixkit-christmas-magic-132.mp3',
  'https://assets.mixkit.co/music/preview/mixkit-jingle-bells-600.mp3'
];

export const christmasMusic = new Howl({
  src: MUSIC_URLS,
  loop: true,
  volume: 0.4,
  preload: true,
  html5: true,
  autoplay: false,
  onloaderror: (id, err) => {
    console.error('Audio loading error:', err);
    // Try next source if available
    const currentIndex = MUSIC_URLS.indexOf(christmasMusic._src as string);
    if (currentIndex < MUSIC_URLS.length - 1) {
      christmasMusic.unload();
      christmasMusic._src = MUSIC_URLS[currentIndex + 1];
      christmasMusic.load();
    }
  }
});

let hasInteracted = false;

export const initializeAudio = () => {
  if (hasInteracted) return;

  const startAudio = () => {
    if (!hasInteracted) {
      christmasMusic.play();
      hasInteracted = true;
      
      // Clean up event listeners
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
      document.removeEventListener('keydown', startAudio);
    }
  };

  // Add event listeners for user interaction
  document.addEventListener('click', startAudio);
  document.addEventListener('touchstart', startAudio);
  document.addEventListener('keydown', startAudio);
};