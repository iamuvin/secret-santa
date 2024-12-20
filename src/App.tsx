import React, { useState, useEffect } from 'react';
import { Scene3D } from './components/Scene3D';
import { UserForm } from './components/UserForm';
import { ChristmasWish } from './components/ChristmasWish';
import { AudioPlayer } from './components/AudioPlayer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CursorEffects } from './components/CursorEffects';
import { ResetButton } from './components/ResetButton';
import { Header } from './components/Header';
import { generateRandomGifts } from './utils/gameUtils';
import { initializeAudio } from './utils/music';
import { Gift, UserData } from './types';
import { useDeviceDetection } from './hooks/useDeviceDetection';

export function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [gifts, setGifts] = useState<Gift[]>(generateRandomGifts());
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [userData, setUserData] = useState<UserData | null>(null);
  const { isMobile } = useDeviceDetection();

  useEffect(() => {
    initializeAudio();
  }, []);

  const handleUserSubmit = (data: UserData) => {
    setUserData(data);
    setGameStarted(true);
    
    setTimeout(() => {
      setShowWish(true);
      setTimeout(() => setShowWish(false), 5000);
    }, 1000);
  };

  const handleGiftClick = (id: string) => {
    if (attemptsLeft > 0) {
      setGifts(gifts.map(gift => 
        gift.id === id ? { ...gift, isRevealed: true } : gift
      ));
      setAttemptsLeft(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setGifts(generateRandomGifts());
    setAttemptsLeft(3);
    setGameStarted(false);
    setUserData(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      {!isMobile && <CursorEffects />}
      <AudioPlayer />

      <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen flex flex-col">
        <Header />
        
        <div className="flex-grow flex items-center justify-center pb-16 md:pb-24">
          <div className="w-full max-w-7xl">
            {!gameStarted ? (
              <UserForm onSubmit={handleUserSubmit} />
            ) : (
              <>
                <Scene3D
                  gifts={gifts}
                  onGiftClick={handleGiftClick}
                  attemptsLeft={attemptsLeft}
                  isMobile={isMobile}
                />
                <ResetButton onReset={handleReset} />
              </>
            )}
          </div>
        </div>
      </div>

      {showWish && userData && (
        <ChristmasWish userName={userData.fullName} />
      )}
    </div>
  );
}