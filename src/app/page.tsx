import GameButton from './components/GameButton';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.playerSection}>
        <div className={styles.playerSectionTitle}>
          {'Player'}
        </div>
        <div className={styles.playerFirstRow}>
          <GameButton assetName='rock'/>
          <GameButton assetName='scissor' />
        </div>
        <div className={styles.playerSecondRow}>
          <GameButton assetName='paper'/>
        </div>
      </section>
      <section className={styles.computerSection}>
        <div className={styles.computerSectionTitle}>
          {'Computer'}
        </div>
        <div className={styles.computerRow}>
          <GameButton assetName='rock'/>
        </div>
      </section>
    </div>
  );
}
