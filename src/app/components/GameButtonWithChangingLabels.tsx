'use client';

import { useEffect, useState } from 'react';
import GameButton from './GameButton';
import { Shape } from '../types';

interface GameButtonWithChangingLabelsProps {
  delay: number;
  setGameResult: (shape: Shape) => void;
};

const GameButtonWithChangingLabels = ({
  delay,
  setGameResult,
}: GameButtonWithChangingLabelsProps) => {
  const [shape, setShape] = useState<Shape>(Shape.ROCK);

  useEffect(() => {
    let index = 1;
    let currentShape: Shape | undefined;

    const shapeToIndexMap = new Map<number, Shape>([
      [1, Shape.PAPER],
      [2, Shape.ROCK],
      [3, Shape.SCISSOR],
    ]);

    const interval = setInterval(() => {
      currentShape = shapeToIndexMap.get(index);
      if (currentShape) setShape(currentShape);
      index = index + 1;
      if (index === 4) index = 1;
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      setGameResult(currentShape as Shape);
    }, delay);

  }, []);

  return <GameButton shape={shape} onClick={() => null}/>;
};

export default GameButtonWithChangingLabels;
