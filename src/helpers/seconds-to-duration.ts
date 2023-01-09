import moment from "moment";

export const secondsToDuration = (secs: number) => {
  if (!secs) return "00:00";

  return moment.utc(secs * 1000).format("mm:ss");
};
