export interface Match {
  title: string;
  venue: string;
  series: string;
  date: string;
  time: string;
  toss: string;
  umpires: string;
  thirdUmpire: string;
  refree: string;
  hosts: string;
  streaming: string;
  tv: string;
  teams: Array<Team>;
  innings: Array<Inning>;
  stadium: Stadium;
}

interface Stadium {
  stadium: string;
  city: string;
  capacity: number;
  ends: string;
}

interface Team {
  name: string;
  country: string;
  players: Array<Player>;
}

interface Inning {
  runs: number;
  fours: number;
  sixes: number;
  extras: number;
  wides: number;
  noBalls: number;
  legBuys: number;
}

interface Player {
  name: string;
  country: string;
  birthPlace: string;
  nickname: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  teams: Array<string>;
  profile: string;
  born: string;
  matches: number;
  runs: number;
  fours: number;
  sixes: number;
  balls: number;
  isPlaying: number;
}
