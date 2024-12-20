import React from 'react';
import { TreePine } from 'lucide-react';
import { Gift } from '../types';
import GiftItem from './GiftItem';
import Snowfall from './Snowfall';

interface Props {
  gifts: Gift[];
  onGiftClick: (id: string) => void;
  attemptsLeft: number;
}

const ChristmasTree: React.FC<Props> = ({ gifts, onGiftClick, attemptsLeft }) => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      <Snowfall />
      <div className="relative">
        <TreePine className="w-64 h-64 text-green-700" />
        {gifts.map((gift) => (
          <GiftItem
            key={gift.id}
            gift={gift}
            onClick={() => onGiftClick(gift.id)}
            disabled={attemptsLeft === 0}
          />
        ))}
      </div>
      <div className="absolute bottom-4 text-center">
        <p className="text-lg font-medium text-white">
          Attempts left today: {attemptsLeft}
        </p>
      </div>
    </div>
  );
};

export default ChristmasTree;