import { useState } from "react";
import { tracks } from "../data/tracks";

//importando os elementos que formam o audio player
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

//renderizando o conteudo da musica na tela do usuario
const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack currentTrack={currentTrack} />
        <Controls />
        <ProgressBar />
      </div>
    </div>
  );
};

export default AudioPlayer;
