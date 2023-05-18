import { useState } from "react";

//icones
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackwardSharp,
  IoPlaySkipForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button>
          <IoPlaySkipBackSharp />
        </button>
        <button>
          <IoPlayBackSharp />
        </button>

        <button>{isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}</button>

        <button>
          <IoPlayForwardSharp />
        </button>

        <button>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default Controls;
