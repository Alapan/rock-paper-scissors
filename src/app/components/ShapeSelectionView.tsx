'use client';

import { Shape } from '../types';
import GameButton from './GameButton';
import styles from './styles/ShapeSelection.module.css';

interface ShapeSelectionViewProps {
  clickHandler: (shape: Shape) => void;
};

const ShapeSelectionView = ({ clickHandler }: ShapeSelectionViewProps) => {
  return (
    <section className={styles.playerSection}>
    <div className={styles.playerSectionHeading}>
      {'Select a shape to play'}
    </div>
    <div className={styles.playerFirstRow}>
      <GameButton shape={Shape.ROCK} onClick={clickHandler} />
      <GameButton shape={Shape.PAPER} onClick={clickHandler} />
    </div>
    <div className={styles.playerSecondRow}>
      <GameButton shape={Shape.SCISSOR} onClick={clickHandler} />
    </div>
  </section>
  );
};

export default ShapeSelectionView;
