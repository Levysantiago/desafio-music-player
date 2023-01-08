import { useEffect, useState } from "react";
import PlayerHorizontal from "./components/PlayerHorizontal";
import PlayerVertical from "./components/PlayerVertical";
import fixyou from "./assets/songs/fixyou-coldplay.mp3";

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
  const [playing, setPlaying] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const _audio = new Audio(fixyou);
    setAudio(_audio);
  }, [setAudio]);

  return (
    <div>
      <PlayerVertical
        {...{
          audio,
          playing,
          setPlaying,
          isPlaying,
          setIsPlaying,
          song: songs[playing],
        }}
      />
      <PlayerHorizontal
        barWidthPercent={40}
        {...{
          audio,
          playing,
          setPlaying,
          isPlaying,
          setIsPlaying,
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
    </div>
  );
}

export default App;
