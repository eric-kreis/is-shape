import { useState } from 'react';
import Dropzone from './components/dropzone';
import Resultzone from './components/resultzone';
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
    <div className="app">
      <GlobalStyle />
      <h1>Seu elemento tá no shape?</h1>
      <Dropzone handleSentFile={handleSentFile} clearSentFiles={clearSentFiles} />
      <Resultzone sentFiles={sentFiles} />
    </div>
  );
}

export default App;
