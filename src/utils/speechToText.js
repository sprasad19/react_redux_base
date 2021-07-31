import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Icon } from 'semantic-ui-react';


const SpeechToText = ({ setMessageData, ...props }) => {
  const [message, setMessage] = useState("");
  const [micOn, setMicOn] = useState(false);
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({clearTranscriptOnListen: true});
  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  useEffect(() => {
    if (transcript) {

      setMessageData(transcript)
    }
  }, [transcript]);
  useEffect(() => 
    resetTranscript
  , [props.clearTranscript]);
  if (!browserSupportsSpeechRecognition) {
    return <span></span>;
  }

  return (
    <div className="microphoneDiv">
      <span class="tooltiptext">Hold to Speak</span>
      <div className={listening ? 'on' : 'off'}>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
        onClick={(e) => e.preventDefault()}
      ><Icon size={"large"} name='microphone' /></button>
      {/* <p>{transcript}</p> */}
    </div>
    </div>
  );
};
export default SpeechToText;