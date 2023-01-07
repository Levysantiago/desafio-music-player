import React from "react";
import SoundControl from "../SoundControl";
import SoundProgress from "../SoundProgress";
import {
  AlbumImg,
  BandTitle,
  Container,
  ImageTitlesContainer,
  SongTitle,
  SoundControlContainer,
  SoundProgressContainer,
  TitlesContainer,
} from "./styles";

interface IProps {
  barWidthPercent?: number;
}

const PlayerHorizontal: React.FC<IProps> = (props: IProps) => {
  const { barWidthPercent } = props;

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
      <SoundControlContainer>
        <SoundControl />
      </SoundControlContainer>

      {/* PROGRESS */}
      {barWidthPercent ? (
        <SoundProgressContainer>
          <SoundProgress
            barWidthPercent={barWidthPercent || 100}
            leftCounter="03:20"
            rightCounter="00:12"
          />
        </SoundProgressContainer>
      ) : null}
    </Container>
  );
};

export default PlayerHorizontal;
