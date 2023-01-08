import React, { useEffect } from "react";
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
  const { audio, playing, setPlaying, isPlaying, setIsPlaying } = props;

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
      <PlayIcon
        src={
          isPlaying
            ? require("../../assets/pause.svg").default
            : require("../../assets/play.svg").default
        }
        alt="Play icon"
        onClick={playPause}
      />
      <PlayForwardIcon />
    </Container>
  );
};

export default SoundControl;
