import React from "react";
import { BaseBar, Counter, CountersContainer, InsideBar } from "./styles";

export interface IProps {
  barWidthPercent: number;
  leftCounter?: string;
  rightCounter?: string;
}

const SoundProgress: React.FC<IProps> = (props: IProps) => {
  const { barWidthPercent, leftCounter, rightCounter } = props;
  return (
    <div>
      {/* Progress Bar */}
      <BaseBar>
        <InsideBar barWidthPercent={barWidthPercent} />
      </BaseBar>

      {/* Counters */}
      {leftCounter && rightCounter ? (
        <CountersContainer>
          <Counter>13:00</Counter>
          <Counter>13:00</Counter>
        </CountersContainer>
      ) : null}
    </div>
  );
};

export default SoundProgress;
