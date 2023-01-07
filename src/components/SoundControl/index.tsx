import React from "react";
import { Container, PlayBackIcon, PlayForwardIcon, PlayIcon } from "./styles";

const SoundControl: React.FC = () => {
  return (
    <Container>
      <PlayBackIcon />
      <PlayIcon />
      <PlayForwardIcon />
    </Container>
  );
};

export default SoundControl;
