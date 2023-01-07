import styled from "styled-components";

export const PlayIcon = styled.img.attrs({
  src: require("../../assets/play.svg").default,
  alt: "Play icon",
})``;

export const PlayForwardIcon = styled.img.attrs({
  src: require("../../assets/play-forward.svg").default,
  alt: "Play forward icon",
})``;

export const PlayBackIcon = styled.img.attrs({
  src: require("../../assets/play-back.svg").default,
  alt: "Play back icon",
})``;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 200px;
  justify-content: space-between;
`;
