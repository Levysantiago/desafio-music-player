import { useEffect, useState } from "react";
import PlayerHorizontal from "../components/PlayerHorizontal";
import PlayerVertical from "../components/PlayerVertical";
import fixyou from "../assets/songs/fixyou-coldplay.mp3";
import { secondsToDuration } from "../helpers/seconds-to-duration";
import { Container, ContentContainer, RootContainer } from "./styles";

export interface ISong {
  title: string;
  bandTitle: string;
  audioPath: string;
}

function App() {
  const [songs] = useState([
    {
      bandTitle: "Coldplay",
      title: "Fix You",
      audioPath: "./assets/songs/fixyou-coldplay.mp3",
    },
  ]);
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [audioCurrentTime, setAudioCurrentTime] = useState("00:00");
  const [playing, setPlaying] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const _audio = new Audio(fixyou);
    if (_audio) {
      setAudio(_audio);
    }
  }, [setAudio]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("timeupdate", () => {
        setAudioCurrentTime(secondsToDuration(audio.currentTime));
      });
    }
  }, [audio]);

  return (
    <RootContainer>
      <Container>
        <ContentContainer>
          <PlayerVertical
            {...{
              audio,
              playing,
              setPlaying,
              isPlaying,
              setIsPlaying,
              audioCurrentTime,
              song: songs[playing],
            }}
          />
        </ContentContainer>
        <ContentContainer>
          <PlayerHorizontal
            {...{
              audio,
              playing,
              setPlaying,
              isPlaying,
              setIsPlaying,
              audioCurrentTime,
              song: songs[playing],
            }}
          />
          <PlayerHorizontal
            {...{
              audio,
              playing,
              setPlaying,
              isPlaying,
              setIsPlaying,
              song: songs[playing],
            }}
          />
        </ContentContainer>
      </Container>
    </RootContainer>
  );
}

export default App;
