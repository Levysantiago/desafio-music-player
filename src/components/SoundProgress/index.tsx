import React from "react";
import { BaseBar, Counter, CountersContainer, InsideBar } from "./styles";

export interface IProps {
  barWidthPercent: number | string;
  leftCounter?: string;
  rightCounter?: string;
  advanceProgress?: (advancedPercentage: number) => void;
  index: string;
}

const SoundProgress: React.FC<IProps> = (props: IProps) => {
  const { barWidthPercent, leftCounter, rightCounter, advanceProgress, index } =
    props;

  return (
    <div>
      {/* Progress Bar */}
      <BaseBar
        id={`base-progress-bar-${index}`}
        onMouseDown={(e) => {
          const baseProgressBar = document.getElementById(
            `base-progress-bar-${index}`
          );
          if (baseProgressBar) {
            const advancedPercentage =
              e.nativeEvent.offsetX / baseProgressBar.clientWidth;
            if (advanceProgress) advanceProgress(advancedPercentage);
          }
        }}
      >
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
