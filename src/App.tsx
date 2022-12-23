import { useState } from 'react';
import Dropzone from './components/Dropzone';
import Resultzone from './components/Resultzone';
import GlobalStyle from './styles/global';

export interface SentFile {
  name: string;
  content: string;
}

function App() {
  const [sentFiles, setSentFiles] = useState<SentFile[]>([]);

  const handleSentFile = (sentFile: SentFile) => {
    setSentFiles((currentState) => [...currentState, sentFile]);
  };

  const clearSentFiles = () => setSentFiles([]);

  return (
    <div>
      <GlobalStyle />
      <Dropzone handleSentFile={handleSentFile} clearSentFiles={clearSentFiles} />
      <Resultzone sentFiles={sentFiles} />
    </div>
  );
}

export default App;
