import { ScoreState } from '../types';
import styles from './styles/ScoresView.module.css';

interface ScoresViewProps {
  score: ScoreState;
};

const ScoresView = ({ score }: ScoresViewProps) => {
  if (!score) return null;

  const { playerWins, computerWins, draws } = score;
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.score}>
        {`Wins: ${playerWins}`}
      </div>
      <div className={styles.score}>
        {`Losses: ${computerWins}`}
      </div>
      <div className={styles.score}>
        {`Draws: ${draws}`}
      </div>
    </div>
  );
};

export default ScoresView;
