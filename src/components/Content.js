import React from "react"

import AudioBox from "./AudioBox";
import VideoBox from "./VideoBox";

const Content = (props) => {
  return (
    <div>
       <div className="videobox">
      <VideoBox/>
    </div>
    <div className="audiobox">
       <AudioBox state/>
    </div>
    </div>
  )
};

export default Content;
