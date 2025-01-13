'use client';

import { useState } from 'react';
import { ResultType, ScoreState, Shape } from './types';
import ShapeSelectionView from './components/ShapeSelectionView';
import GameStatusView from './components/GameView';
import styles from './page.module.css';

export default function GamePage() {
  const [ score, setScore ] = useState<ScoreState>({
    playerWins: 0,
    computerWins: 0,
    draws: 0,
  });

  const updateScore = (result: ResultType) => {
    switch (result) {
      case ResultType.WIN:
        setScore({
          ...score,
          playerWins: score.playerWins + 1,
        });
        break;
      case ResultType.LOSS:
        setScore({
          ...score,
          computerWins: score.computerWins +1,
        });
        break;
      case ResultType.DRAW:
        setScore({
          ...score,
          draws: score.draws + 1,
        });
        break;
      default:
        setScore({
          playerWins: 0,
          computerWins: 0,
          draws: 0,
        });
    }
  };

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
          score={score}
          updateScore={updateScore}
        />
        : <ShapeSelectionView clickHandler={clickHandler}/>}
    </div>
  );
};
