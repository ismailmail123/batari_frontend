import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const VoiceToTextButton = ({ 
  onTranscript, 
  onStart, 
  onStop, 
  isListening,
  className = "" 
}) => {
  return (
	<button
	  type="button"
	  onClick={isListening ? onStop : onStart}
	  className={`p-2 rounded-full transition-all duration-300 ${
		isListening 
		  ? 'bg-red-500 text-white animate-pulse' 
		  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
	  } ${className}`}
	  title={isListening ? "Menghentikan rekaman" : "Mulai rekaman suara"}
	>
	  {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
	</button>
  );
};

export default VoiceToTextButton;
