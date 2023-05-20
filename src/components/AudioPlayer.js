import { useRef, useState } from "react";
import { tracks } from "../data/tracks";

//importando os elementos que formam o audio player
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

//renderizando o conteudo da musica na tela do usuario
const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  //referencia
  const audioRef = useRef();
  console.log(audioRef);

  const ProgressBarRef = useRef();

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack {...{ currentTrack, audioRef }} />
        <Controls {...{ audioRef }} />
        <ProgressBar {...{ ProgressBarRef }} />
      </div>
    </div>
  );
};

export default AudioPlayer;
