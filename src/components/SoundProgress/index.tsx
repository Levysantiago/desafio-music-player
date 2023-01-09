import React from "react";
import { BaseBar, Counter, CountersContainer, InsideBar } from "./styles";

export interface IProps {
  barWidthPercent: number | string;
  leftCounter?: string;
  rightCounter?: string;
}

const SoundProgress: React.FC<IProps> = (props: IProps) => {
  const { barWidthPercent, leftCounter, rightCounter } = props;
  return (
    <div>
      {/* Progress Bar */}
      <BaseBar>
        <InsideBar style={{ width: `${barWidthPercent}%` || "50%" }} />
      </BaseBar>

      {/* Counters */}
      {leftCounter && rightCounter ? (
        <CountersContainer>
          <Counter>{leftCounter}</Counter>
          <Counter>{rightCounter}</Counter>
        </CountersContainer>
      ) : null}
    </div>
  );
};

export default SoundProgress;
