import React from 'react';
import { RefreshCw } from 'lucide-react';

interface Props {
  onReset: () => void;
}

export function ResetButton({ onReset }: Props) {
  return (
    <button
      onClick={onReset}
      className="fixed top-4 right-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all transform hover:scale-105"
    >
      <RefreshCw size={20} />
      <span>Play Again</span>
    </button>
  );
}