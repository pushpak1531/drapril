import React, { useState } from "react";

import AudioBox from "./AudioBox";
import VideoBox from "./VideoBox";
import axios from "axios";



const Content = (props) => {
  const [videoData, setVideoData] = useState();

 
  const DID_KEY = process.env.REACT_APP_DID_API_KEY;

  const fetchVideo = async (videoInput) => {
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
    try {
      const response = await axios.post("https://api.d-id.com/talks", data, {
        headers: {
          Authorization: DID_KEY,
        },
      });
      const url2 = `https://api.d-id.com/talks/${response.data.id}`;
      setTimeout(() => {
        async function getVideo() {
          console.log({ url2 });
          const response2 = await axios.get(url2, {
            headers: {
              Authorization:
              DID_KEY,
            },
          });
          console.log("fetch video response url", response2.data);
          setVideoData(response2.data);
        }
        getVideo();
      }, 10000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="audiobox">
        <AudioBox fetchVideo={fetchVideo} />
      </div>
      <div className="videobox">
        <VideoBox videoData={videoData} />
      </div>
    </div>
  );
};

export default Content;
