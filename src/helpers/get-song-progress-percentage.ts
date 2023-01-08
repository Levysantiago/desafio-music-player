export const getSongProgressPercentage = (
  startTimeSecs: number,
  endTimeSecs: number
) => {
  return ((startTimeSecs * 100) / endTimeSecs).toFixed(2);
};
