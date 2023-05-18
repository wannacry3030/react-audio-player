import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

//renderizando o conteudo da musica na tela do usuario
const AudioPlayer = () => {
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack />
        <Controls />
        <ProgressBar />
      </div>
    </div>
  );
};

export default AudioPlayer;
