import GameButton from './components/GameButton';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.playerSection}>
        <div className={styles.playerSectionHeading}>
          {'Select a shape to play'}
        </div>
        <div className={styles.playerFirstRow}>
          <GameButton assetName='rock' pathname='/game'/>
          <GameButton assetName='scissor' pathname='/game'/>
        </div>
        <div className={styles.playerSecondRow}>
          <GameButton assetName='paper' pathname='/game'/>
        </div>
      </section>
    </div>
  );
}
