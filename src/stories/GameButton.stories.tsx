import { ComponentProps } from 'react';
import { Story, StoryDefault } from '@ladle/react';
import GameButton from '@/app/components/GameButton';

const meta: StoryDefault<typeof GameButton> = {
  title: 'Components/GameButton'
};

export default meta;

type Props = ComponentProps<typeof GameButton>;

export const Default: Story<Props> = (props) => <GameButton {...props}/>;

Default.args = {
  assetName: 'rock',
  pathname: '/game',
};
