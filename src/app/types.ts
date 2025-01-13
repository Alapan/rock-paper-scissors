export enum Shape {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSOR = 'scissor',
};

export enum ResultType {
  WIN = 'win',
  LOSS = 'loss',
  DRAW = 'draw',  
};

export interface ScoreState {
  playerWins: number;
  computerWins: number;
  draws: number;
};
