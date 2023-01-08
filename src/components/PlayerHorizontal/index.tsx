import React from "react";
import { ISong } from "../../App";
import SoundControl, { ISoundControlProps } from "../SoundControl";
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

interface IProps extends ISoundControlProps {
  barWidthPercent?: number;
  song: ISong;
}

const PlayerHorizontal: React.FC<IProps> = (props: IProps) => {
  const { barWidthPercent, song } = props;

  return (
    <Container>
      <ImageTitlesContainer>
        <AlbumImg
          src={require("../../assets/default-img.png")}
          alt="Album image"
        />

        {/* TITLES */}
        <TitlesContainer>
          <SongTitle>{song.title}</SongTitle>
          <BandTitle>{`Banda ${song.bandTitle}`}</BandTitle>
        </TitlesContainer>
      </ImageTitlesContainer>

      {/* SOUND CONTROL */}
      <SoundControlContainer>
        <SoundControl {...props} />
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
