import { ComponentProps } from 'react';
import { Story, StoryDefault } from '@ladle/react';
import GameButton from '@/app/components/GameButton';
import { Shape } from '@/app/types';

const meta: StoryDefault<typeof GameButton> = {
  title: 'Components/GameButton'
};

export default meta;

type TProps = ComponentProps<typeof GameButton>;

export const Default: Story<TProps> = (props) => <GameButton {...props}/>;

Default.args = {
  shape: Shape.ROCK,
};
