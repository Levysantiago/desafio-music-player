import { useEffect, useState } from "react";
import PlayerHorizontal from "../components/PlayerHorizontal";
import PlayerVertical from "../components/PlayerVertical";
import { secondsToDuration } from "../helpers/seconds-to-duration";
import { Container, ContentContainer, RootContainer } from "./styles";
import songRepository from "../repositories/SongRepository";

function App() {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [audioCurrentTime, setAudioCurrentTime] = useState("00:00");
  const [song, setSong] = useState(songRepository.it(0));
  const [isPlaying, setIsPlaying] = useState(false);
  const [continuePlaying, setContinuePlaying] = useState(false);

  const reset = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudioCurrentTime("00:00");
    }
  };

  const updateAudioCurrentTime = () => {
    if (audio) {
      setAudioCurrentTime(secondsToDuration(audio.currentTime));
    }
  };

  useEffect(() => {
    const _audio = new Audio(song.file);
    if (_audio) {
      _audio.onplay = () => {
        setIsPlaying(true);
      };

      _audio.onpause = () => {
        setIsPlaying(false);
      };

      setAudio(_audio);

      if (continuePlaying) {
        _audio.play();
        setContinuePlaying(false);
      }
    }
  }, [setAudio, setIsPlaying, song]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("timeupdate", updateAudioCurrentTime);
    }

    return () => {
      audio?.removeEventListener("timeupdate", updateAudioCurrentTime);
    };
  }, [audio]);

  const nextSong = () => {
    const _nextSong = songRepository.next();
    reset();
    setContinuePlaying(true);
    setSong(_nextSong.item);
  };

  const prevSong = () => {
    const _prevSong = songRepository.prev();
    reset();
    setContinuePlaying(true);
    setSong(_prevSong.item);
  };

  return (
    <RootContainer>
      <Container>
        <ContentContainer>
          <PlayerVertical
            {...{
              audio,
              isPlaying,
              setIsPlaying,
              audioCurrentTime,
              song,
              nextSong,
              prevSong,
            }}
          />
        </ContentContainer>
        <ContentContainer>
          <PlayerHorizontal
            {...{
              audio,
              isPlaying,
              setIsPlaying,
              audioCurrentTime,
              song,
              nextSong,
              prevSong,
            }}
          />
          <PlayerHorizontal
            {...{
              audio,
              isPlaying,
              setIsPlaying,
              song,
              nextSong,
              prevSong,
            }}
          />
        </ContentContainer>
      </Container>
    </RootContainer>
  );
}

export default App;
