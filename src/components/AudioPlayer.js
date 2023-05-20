import { useRef, useState } from "react";
import { tracks } from "../data/tracks";

//importando os elementos que formam o audio player
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

//renderizando o conteudo da musica na tela do usuario
const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  //referencia
  const audioRef = useRef();
  console.log(audioRef);

  const progressBarRef = useRef();

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack
          {...{ currentTrack, audioRef, setDuration, progressBarRef }}
        />
        <Controls {...{ audioRef }} />
        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
