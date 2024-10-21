'use client';

import { useSearchParams } from 'next/navigation';
import GameButton from '../components/GameButton';
import GameButtonWithChangingLabels from '../components/GameButtonWithChangingLabels';
import styles from './GameStatus.module.css';

export default function Game() {
  const playParams = useSearchParams();
  const assetName = playParams.get('shape') || '';

  const setDelay = () => {
    const delayOptions = [];
    for (let i = 1000; i < 5000; i+= 1000) {
      delayOptions.push(i);
    }
    return delayOptions[Math.floor(Math.random() * delayOptions.length)];
  };

  return (
    <section className={styles.shapeContainer}>
      <div className={styles.playerHeading}>
        {'Player'}
      </div>
      <div className={styles.playerChoice}>
        <GameButton assetName={assetName} />
      </div>
      <div className={styles.computerHeading}>
        {'Computer'}
      </div>
      <div className={styles.computerChoice}>
        <GameButtonWithChangingLabels delay={setDelay()}/>
      </div>
    </section>
  );
};
