import GameButton from './components/GameButton';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <section className={styles.playerSection}>
        <div className={styles.playerSectionHeading}>
          {'Select a shape to play'}
        </div>
        <div className={styles.playerFirstRow}>
          <GameButton assetName='rock' pathname='/gameStatus'/>
          <GameButton assetName='scissor' pathname='/gameStatus'/>
        </div>
        <div className={styles.playerSecondRow}>
          <GameButton assetName='paper' pathname='/gameStatus'/>
        </div>
      </section>
    </div>
  );
}
