import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ButtonGroup, Button } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SendIcon from "@mui/icons-material/Send";
import CharacterBox from "./CharactrerBox";
import axios from "axios";

const AudioBox = (props) => {
  const [data, setData] = useState({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: "" }],
  });

  const [responseData, setResponseData] = useState();

  const fetchData = async () => {
    const updatedMessages = [{ role: "system", content: transcript }];
    const newData = { ...data, messages: updatedMessages };
    setData(newData);
    console.log("sending data", newData);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        newData,
        {
          headers: {
            Authorization:
              "",
          },
        }
      );
      setResponseData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={SpeechRecognition.startListening}>
          <MicIcon></MicIcon>
        </Button>
        <Button onClick={SpeechRecognition.stopListening}>
          <MicOffIcon></MicOffIcon>
        </Button>
        <Button onClick={resetTranscript}>
          <RestartAltIcon></RestartAltIcon>
        </Button>
        <Button onClick={() => fetchData(transcript)}>
          <SendIcon></SendIcon>
        </Button>
      </ButtonGroup>
      <CharacterBox text={transcript} />
      {responseData && (
        <div>
          <h3>Answer:{responseData.choices[0].message.content}</h3>
        </div>
      )}
    </div>
  );
};

export default AudioBox;
