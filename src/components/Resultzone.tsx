import { useMemo } from 'react';
import { Buffer } from 'buffer';
import type { SentFile } from '../App';
import svgIsShape from '../utils/svgIsShape';

interface IProps {
  sentFiles: SentFile[];
}

function Resultzone({ sentFiles }: IProps) {
  const images = useMemo(() => (
    sentFiles.map((sentFile) => ({
      ...sentFile,
      base64: Buffer.from(sentFile.content).toString('base64'),
      isShape: svgIsShape(sentFile.content),
    }))
  ), [sentFiles]);

  return (
    <div>
      { images.map((image) => (
        <div key={image.name}>
          <p>{image.name}</p>
          <img
            style={{ height: '100px', width: '100px' }}
            src={`data:image/svg+xml;base64,${image.base64}`}
            alt={image.name}
          />
          <p>{image.isShape ? 'Seu SVG é um shape!' : 'Seu SVG não é um shape :('}</p>
        </div>
      ))}
    </div>
  );
}

export default Resultzone;
