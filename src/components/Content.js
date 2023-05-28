import React, { useState } from "react";

import AudioBox from "./AudioBox";
import VideoBox from "./VideoBox";

const Content = (props) => {
  const [videoInput, setVideoInput] = useState("");

  return (
    <div>
      <div className="audiobox">
        <AudioBox setVideoInput={setVideoInput} />
      </div>
      <div className="videobox">
        <VideoBox videoInput={videoInput} />
      </div>
    </div>
  );
};

export default Content;
