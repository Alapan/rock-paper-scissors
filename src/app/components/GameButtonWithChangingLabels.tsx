import { useEffect, useState } from 'react';
import GameButton from './GameButton';

interface GameButtonWithChangingLabelsProps {
  pathname: string;
}

const GameButtonWithChangingLabels = ({
  pathname
}: GameButtonWithChangingLabelsProps) => {
  const assetNames: string[] = ['rock', 'paper', 'scissor'];
  const [assetName, setAssetName] = useState(assetNames[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setAssetName(assetNames[++index]);
      if (index === assetNames.length) index = 0
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 1000);

  }, []);

  return <GameButton assetName={assetName} pathname={pathname}/>;
};

export default GameButtonWithChangingLabels;
