import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  gap: 24px;
`;

export const MinisizeProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export const NickFont = styled.span`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const GrayColorFont = styled.span`
  color: var(--gray-40);
  font-size: 14px;
`;

//text area 로 했음 .
export const SubstantialInput = styled.textarea`
  border: none;
  background-color: var(--gray-20);
  border-radius: 8px;
  flex-grow: 1;
  min-width: 0px;
  min-height: 186px;
  vertical-align: top;
  padding: 16px;
  resize: none;

  &:focus {
    outline: none;
    border-style: solid; /* 기본 아웃라인 제거 */
    border-color: var(--brown-40);
    border-width: 1px;
  }
`;
