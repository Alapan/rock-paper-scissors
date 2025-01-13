import { ComponentProps } from 'react';
import { Story, StoryDefault } from '@ladle/react';
import GameView from '@/app/components/GameView';
import { Shape } from '@/app/types';

const meta: StoryDefault<typeof GameView> = {
  title: 'Components/GameStatusView'  
};

export default meta;

type TProps = ComponentProps<typeof GameView>;

export const Default: Story<TProps> = (props) => <GameView {...props}/>;

Default.args = {
  playerMove: Shape.SCISSOR,
  updateScore: () => null,
};
