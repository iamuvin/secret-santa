import React from 'react';
import { Gift as GiftIcon } from 'lucide-react';
import { Gift } from '../types';

interface Props {
  gift: Gift;
  onClick: () => void;
  disabled: boolean;
}

const GiftItem: React.FC<Props> = ({ gift, onClick, disabled }) => {
  return (
    <button
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{ top: gift.position.top, left: gift.position.left }}
      onClick={onClick}
      disabled={disabled || gift.isRevealed}
    >
      <GiftIcon 
        className={`w-12 h-12 ${gift.isRevealed ? 'text-gray-400' : 'text-red-500'}`}
      />
      {gift.isRevealed && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-2 rounded-lg shadow-lg">
          <p className="text-sm font-bold text-green-600">{gift.discount}% OFF!</p>
        </div>
      )}
    </button>
  );
};

export default GiftItem;