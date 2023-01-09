import React from "react";
import { getSongProgressPercentage } from "../../helpers/get-song-progress-percentage";
import { secondsToDuration } from "../../helpers/seconds-to-duration";
import { ISong } from "../../repositories/SongRepository";
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
  audioCurrentTime?: string;
  song: ISong;
}

const PlayerHorizontal: React.FC<IProps> = (props: IProps) => {
  const { song, audioCurrentTime, audio } = props;

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
      {audioCurrentTime ? (
        <SoundProgressContainer>
          <SoundProgress
            barWidthPercent={
              audio
                ? getSongProgressPercentage(audio.currentTime, audio.duration)
                : 0
            }
            leftCounter={audioCurrentTime}
            rightCounter={audio ? secondsToDuration(audio.duration) : "00:00"}
          />
        </SoundProgressContainer>
      ) : null}
    </Container>
  );
};

export default PlayerHorizontal;
