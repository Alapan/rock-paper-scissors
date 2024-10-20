import { Story, StoryDefault } from '@ladle/react';
import { ComponentProps } from 'react';
import GameButtonWithChangingLabels from '@/app/components/GameButtonWithChangingLabels';

const meta: StoryDefault<typeof GameButtonWithChangingLabels> = {
  title: 'Components/ButtonWithChangingLabels'
};

export default meta;

type Props = ComponentProps<typeof GameButtonWithChangingLabels>

export const DefaultButton: Story<Props> = (props) => {
  return <GameButtonWithChangingLabels {...props}/>;
};

DefaultButton.args = {
  pathname: '/'
};
