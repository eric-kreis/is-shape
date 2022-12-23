import { useMemo } from 'react';
import { Buffer } from 'buffer';
import { BsCheck2Circle } from 'react-icons/bs';
import { VscError } from 'react-icons/vsc';
import type { SentFile } from '../../App';
import svgIsShape from '../../utils/svgIsShape';
import { ResultBox } from './styles';

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
      { images.map((image, index) => (
        <ResultBox key={`${image.name + index}`} isShape={image.isShape}>
          <div>
            <img
              src={`data:image/svg+xml;base64,${image.base64}`}
              alt={image.name}
            />
            <p>{image.name}</p>
          </div>
          <p>
            {image.isShape ? (
              <BsCheck2Circle title="Tá no shape!" />
            ) : <VscError title="Não tá no shape :(" />}
          </p>
        </ResultBox>
      ))}
    </div>
  );
}

export default Resultzone;
