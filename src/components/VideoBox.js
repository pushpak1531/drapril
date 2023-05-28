import React from "react";
import "../App.css";

const VideoBox = ({ videoData }) => {
  console.log({ videoData });
  return (
    <div style={{ padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {videoData && <video src={videoData.result_url} autoPlay />}
      </div>
    </div>
  );
};

export default VideoBox;
