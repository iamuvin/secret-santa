import React, { useState } from 'react';
import { Gift, UserCircle, Send } from 'lucide-react';

interface Participant {
  name: string;
  wishlist: string;
}

export function SecretSanta() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [newName, setNewName] = useState('');
  const [newWishlist, setNewWishlist] = useState('');
  const [matches, setMatches] = useState<{giver: string, receiver: string}[]>([]);
  const [showMatches, setShowMatches] = useState(false);

  const addParticipant = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName && newWishlist) {
      setParticipants([...participants, { name: newName, wishlist: newWishlist }]);
      setNewName('');
      setNewWishlist('');
    }
  };

  const generateMatches = () => {
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const newMatches = participants.map((_, index) => ({
      giver: participants[index].name,
      receiver: shuffled[(index + 1) % shuffled.length].name
    }));
    setMatches(newMatches);
    setShowMatches(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">🎅 AI Secret Santa</h2>
        <p className="text-white/80">Join our magical gift exchange!</p>
      </div>

      <form onSubmit={addParticipant} className="mb-8 space-y-4">
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Participant's Name"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50"
          />
        </div>
        <div>
          <textarea
            value={newWishlist}
            onChange={(e) => setNewWishlist(e.target.value)}
            placeholder="Wishlist (e.g., books, games, clothes)"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          <UserCircle size={20} />
          Add Participant
        </button>
      </form>

      {participants.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Participants</h3>
          <div className="space-y-3">
            {participants.map((p, i) => (
              <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="font-medium text-white">{p.name}</div>
                <div className="text-sm text-white/70">{p.wishlist}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {participants.length >= 3 && !showMatches && (
        <button
          onClick={generateMatches}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          <Gift size={20} />
          Generate Secret Santa Matches
        </button>
      )}

      {showMatches && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Secret Santa Matches</h3>
          <div className="space-y-3">
            {matches.map((match, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-500/20 border border-green-500/30">
                <div className="flex items-center gap-2 text-white">
                  <span>{match.giver}</span>
                  <Send size={16} className="mx-2" />
                  <span>{match.receiver}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}