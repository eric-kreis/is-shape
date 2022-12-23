import styled from 'styled-components';
import { IoMdInformationCircleOutline } from 'react-icons/io';

export const ReasonText = styled.p`
  opacity: 0;
  position: absolute;
  color: gray;
  top: 0;
  right: -130px;
  left: 102%;
`;

export const InformIcon = styled(IoMdInformationCircleOutline)`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 16pt;
  z-index: 10;

  :hover {
    cursor: pointer;
  }

  :hover + ${ReasonText} {
    opacity: 1;
    font-size: 10pt;
  }
`;

export const ResultBox = styled.section`
  position: relative;
  margin-top: 16px;
  padding: 20px 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background-color: ${({ isShape }: { isShape: boolean }) => (isShape ? '#b0e5b0' : '#edc9c9')};

  * {
    background-color: transparent;
  }

  p {
    font-size:26pt;
  }

  div {
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    max-width: 100px;
    align-items: center;

    img {
      height: 80px;
      width: 80px;
    }

    p {
      margin-left: 8px;
      white-space: nowrap;
      margin-top: 10px;
      font-size: 10pt;
    }
  }
`;
