import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import type { SentFile } from '../../App';
import { DropBox, DropContainer } from './styles';

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
  } = useDropzone({ onDrop, accept: { 'image/svg+xml': [] } });

  return (
    <DropContainer>
      <DropBox {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <p>Solte seus SVGs aqui...</p>
          ) : <p>Arraste e solte SVGs aqui ou clique para selecionar</p>
        }
      </DropBox>
    </DropContainer>
  );
}

export default Dropzone;
