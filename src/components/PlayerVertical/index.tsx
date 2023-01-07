import React from "react";
import SoundControl from "../SoundControl";
import SoundProgress from "../SoundProgress";
import {
  AlbumImg,
  BandTitle,
  Container,
  ImageContainer,
  SongTitle,
  SoundControlContainer,
  SoundProgressContainer,
} from "./styles";

const PlayerVertical: React.FC = () => {
  return (
    <Container>
      {/* IMAGE */}
      <ImageContainer>
        <AlbumImg
          src={require("../../assets/default-img.png")}
          alt="Album image"
        />
      </ImageContainer>

      {/* TITLES */}
      <SongTitle>Acorda Devinho</SongTitle>
      <BandTitle>Banda Rocketseat</BandTitle>

      <SoundControlContainer>
        {/* SOUND CONTROL */}
        <SoundControl />
      </SoundControlContainer>

      {/* PROGRESS */}
      <SoundProgressContainer>
        <SoundProgress
          barWidthPercent={40}
          leftCounter="03:20"
          rightCounter="00:12"
        />
      </SoundProgressContainer>
    </Container>
  );
};

export default PlayerVertical;
