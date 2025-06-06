import styled from 'styled-components';
export const ItemBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  height: 100%;
  margin: 24px;
  margin-top: 0px;
  border-radius: 20px;
  box-shadow: var(--shadow-1);
`;

export const GrayLine = styled.hr`
  margin: 0px 24px 24px 24px;
  border-color: var(--gray-10);
`;
export const ItemBoxHeader = styled.div`
  display: flex;
  margin: 24px;
  margin-bottom: 0px;
  justify-content: space-between;
`;
export const ItemBoxFooter = styled.div``;

export const ButtonStyleClear = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const AnswerOrNot = styled.div`
  height: 26px;
  font-size: 14px;
  padding: 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1.5px var(--brown-40) solid;
  color: ${(props) =>
    props.$textStatus === '미답변' ? 'var(--gray-40)' : 'var(--brown-40)'};
  background-color: white;
  text-align: center;
`;
