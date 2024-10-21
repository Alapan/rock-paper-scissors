import { Story, StoryDefault } from '@ladle/react';
import { ComponentProps } from 'react';
import GameStatusView from '@/app/components/GameStatusView';
import { Shape } from '@/app/types';

const meta: StoryDefault<typeof GameStatusView> = {
  title: 'Components/GameStatusView'  
};

export default meta;

type TProps = ComponentProps<typeof GameStatusView>;

export const Default: Story<TProps> = (props) => <GameStatusView {...props}/>;

Default.args = {
  playerMove: Shape.SCISSOR
};
