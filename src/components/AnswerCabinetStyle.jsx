import styled from 'styled-components';

export const AnswerBox = styled.div`
  background-color: var(--brown-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 24px;
  margin-top: 7px;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--brown-20);

  @media (min-width: 768px) {
    margin: 32px;
    margin-top: 19px;
  }
`;

export const QuestionCount = styled.div`
  color: var(--brown-40);
  display: flex;
  gap: 8px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 16px 63.5px;
`;
