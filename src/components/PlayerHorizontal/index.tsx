import React from "react";
import SoundControl from "../SoundControl";
import SoundProgress from "../SoundProgress";
import {
  AlbumImg,
  BandTitle,
  Centralize,
  Container,
  ImageTitlesContainer,
  SongTitle,
  TitlesContainer,
} from "./styles";

const PlayerHorizontal: React.FC = () => {
  return (
    <Container>
      <ImageTitlesContainer>
        <AlbumImg
          src={require("../../assets/default-img.png")}
          alt="Album image"
        />

        {/* TITLES */}
        <TitlesContainer>
          <SongTitle>Acorda Devinho</SongTitle>
          <BandTitle>Banda Rocketseat</BandTitle>
        </TitlesContainer>
      </ImageTitlesContainer>

      {/* SOUND CONTROL */}
      <Centralize>
        <SoundControl />
      </Centralize>

      {/* PROGRESS */}
      <SoundProgress
        barWidthPercent={40}
        leftCounter="03:20"
        rightCounter="00:12"
      />
    </Container>
  );
};

export default PlayerHorizontal;
