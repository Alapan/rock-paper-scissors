import { Story, StoryDefault } from '@ladle/react';
import { ComponentProps } from 'react';
import PlayAgainButton from '@/app/components/PlayAgainButton';

const meta: StoryDefault<typeof PlayAgainButton> = {
  title: 'Components/PlayAgainButton'  
};

export default meta;

type TProps = ComponentProps<typeof PlayAgainButton>;

export const Default: Story<TProps> = (props) => <PlayAgainButton {...props}/>;

Default.args = {
  onClick: () => null
};
