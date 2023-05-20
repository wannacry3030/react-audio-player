const ProgressBar = ({ ProgressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = ProgressBarRef.current.value;
  };

  return (
    <div className="progress">
      <span className="time current">{timeProgress}</span>
      <input
        type="range"
        ref={ProgressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="time">{duration}</span>
    </div>
  );
};

export default ProgressBar;
