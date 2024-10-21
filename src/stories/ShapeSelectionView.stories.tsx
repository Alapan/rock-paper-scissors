import { ComponentProps } from 'react';
import { Story, StoryDefault } from '@ladle/react';
import ShapeSelectionView from '@/app/components/ShapeSelectionView';

const meta: StoryDefault<typeof ShapeSelectionView> = {
  title: 'Components/ShapeSelectionView'  
};

export default meta;

type TProps = ComponentProps<typeof ShapeSelectionView>;

export const Default: Story<TProps> = (props) => <ShapeSelectionView {...props}/>;

Default.args = {
  clickHandler: () => null
};
