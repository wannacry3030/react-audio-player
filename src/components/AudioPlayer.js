import DisplayTrack from "./DisplayTrack";

//renderizando o conteudo da musica na tela do usuario
const AudioPlayer = () => {
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack />
      </div>
    </div>
  );
};

export default AudioPlayer;
