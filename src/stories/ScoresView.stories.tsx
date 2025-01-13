import ScoresView from "@/app/components/ScoresView";
import { Story, StoryDefault } from "@ladle/react";
import { ComponentProps } from "react";

const meta: StoryDefault<typeof ScoresView> = {
  title: 'Components/ScoresView'
};

export default meta;

type TProps = ComponentProps<typeof ScoresView>;

export const DefaultScore: Story<TProps> = (props) => <ScoresView {...props} />;

DefaultScore.args = {
  score: {
    playerWins: 0,
    computerWins: 0,
    draws: 0,
  }
};

export const DoubleDigitScores: Story<TProps> = (props) => <ScoresView {...props} />;

DoubleDigitScores.args = {
  score: {
    playerWins: 10,
    computerWins: 11,
    draws: 10,
  }  
};

export const ManyDigitScores: Story<TProps> = (props) => <ScoresView {...props} />;

ManyDigitScores.args = {
  score: {
    playerWins: 11230,
    computerWins: 1200,
    draws: 10000,
  }
};
