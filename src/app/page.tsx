'use client';

import { useState } from 'react';
import { Shape } from './types';
import ShapeSelectionView from './components/ShapeSelectionView';
import GameStatusView from './components/GameStatusView';
import styles from './LandingPage.module.css';

export default function GamePage() {

  const [ playerMove, setPlayerMove ] = useState<Shape | null>(null);
  const clickHandler = (shape: Shape) => {
    setPlayerMove(shape);
  };

  return (
    <div className={styles.container}>
      {playerMove ?
        <GameStatusView
          playerMove={playerMove}
          clearPlayerMove={() => setPlayerMove(null)}
        />
        : <ShapeSelectionView clickHandler={clickHandler}/>}
    </div>
  );
}
