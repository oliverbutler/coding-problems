import { readRawInputs } from '../../../../utils/file';

type RockPaperScissors = 'ROCK' | 'PAPER' | 'SCISSORS';

enum Status {
  WIN = 6,
  LOSE = 0,
  DRAW = 3,
}

export const step1 = (rawData: typeof data) => {
  const dataWithoutLastLine = rawData.slice(0, rawData.length - 1);

  const results = dataWithoutLastLine.map((row) => {
    const mapOpponentToPiece = {
      A: 'ROCK',
      B: 'PAPER',
      C: 'SCISSORS',
    };

    const mapYouToPiece = {
      X: 'ROCK',
      Y: 'PAPER',
      Z: 'SCISSORS',
    };

    const pieceShape = {
      ROCK: 1,
      PAPER: 2,
      SCISSORS: 3,
    };

    const opp = mapOpponentToPiece[row[0] as 'A'] as RockPaperScissors;
    const me = mapYouToPiece[row[1] as 'X'] as RockPaperScissors;

    const myScore = modelTheGame(opp, me);

    const myPieceShape = pieceShape[me];

    return myScore + myPieceShape;
  });

  return results.reduce((acc, curr) => acc + curr, 0);
};

export const step2 = (rawData: typeof data) => {
  const dataWithoutLastLine = rawData.slice(0, rawData.length - 1);

  const results = dataWithoutLastLine.map((row) => {
    const mapOpponentToPiece = {
      A: 'ROCK',
      B: 'PAPER',
      C: 'SCISSORS',
    };

    const mapHowRoundNeedsToEnd = {
      X: 0,
      Y: 3,
      Z: 6,
    };

    const pieceShape = {
      ROCK: 1,
      PAPER: 2,
      SCISSORS: 3,
    };

    const howDoesRoundNeedToEnd = mapHowRoundNeedsToEnd[
      row[1] as 'X'
    ] as number;

    const opp = mapOpponentToPiece[row[0] as 'A'] as RockPaperScissors;

    const findMyIdealPieceThatWillWin = ['ROCK', 'PAPER', 'SCISSORS'].find(
      (piece) => {
        const myScore = modelTheGame(opp, piece as RockPaperScissors);
        return myScore === howDoesRoundNeedToEnd;
      }
    );

    const myPieceShape =
      pieceShape[findMyIdealPieceThatWillWin as RockPaperScissors];

    return howDoesRoundNeedToEnd + myPieceShape;
  });

  return results.reduce((acc, curr) => acc + curr, 0);
};

const { dataRaw, testRaw } = readRawInputs(__dirname);

// let's make a function which can return 0 3 or 6 for two inputs
export const modelTheGame = (
  player1: RockPaperScissors,
  player2: RockPaperScissors
): Status => {
  const gameSet = new Set([player1, player2]);
  const didPlayer2Win = (piece: RockPaperScissors) =>
    player2 === piece ? 6 : 0;

  if (gameSet.size === 1) {
    return 3;
  }
  const matrix: RockPaperScissors[][] = [
    ['ROCK', 'SCISSORS', 'ROCK'],
    ['ROCK', 'PAPER', 'PAPER'],
    ['SCISSORS', 'PAPER', 'SCISSORS'],
  ];

  for (const [left, right, winner] of matrix) {
    if (gameSet.has(left) && gameSet.has(right)) {
      return didPlayer2Win(winner);
    }
  }
  return 0;
};

export const data = dataRaw.split('\n').map((x) => x.split(' '));
export const exampleData = testRaw.split('\n').map((x) => x.split(' '));
