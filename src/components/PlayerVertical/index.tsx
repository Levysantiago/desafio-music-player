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
  ImageContainer,
  SongTitle,
  SoundControlContainer,
  SoundProgressContainer,
} from "./styles";

interface IProps extends ISoundControlProps {
  song: ISong;
  audioCurrentTime: string;
}

const PlayerVertical: React.FC<IProps> = (props: IProps) => {
  const { song, audioCurrentTime, audio } = props;

  return (
    <Container>
      {/* IMAGE */}
      <ImageContainer>
        <AlbumImg
          src={require(`../../assets/band-images/${song.imageName}`)}
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
          barWidthPercent={
            audio
              ? getSongProgressPercentage(audio.currentTime, audio.duration)
              : 0
          }
          leftCounter={audioCurrentTime}
          rightCounter={audio ? secondsToDuration(audio.duration) : "00:00"}
        />
      </SoundProgressContainer>
    </Container>
  );
};

export default PlayerVertical;
