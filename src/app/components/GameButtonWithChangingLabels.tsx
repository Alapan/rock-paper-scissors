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
    let index = 1;

    const shapeToIndexMap = new Map<number, Shape>([
      [1, Shape.PAPER],
      [2, Shape.ROCK],
      [3, Shape.SCISSOR],
    ]);

    const interval = setInterval(() => {
      const shape = shapeToIndexMap.get(index);
      if (shape) setShape(shape);
      index = index + 1;
      if (index === 4) index = 1;
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      updateGameMoves(shape);
    }, delay);

  }, []);

  return <GameButton shape={shape} onClick={() => null}/>;
};

export default GameButtonWithChangingLabels;
