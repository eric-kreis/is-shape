import styled from 'styled-components';

export const DropContainer = styled.div`
`;

export const DropBox = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px;
  border-width: 2;
  border-radius: 6px;
  border-color: ${
  ({ isFocused, isDragAccept, isDragReject }: {
    isFocused: boolean,
    isDragAccept: boolean,
    isDragReject: boolean,
  }) => {
    if (isFocused) return '#2196f3';
    if (isDragAccept) return '#00e676';
    if (isDragReject) return '#ff1744';
    return '#B6BCC3';
  }};
  border-style: dashed;
  outline: none;
  transition: border .24s ease-in-out;

  p {
    font-size: 14pt;
    color: #5A5A68;
  }
`;
