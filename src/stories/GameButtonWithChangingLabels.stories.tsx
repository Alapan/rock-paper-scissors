import { Story, StoryDefault } from '@ladle/react';
import GameButtonWithChangingLabels from '@/app/components/GameButtonWithChangingLabels';

const meta: StoryDefault<typeof GameButtonWithChangingLabels> = {
  title: 'Components/ButtonWithChangingLabels'
};

export default meta;

export const DefaultButton: Story = () => {
  return <GameButtonWithChangingLabels />;
};
