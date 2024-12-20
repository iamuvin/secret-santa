export interface Gift {
  id: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  discount: number;
  isRevealed: boolean;
}

export interface UserData {
  fullName: string;
  phone: string;
  email: string;
  birthday: string;
}

export interface GameState {
  attemptsLeft: number;
  lastPlayedDate: string | null;
}