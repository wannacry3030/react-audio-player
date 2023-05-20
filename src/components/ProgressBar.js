const ProgressBar = ({ ProgressBarRef, audioRef }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = ProgressBarRef.current.value;
  };

  return (
    <div className="progress">
      <span className="time current">00:00</span>
      <input
        type="range"
        ref={ProgressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="time">05:37</span>
    </div>
  );
};

export default ProgressBar;
