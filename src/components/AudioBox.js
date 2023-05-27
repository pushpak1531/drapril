import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ButtonGroup, Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SendIcon from '@mui/icons-material/Send';
import CharacterBox from "./CharactrerBox";
import Axios from 'axios'




const AudioBox = (props) => {

  const [data, setData] = useState({
    name: '',
    email: '',
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: '' }],
  });

  const replaceContent = (newContent) => {
    const updatedMessages = [{ role: 'system', content: newContent }];
    setData({ ...data, messages: updatedMessages });
  };

    const fetchData = async () => {
      replaceContent(transcript);
      try {
        const response = await Axios.post('https://api.openai.com/v1/chat/completions', data, {
          headers: {
            'Authorization': 'Bearer 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',
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const {
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
  return (
    <div>
  
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={SpeechRecognition.startListening}>
          <MicIcon></MicIcon>          
          </Button>
          <Button onClick={SpeechRecognition.stopListening}>
          <MicOffIcon></MicOffIcon>
          </Button>
          <Button onClick={resetTranscript}>
          <RestartAltIcon></RestartAltIcon>
          </Button>
          <Button onClick={this.fetchData(transcript)}>
            <SendIcon ></SendIcon>
          </Button>
      </ButtonGroup>
      <CharacterBox text ={transcript}/>
      {data && (
        <div>
          <h3>Answer:{data.choices.message.content}</h3>
        </div>
      )}            
    </div>
  )
};

export default AudioBox;
