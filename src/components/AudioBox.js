import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ButtonGroup, Button } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SendIcon from "@mui/icons-material/Send";

import axios from "axios";
import useLLM from "usellm";

const AudioBox = ({ fetchVideo }) => {
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
  const [data, setData] = useState({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Your name is Miss April. You are a elementary school teacher with many years of experience who loves children. You are a very cheerful and happy person who just loves to teach and maintains high levels of professionalism and dignity. All the questions asked to you are doubts that children have and therefore you need to explain these doubts in the simplest ways possible with the word limit of 30-40 words.  You will strictly answer only those question you are sure about and if you are unaware then simply beg their pardon and tell them that you will learn about it and come back to them later. All the information is to be kept child friendly. You will encourage the children to learn more in a gentle way.",
      },
      { role: "assistant", content: "" },
    ],
  });

  const GPT_KEY = process.env.REACT_APP_GPT_API_KEY;

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const fetchData = async () => {
    if (!transcript) {
      return;
    }

    const updatedMessages = [{ role: "assistant", content: transcript }];
    const newData = { ...data, messages: updatedMessages };
    setData(newData);
    console.log("sending data", newData);
    try {
      // const response = await axios.post(
      //   "https://api.openai.com/v1/chat/completions",
      //   newData,
      //   {
      //     headers: {
      //       Authorization: GPT_KEY,
      //     },
      //   }
      // );
      // console.log("response.data", response.data);
      // fetchVideo(response.data.choices[0].message.content);
      const { message } = await llm.chat({ messages: updatedMessages });
      fetchVideo(message.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div style={{ padding: "5rem" }}>
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
    </div>
  );
};

export default AudioBox;
