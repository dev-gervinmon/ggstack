interface Game {
  id: number;
  title: string;
  developer: string;
  genre: string;
  rating: number;
  copies_sold: number;
  current_active_players: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
  isOwnedGame: boolean;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  gamerTag: string;
  platform: string;
  profilePicture?: string;
}
