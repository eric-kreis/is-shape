import { useMemo, useState } from 'react';
import { Buffer } from 'buffer';

function App() {
  const [fileText, setFileText] = useState('');
  const [error, setError] = useState('');

  const image = useMemo(() => (
    fileText ? Buffer.from(fileText).toString('base64') : ''
  ), [fileText]);

  const handleFile: React.InputHTMLAttributes<HTMLInputElement>['onChange'] = ({ target }) => {
    if (!target.files?.length || target.files[0].type !== 'image/svg+xml') {
      setError('Você deve selecionar um SVG');
    } else {
      setError('');
      const reader = new FileReader();
      reader.readAsText(target.files[0]);
      reader.onload = (e) => { setFileText(e.target?.result as any); };
    }
  };

  return (
    <div>
      <div>
        <p>{error}</p>
        <input type="file" onChange={handleFile} />
      </div>
      { image && !error && (
        <img
          style={{ height: '100px', width: '100px' }}
          src={`data:image/svg+xml;base64,${image}`}
          alt="select svg"
        />
      )}
    </div>
  );
}

export default App;
