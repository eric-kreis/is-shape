import styled from 'styled-components';

export const ResultContainer = styled.div`
  /* padding: 20px; */
`;

export const ResultBox = styled.section`
  margin-top: 16px;
  padding: 20px 90px;
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
