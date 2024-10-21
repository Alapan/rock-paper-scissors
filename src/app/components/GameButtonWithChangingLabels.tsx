'use client';

import { useEffect, useState } from 'react';
import GameButton from './GameButton';
import { Shape } from '../types';

interface GameButtonWithChangingLabelsProps {
  delay: number;
  updateGameMoves: (shape: Shape) => void;
};

const GameButtonWithChangingLabels = ({
  delay,
  updateGameMoves,
}: GameButtonWithChangingLabelsProps) => {
  const [shape, setShape] = useState<Shape>(Shape.ROCK);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      const shapes = Object.values(Shape);
      setShape(shapes[++index]);
      if (index === shapes.length) index = 0
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      updateGameMoves(shape);
    }, delay);

  }, []);

  return <GameButton shape={shape} onClick={() => null}/>;
};

export default GameButtonWithChangingLabels;
