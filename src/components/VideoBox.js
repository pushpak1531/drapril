import React, { useState } from "react";
import axios from "axios";

const VideoBox = ({ videoInput }) => {
  const data = {
    script: {
      type: "text",
      input: videoInput,
      subtitles: "False",
      provider: {
        type: "microsoft",
        voice_id: "en-US-JennyNeural",
      },
      ssml: "false",
    },
    config: {
      stitch: "true",
    },
    source_url:
      "https://t3.ftcdn.net/jpg/04/51/39/36/360_F_451393636_7q7W1VVghOr6pIwYT471yYWkI2CMWj3M.jpg",
    config: {
      fluent: "false",
      pad_audio: "0.0",
    },
  };

  const [responseData, setResponseData] = useState();

  const [videoData, setVideoData] = useState();

  const fetchId = async () => {
    try {
      const response = await axios.post("https://api.d-id.com/talks", data, {
        headers: {
          Authorization: "Basic ZGF1OWFyQGV6enR0LmNvbQ:w3SnBO8_92KeM1fhCRuxn",
        },
      });
      setResponseData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchVideo = async () => {
    try {
      const url = `https://api.d-id.com/talks/${responseData.id}`;
      console.log({ url });
      const response = await axios.get(url, {
        headers: {
          Authorization: "Basic ZGF1OWFyQGV6enR0LmNvbQ:w3SnBO8_92KeM1fhCRuxn",
        },
      });
      console.log("fetch video response url", response.data);
      setVideoData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!videoInput) {
    return null;
  }

  return (
    <div>
      <div>
        <button onClick={fetchId}>Generate ID</button>
        <button onClick={fetchVideo}>Get Video URL</button>
      </div>
      {videoData && <video controls src={videoData.result_url} />}
    </div>
  );
};

export default VideoBox;
