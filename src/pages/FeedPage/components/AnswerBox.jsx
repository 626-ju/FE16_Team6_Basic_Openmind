import styled from 'styled-components';

import { relativeTimeCalculator } from '../../../functions/relativeTimeCalculator';

function AnswerBox({ subjectInfo, children }) {
  const time = relativeTimeCalculator(children.createdAt);
  return (
    <AnswerBoxWrapper>
      <AnswerBoxSubjectImage
        src={subjectInfo.imageSource}
        alt='답변자 프로필 사진'
      />
      <div>
        <AnswerBoxUpperlineWrapper>
          <AnswerBoxSubjectname>{subjectInfo.name}</AnswerBoxSubjectname>
          <AnswerBoxCreatedAt>{time}</AnswerBoxCreatedAt>
        </AnswerBoxUpperlineWrapper>
        {children.isRejected ? (
          <AnswerBoxText isRejected={children.isRejected}>
            답변 거절
          </AnswerBoxText>
        ) : (
          <AnswerBoxText>{children.content}</AnswerBoxText>
        )}
      </div>
    </AnswerBoxWrapper>
  );
}

export default AnswerBox;

const AnswerBoxWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const AnswerBoxSubjectImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 9999px;
`;

const AnswerBoxSubjectname = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

const AnswerBoxCreatedAt = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray40};
`;

const AnswerBoxUpperlineWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  margin-bottom: 4px;
`;

const AnswerBoxText = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isRejected',
})`
  font-size: 16px;
  font-weight: 400;

  color: ${(props) => props.isRejected && props.theme.color.red50};
`;
