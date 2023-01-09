import React, { useEffect, useState } from "react";
import { Container, PlayBackIcon, PlayForwardIcon, PlayIcon } from "./styles";

export interface ISoundControlProps {
  audio?: HTMLAudioElement;
  playing: number;
  setPlaying: (id: number) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const SoundControl: React.FC<ISoundControlProps> = (
  props: ISoundControlProps
) => {
  const playIcon = require("../../assets/play.svg").default;
  const pauseIcon = require("../../assets/pause.svg").default;
  const [playPauseIcon, setPlayStopIcon] = useState(playIcon);
  const { audio, playing, setPlaying, isPlaying, setIsPlaying } = props;

  useEffect(() => {
    if (isPlaying) {
      setPlayStopIcon(pauseIcon);
    } else {
      setPlayStopIcon(playIcon);
    }
  }, [isPlaying]);

  const playPause = async () => {
    if (audio) {
      if (isPlaying) {
        await audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <Container>
      <PlayBackIcon />
      <PlayIcon src={playPauseIcon} alt="Play icon" onClick={playPause} />
      <PlayForwardIcon />
    </Container>
  );
};

export default SoundControl;
