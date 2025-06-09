import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';

import Badge from '../../../components/Badge';
import DislikeButton from '../../../components/DislikeButton';
import LikeButton from '../../../components/LikeButton';
import AnswerBox from './AnswerBox';
import QuestionBox from './QuestionBox';
import MeatBall from './MeatBall';
import { appendToLocalStorageArray } from '../../../functions/appendToLocalStorageArray';

function AnswerItem({ subjectInfo, result }) {
  const [isLikePressed, setIsLikePressed] = useState(false);
  const [isDislikePressed, setIsDislikePressed] = useState(false);
  const [isReactionPressed, setIsReactionPressed] = useState(false);
  const [likeCount, setLikeCount] = useState(result.like);
  const [isEditmode, setIsEditmode] = useState(false); //추가
  const [isRejectedState, setIsRejectedState] = useState();

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const storageItem = localStorage.getItem('reaction');
  const reactionList = JSON.parse(storageItem);
  const location = useLocation();

  //************************** <Debug>
  console.log(
    `Is this answer Page? : ${location.pathname.startsWith('/answer/')}`,
  );
  console.log(result);
  console.log(subjectInfo);
  //********************************<Rejected 관리>
  useEffect(() => {
    if (result.answer == null) {
      setIsRejectedState(false);
    } else {
      setIsRejectedState(result.answer.isRejected);
    }
  }, [result.answer]);

  //******************************** */

  const isAnswerPage = location.pathname.startsWith('/answer/');

  const handleLikeClick = () => {
    axios.post(`${baseUrl}/questions/${result.id}/reaction/`, {
      type: 'like',
    });
    setLikeCount((prev) => prev + 1);
    setIsLikePressed(true);
    setIsReactionPressed(true);
    appendToLocalStorageArray('reaction', {
      questionId: result.id,
      reaction: 'like',
    });
  };

  const handleDislikeClick = () => {
    axios.post(`${baseUrl}/questions/${result.id}/reaction/`, {
      type: 'dislike',
    });
    setIsDislikePressed(true);
    setIsReactionPressed(true);
    appendToLocalStorageArray('reaction', {
      questionId: result.id,
      reaction: 'dislike',
    });
  };

  useEffect(() => {
    if (!reactionList) return;
    reactionList.map((el) => {
      if (el.questionId === result.id) {
        setIsReactionPressed(true);
        if (el.reaction === 'like') setIsLikePressed(true);
        else if (el.reaction === 'dislike') setIsDislikePressed(true);
      } else {
        return;
      }
    });
  }, []);

  return (
    <AnswerItemWrapper>
      <ItemHeader>
        <Badge
          variant={
            result.answer?.content && result.answer?.content !== '(empty)'
              ? 'answered'
              : 'notAnswered'
          }
        >
          {result.answer?.content && result.answer?.content !== '(empty)'
            ? '답변 완료'
            : '미답변'}
        </Badge>
        {isAnswerPage && (
          <MeatBall
            result={result}
            rejected={result.answer}
            onRejectChange={setIsRejectedState}
            onEditChange={setIsEditmode}
          />
        )}
      </ItemHeader>
      <QuestionBox>{result}</QuestionBox>
      {result.answer ? (
        <AnswerBox
          subjectInfo={subjectInfo}
          questionID={result.id}
          editMode={isEditmode}
          onEditChange={setIsEditmode}
          rejected={isRejectedState}
        >
          {result.answer}
        </AnswerBox>
      ) : (
        <AnswerBox subjectInfo={subjectInfo} questionID={result.id} />
      )}
      <HorizontalLine />
      <ReactionButton>
        <LikeButton
          onClick={handleLikeClick}
          isPressed={isLikePressed}
          likeCount={likeCount}
          disabled={isReactionPressed}
        />
        <DislikeButton
          onClick={handleDislikeClick}
          isPressed={isDislikePressed}
          disabled={isReactionPressed}
        />
      </ReactionButton>
    </AnswerItemWrapper>
  );
}

export default AnswerItem;

const AnswerItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.gray10};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
`;

const HorizontalLine = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
`;

const ReactionButton = styled.div`
  display: flex;
  gap: 32px;
`;
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
