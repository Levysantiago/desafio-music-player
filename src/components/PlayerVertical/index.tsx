import React, { useCallback, useEffect } from "react";
import { getSongProgressPercentage } from "../../helpers/get-song-progress-percentage";
import { secondsToDuration } from "../../helpers/seconds-to-duration";
import { ISong } from "../../repositories/SongRepository";
import SongsList from "../SongsList";
import SoundControl, { ISoundControlProps } from "../SoundControl";
import SoundProgress from "../SoundProgress";
import {
  AlbumImg,
  BandTitle,
  CloseIcon,
  Container,
  HiddenContent,
  ImageContainer,
  MusicList,
  QueueIcon,
  SongTitle,
  SoundControlContainer,
  SoundProgressContainer,
} from "./styles";

interface IProps extends ISoundControlProps {
  song: ISong;
  selectSong: (song: ISong) => void;
  audioCurrentTime: string;
}

const PlayerVertical: React.FC<IProps> = (props: IProps) => {
  const { song, audioCurrentTime, audio, selectSong } = props;

  const musicList = document.getElementById("music-list");
  const hiddenContent = document.getElementById("hidden-content");

  const openQueue = () => {
    if (musicList && hiddenContent) {
      musicList.style.height = "50%";
      musicList.style.visibility = "visible";
      setTimeout(() => {
        hiddenContent.style.visibility = "visible";
      }, 300);
    }
  };

  const closeQueue = useCallback(() => {
    if (musicList && hiddenContent) {
      musicList.style.height = "0px";
      hiddenContent.style.visibility = "hidden";
    }
  }, [musicList, hiddenContent]);

  useEffect(() => {
    closeQueue();
  }, [song, closeQueue]);

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
      <BandTitle>{`${song.bandTitle}`}</BandTitle>

      <SoundControlContainer>
        {/* SOUND CONTROL */}
        <SoundControl {...props} />
      </SoundControlContainer>

      {/* PROGRESS */}
      <SoundProgressContainer>
        <SoundProgress
          index={"vertical"}
          barWidthPercent={
            audio
              ? getSongProgressPercentage(audio.currentTime, audio.duration)
              : 0
          }
          leftCounter={audioCurrentTime}
          rightCounter={audio ? secondsToDuration(audio.duration) : "00:00"}
          advanceProgress={(advancedPercentage: number) => {
            if (audio) audio.currentTime = audio.duration * advancedPercentage;
          }}
        />
      </SoundProgressContainer>

      <QueueIcon onClick={openQueue} />
      <MusicList id="music-list">
        <HiddenContent id="hidden-content">
          <CloseIcon onClick={closeQueue} />

          <SongsList selectSong={selectSong} song={song} />
        </HiddenContent>
      </MusicList>
    </Container>
  );
};

export default PlayerVertical;
