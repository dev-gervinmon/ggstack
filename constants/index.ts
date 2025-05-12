export const sampleGames = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genre: "Action / Adventure",
    rating: 4.9,
    copies_sold: 30000000,
    current_active_players: 150000,
    description:
      "An open-world action-adventure game where players explore the vast kingdom of Hyrule and uncover its secrets.",
    color: "#5b728f",
    cover:
      "https://cdn2.steamgriddb.com/thumb/121b81f7d167ca2c24fdab4f044048f8.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    isOwnedGame: true,
    summary:
      "An open-world action-adventure game where players explore the vast kingdom of Hyrule and uncover its secrets.",
  },
  {
    id: 2,
    title: "Minecraft",
    developer: "Mojang Studios",
    genre: "Sandbox / Survival",
    rating: 4.8,
    copies_sold: 238000000,
    current_active_players: 1000000,
    description:
      "A sandbox game where players can build, explore, and survive in a blocky, procedurally generated 3D world.",
    color: "#6aa84f",
    cover:
      "https://cdn2.steamgriddb.com/thumb/ee897a8699b37568c5c8dd72f78c2bf1.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    isOwnedGame: true,
    summary:
      "A sandbox game where players can build, explore, and survive in a blocky, procedurally generated 3D world.",
  },
  {
    id: 3,
    title: "Elden Ring",
    developer: "FromSoftware",
    genre: "Action RPG",
    rating: 4.7,
    copies_sold: 20000000,
    current_active_players: 50000,
    description:
      "An expansive action RPG set in a dark fantasy world, featuring challenging combat and deep lore.",
    color: "#2c2c2c",
    cover:
      "https://cdn2.steamgriddb.com/thumb/9153bb77795515274c2be61ccc59c952.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    isOwnedGame: true,
    summary:
      "An expansive action RPG set in a dark fantasy world, featuring challenging combat and deep lore.",
  },
  {
    id: 4,
    title: "Fortnite",
    developer: "Epic Games",
    genre: "Battle Royale / Shooter",
    rating: 4.5,
    copies_sold: 0, // Free-to-play
    current_active_players: 3000000,
    description:
      "A battle royale game where players fight to be the last one standing in a colorful, fast-paced world.",
    color: "#ff4500",
    cover:
      "https://cdn2.steamgriddb.com/thumb/6c4d541fc68d426aa028bc05f38164d1.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    isOwnedGame: true,
    summary:
      "A battle royale game where players fight to be the last one standing in a colorful, fast-paced world.",
  },
  {
    id: 5,
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    genre: "Action RPG",
    rating: 4.9,
    copies_sold: 50000000,
    current_active_players: 20000,
    description:
      "An epic RPG where players take on the role of Geralt of Rivia, a monster hunter in a richly detailed fantasy world.",
    color: "#5c3c92",
    cover:
      "https://cdn2.steamgriddb.com/thumb/2f87d717bf556321774d1b4975d2e1c1.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    isOwnedGame: true,
    summary:
      "An epic RPG where players take on the role of Geralt of Rivia, a monster hunter in a richly detailed fantasy world.",
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    developer: "CD Projekt Red",
    genre: "Action RPG / Sci-Fi",
    rating: 4.3,
    copies_sold: 20000000,
    current_active_players: 100000,
    description:
      "A futuristic RPG set in the open world of Night City, where players navigate a dystopian society.",
    color: "#ffcc00",
    cover:
      "https://cdn2.steamgriddb.com/thumb/4030e2eebb977639f8836aa25a293e40.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    isOwnedGame: true,
    summary:
      "A futuristic RPG set in the open world of Night City, where players navigate a dystopian society.",
  },
  {
    id: 7,
    title: "Among Us",
    developer: "Innersloth",
    genre: "Party / Social Deduction",
    rating: 4.6,
    copies_sold: 50000000,
    current_active_players: 500000,
    description:
      "A multiplayer game of teamwork and betrayal set in a spaceship, where players must identify the impostors.",
    color: "#ff0000",
    cover:
      "https://cdn2.steamgriddb.com/thumb/09246ffb824ca2c5bc47a64cb302d3cb.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    isOwnedGame: true,
    summary:
      "A multiplayer game of teamwork and betrayal set in a spaceship, where players must identify the impostors.",
  },
  {
    id: 8,
    title: "Call of Duty: Warzone",
    developer: "Activision",
    genre: "Battle Royale / Shooter",
    rating: 4.4,
    copies_sold: 0, // Free-to-play
    current_active_players: 2000000,
    description:
      "A free-to-play battle royale game with intense combat and large-scale multiplayer battles.",
    color: "#1c1c1c",
    cover:
      "https://cdn2.steamgriddb.com/thumb/da64a736b47e9b601309a3a86f013db0.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    isOwnedGame: true,
    summary:
      "A free-to-play battle royale game with intense combat and large-scale multiplayer battles.",
  },
];

export const FIELD_NAMES = {
  fullName: "Full Name",
  email: "Email",
  password: "Password",
  platform: "Platform",
  gamerTag: "Gamer Tag",
  profilePicture: "Profile Picture",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  password: "password",
  platform: "select",
  gamerTag: "text",
  profilePicture: "file",
};
