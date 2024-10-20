import Image from 'next/image';
import Link from 'next/link';
import styles  from './styles/GameButton.module.css';

interface GameButtonProps {
  assetName: string;
  pathname?: string;
}

const GameButton = ({ assetName, pathname }: GameButtonProps) => {
  return (
    <>
      {assetName && (
        <Link href={{
          pathname,
          query: { shape: assetName }
        }}>
          <div className={styles.gameButton}>
            <Image
              src={`/${assetName}.svg`}
              alt='Image to represent selected shape, i.e. rock/paper/scissor'
              width={0}
              height={0}
              style={{ width: '55%', height: 'auto' }}
            />
          </div>
        </Link>
      )}
    </>
  )

};

export default GameButton;
