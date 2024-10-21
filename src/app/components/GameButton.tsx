'use client';

import Image from 'next/image';
import styles  from './styles/GameButton.module.css';
import { Shape } from '../types';

interface GameButtonProps {
  shape: Shape;
  onClick: (shape: Shape) => void;
}

const GameButton = ({ shape, onClick }: GameButtonProps) => {
  return (
    <>
      {shape && (
        <div className={styles.gameButton} onClick={() => onClick(shape)}>
          <Image
            src={`/${shape}.svg`}
            alt='Image to represent selected shape, i.e. rock/paper/scissor'
            width={0}
            height={0}
            style={{ width: '55%', height: 'auto' }}
          />
        </div>
      )}
    </>
  )

};

export default GameButton;
