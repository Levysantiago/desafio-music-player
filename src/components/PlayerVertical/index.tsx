import React from "react";
import SoundControl from "../SoundControl";
import SoundProgress from "../SoundProgress";
import {
  AlbumImg,
  BandTitle,
  Container,
  ImageContainer,
  SongTitle,
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

      {/* SOUND CONTROL */}
      <SoundControl />

      {/* PROGRESS */}
      <SoundProgress
        barWidthPercent={40}
        leftCounter="03:20"
        rightCounter="00:12"
      />
    </Container>
  );
};

export default PlayerVertical;
