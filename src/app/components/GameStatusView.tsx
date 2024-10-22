'use client';

import GameButton from '../components/GameButton';
import GameButtonWithChangingLabels from '../components/GameButtonWithChangingLabels';
import { Shape } from '../types';
import PlayAgainButton from './PlayAgainButton';
import styles from './styles/GameStatusView.module.css';

interface GameStatusViewProps {
  playerMove: Shape;
  clearPlayerMove: () => void;
};

const GameStatusView = ( { playerMove, clearPlayerMove }: GameStatusViewProps) => {

  const setDelay = () => {
    const delayOptions = [];
    for (let i = 1000; i < 5000; i+= 1000) {
      delayOptions.push(i);
    }
    return delayOptions[Math.floor(Math.random() * delayOptions.length)];
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
            updateGameMoves={() => null}
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
