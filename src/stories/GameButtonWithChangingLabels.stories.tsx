import { Story, StoryDefault } from '@ladle/react';
import GameButtonWithChangingLabels from '@/app/components/GameButtonWithChangingLabels';
import { ComponentProps } from 'react';

const meta: StoryDefault<typeof GameButtonWithChangingLabels> = {
  title: 'Components/ButtonWithChangingLabels'
};

export default meta;

type TProps = ComponentProps<typeof GameButtonWithChangingLabels>;

export const DefaultButton: Story<TProps> = (props) => {
  return <GameButtonWithChangingLabels {...props}/>;
};

DefaultButton.args = {
  delay: 1000,
  updateGameMoves: () => undefined,
}
