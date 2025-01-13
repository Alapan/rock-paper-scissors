'use client';

import JSConfetti from 'js-confetti';
import GameButton from './GameButton';
import GameButtonWithChangingLabels from './GameButtonWithChangingLabels';
import { ResultType, ScoreState, Shape } from '../types';
import PlayAgainButton from './PlayAgainButton';
import ScoresView from './ScoresView';
import styles from './styles/GameView.module.css';

interface GameStatusViewProps {
  playerMove: Shape;
  clearPlayerMove: () => void;
  score: ScoreState;
  updateScore: (result: ResultType) => void;
};

const jsConfetti = new JSConfetti();

const GameStatusView = ({
  playerMove,
  clearPlayerMove,
  score,
  updateScore,
}: GameStatusViewProps) => {
  const setDelay = () => {
    const delayOptions = [];
    for (let i = 1000; i < 5000; i+= 1000) {
      delayOptions.push(i);
    }
    return delayOptions[Math.floor(Math.random() * delayOptions.length)];
  };

  const setGameScore = (shape: Shape) => {
    const computerMove = shape;
    if (playerMove === computerMove) {
      updateScore(ResultType.DRAW)
    } else {
      const playerWinningCombinations = [
        [Shape.ROCK, Shape.SCISSOR],
        [Shape.PAPER, Shape.ROCK],
        [Shape.SCISSOR, Shape.PAPER],
      ];
      let isPlayerWinner: boolean = false;
      const currentGameState = [playerMove, computerMove];

      for (const combination of playerWinningCombinations) {
        if ((currentGameState[0] === combination[0])
          && (currentGameState[1] === combination[1])) {
            isPlayerWinner = true;
            break;
        }
      }

      if (isPlayerWinner) {
        updateScore(ResultType.WIN);
        jsConfetti.addConfetti();
      } else {
        updateScore(ResultType.LOSS);
      }
    }
  };

  return (
    <>
      <section className={styles.scoreSection}>
        <ScoresView score={score}/>
      </section>
      <section className={styles.shapeSection}>
        <div className={styles.playerHeading}>
          {'Player'}
        </div>
        <div className={styles.playerChoice}>
          <GameButton shape={playerMove} onClick={() => null}/>
        </div>
        <div className={styles.computerHeading}>
          {'Computer'}
        </div>
        <div className={styles.computerChoice}>
          <GameButtonWithChangingLabels
            delay={setDelay()}
            setGameScore={setGameScore}
          />
        </div>
      </section>
      <section className={styles.btnSection}>
        <div className={styles.btnContainer}>
          <PlayAgainButton onClick={clearPlayerMove}/>
        </div>
      </section>
    </>
  );  
};

export default GameStatusView;
