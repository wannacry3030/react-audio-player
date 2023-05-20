const ProgressBar = ({ ProgressBarRef }) => {
  const handleProgressChange = () => {
    console.log(ProgressBarRef.current.value);
  };

  return (
    <div className="progress">
      <span className="time current">00:00</span>
      <input type="range" ref={ProgressBarRef} />
      <span className="time">05:37</span>
    </div>
  );
};

export default ProgressBar;
