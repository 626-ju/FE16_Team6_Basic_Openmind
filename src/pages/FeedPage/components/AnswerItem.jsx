import { useEffect, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import Badge from '../../../components/Badge';
import DislikeButton from '../../../components/DislikeButton';
import LikeButton from '../../../components/LikeButton';
import AnswerBox from './AnswerBox';
import QuestionBox from './QuestionBox';
import { appendToLocalStorageArray } from '../../../functions/appendToLocalStorageArray';

function AnswerItem({ subjectInfo, result }) {
  const [isLikePressed, setIsLikePressed] = useState(false);
  const [isDislikePressed, setIsDislikePressed] = useState(false);
  const [isReactionPressed, setIsReactionPressed] = useState(false);
  const [likeCount, setLikeCount] = useState(result.like);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const storageItem = localStorage.getItem('reaction');
  const reactionList = JSON.parse(storageItem);

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
      <Badge variant={result.answer ? 'answered' : 'notAnswered'}>
        {result.answer ? '답변 완료' : '미답변'}
      </Badge>
      <QuestionBox>{result}</QuestionBox>
      {result.answer && (
        <AnswerBox subjectInfo={subjectInfo}>{result.answer}</AnswerBox>
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
