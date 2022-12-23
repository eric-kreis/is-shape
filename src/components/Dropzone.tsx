import { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import type { SentFile } from '../App';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

interface IProps {
  handleSentFile: (sentFile: SentFile) => void;
  clearSentFiles: () => void;
}

function Dropzone({ handleSentFile, clearSentFiles }: IProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    clearSentFiles();

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        handleSentFile({
          name: file.name,
          content: e.target?.result as string,
        });
      };
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: { 'image/svg+xml': [] },
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  }), [
    isFocused,
    isDragAccept,
    isDragReject,
  ]);

  return (
    <div className="container">
      <div {...getRootProps({ style: style as any })}>
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <p>Solte seus SVGs aqui...</p>
          ) : <p>Arraste e solte SVGs aqui ou clique para selecioná-los</p>
        }
      </div>
    </div>
  );
}

export default Dropzone;
