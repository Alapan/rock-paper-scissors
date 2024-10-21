'use client';

import { useEffect, useState } from 'react';
import GameButton from './GameButton';

interface GameButtonWithChangingLabelsProps {
  delay: number;
};

const GameButtonWithChangingLabels = ({
  delay
}: GameButtonWithChangingLabelsProps) => {
  const assetNames: string[] = ['rock', 'paper', 'scissor'];
  const [assetName, setAssetName] = useState(assetNames[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setAssetName(assetNames[++index]);
      if (index === assetNames.length) index = 0
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
    }, delay);

  }, []);

  return <GameButton assetName={assetName}/>;
};

export default GameButtonWithChangingLabels;
