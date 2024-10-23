'use client';

import styles from './styles/PlayAgainButton.module.css';

interface PlayAgainButtonProps {
  onClick: () => void;
};

const PlayAgainButton = ({ onClick }: PlayAgainButtonProps) => {
  return (
    <button onClick={onClick} className={styles.btnCls}>
      {'Play Again'}
    </button>
  );  
};

export default PlayAgainButton;
