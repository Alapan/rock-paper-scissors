import { ComponentProps } from 'react';
import { Story, StoryDefault } from '@ladle/react';
import GameButton from '@/app/components/GameButton';
import { Shape } from '@/app/types';

const meta: StoryDefault<typeof GameButton> = {
  title: 'Components/GameButton'
};

export default meta;

type TProps = ComponentProps<typeof GameButton>;

export const Rock: Story<TProps> = (props) => <GameButton {...props}/>;

Rock.args = {
  shape: Shape.ROCK,
};

export const Paper: Story<TProps> = (props) => <GameButton {...props} />;

Paper.args = {
  shape: Shape.PAPER,
};

export const Scissors: Story<TProps> = (props) => <GameButton {...props} />;

Scissors.args = {
  shape: Shape.SCISSOR,
};
