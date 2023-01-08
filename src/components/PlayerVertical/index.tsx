import React from "react";
import { ISong } from "../../App";
import SoundControl, { ISoundControlProps } from "../SoundControl";
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

interface IProps extends ISoundControlProps {
  song: ISong;
}

const PlayerVertical: React.FC<IProps> = (props: IProps) => {
  const { song } = props;

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
      <SongTitle>{song.title}</SongTitle>
      <BandTitle>{`Banda ${song.bandTitle}`}</BandTitle>

      <SoundControlContainer>
        {/* SOUND CONTROL */}
        <SoundControl {...props} />
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
