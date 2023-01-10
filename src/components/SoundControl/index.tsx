import React, { useEffect, useState } from "react";
import { Container, PlayBackIcon, PlayForwardIcon, PlayIcon } from "./styles";

export interface ISoundControlProps {
  audio?: HTMLAudioElement;
  nextSong: () => void;
  prevSong: () => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const SoundControl: React.FC<ISoundControlProps> = (
  props: ISoundControlProps
) => {
  const playIcon = require("../../assets/play.svg").default;
  const pauseIcon = require("../../assets/pause.svg").default;
  const [playPauseIcon, setPlayStopIcon] = useState(playIcon);
  const { audio, isPlaying, nextSong, prevSong } = props;

  useEffect(() => {
    if (isPlaying) {
      setPlayStopIcon(pauseIcon);
    } else {
      setPlayStopIcon(playIcon);
    }
  }, [isPlaying, setPlayStopIcon, pauseIcon, playIcon]);

  const playPause = async () => {
    if (audio) {
      if (isPlaying) {
        await audio.pause();
      } else {
        await audio.play();
      }
    }
  };

  return (
    <Container>
      <PlayBackIcon onClick={prevSong} />
      <PlayIcon src={playPauseIcon} alt="Play icon" onClick={playPause} />
      <PlayForwardIcon onClick={nextSong} />
    </Container>
  );
};

export default SoundControl;
