import Image from 'next/image';
import styles from './styles/GameButton.module.css';

interface GameButtonProps {
  assetName: string;
}

const GameButton = ({ assetName }: GameButtonProps) => {
  return (
    <>
      {assetName && (
        <button className={styles.gameButtonCls}>
          <Image
            src={`/${assetName}.svg`}
            alt='Image to represent selected option, i.e. rock/paper/scissor'
            height={130}
            width={130}
          />
        </button>
      )}
    </>
  )

};

export default GameButton;
