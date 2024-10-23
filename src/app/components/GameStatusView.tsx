'use client';

import { useState } from 'react';
import GameButton from '../components/GameButton';
import GameButtonWithChangingLabels from '../components/GameButtonWithChangingLabels';
import { ResultType, Shape } from '../types';
import PlayAgainButton from './PlayAgainButton';
import styles from './styles/GameStatusView.module.css';

interface GameStatusViewProps {
  playerMove: Shape;
  clearPlayerMove: () => void;
};

const GameStatusView = ( { playerMove, clearPlayerMove }: GameStatusViewProps) => {

  const [ result, setResult ] = useState<ResultType | null>(null);

  const setDelay = () => {
    const delayOptions = [];
    for (let i = 1000; i < 5000; i+= 1000) {
      delayOptions.push(i);
    }
    return delayOptions[Math.floor(Math.random() * delayOptions.length)];
  };

  const setGameResult = (shape: Shape) => {
    const computerMove = shape;
    if (playerMove === computerMove) {
      setResult(ResultType.DRAW);
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
        setResult(ResultType.WIN);
      } else {
        setResult(ResultType.LOSS);
      }
    }
  };

  return (
    <>
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
            setGameResult={setGameResult}
          />
        </div>
      </section>
      <section className={styles.btnSection}>
        <div className={styles.btnContainer}>
          <PlayAgainButton onClick={clearPlayerMove}/>
        </div>
      </section>
      { result === ResultType.WIN ? <></> : (
        ResultType.LOSS ? <></> : <></>
      )}
    </>
  );  
};

export default GameStatusView;
