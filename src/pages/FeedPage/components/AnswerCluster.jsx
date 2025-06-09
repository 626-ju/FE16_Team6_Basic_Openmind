import { useEffect, useRef } from 'react';

import Empty from '@assets/icons/Empty.svg?react';
import Message from '@assets/icons/Messages.svg?react';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import styled from 'styled-components';

import AnswerItem from './AnswerItem';

function AnswerCluster({ subjectInfo, result, questions, callback }) {
  const loadingRef = useRef(null);
  const [observe, unobserve] = useIntersectionObserver(callback);

  useEffect(() => {
    if (questions.length === 0) return;
    if (questions.length >= 3) {
      observe(loadingRef.current);
    }

    if (questions.length === result.count) {
      unobserve(loadingRef.current);
    }
  }, [questions, result]);

  return (
    <AnswerClusterBody>
      <AnswerClusterWrapper>
        <AnswerClusterText>
          <Message height={24} />
          {result.count !== 0 ? (
            <>{result.count}개의 질문이 있습니다.</>
          ) : (
            <>아직 질문이 없습니다.</>
          )}
        </AnswerClusterText>
        {result.count !== 0 ? (
          <>
            {questions &&
              questions.map((el) => (
                <AnswerItem key={el.id} subjectInfo={subjectInfo} result={el} />
              ))}
            {questions.length === result.count ? (
              <AnswerClusterText ref={loadingRef}>끝!</AnswerClusterText>
            ) : (
              <AnswerClusterText ref={loadingRef}>로딩중...</AnswerClusterText>
            )}
          </>
        ) : (
          <AnswerClusterEmpty>
            <Empty />
          </AnswerClusterEmpty>
        )}
      </AnswerClusterWrapper>
    </AnswerClusterBody>
  );
}

export default AnswerCluster;

const AnswerClusterBody = styled.main`
  width: 100%;
  margin-top: 48px;
  padding: 0px 24px;
  display: flex;
  justify-content: center;
`;

const AnswerClusterWrapper = styled.div`
  width: 716px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.color.brown10};
  border: 1px solid ${({ theme }) => theme.color.brown30};
  border-radius: 16px;
`;

const AnswerClusterText = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.brown40};
  font-size: 20px;
`;

const AnswerClusterEmpty = styled.div`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  justify-content: center;
`;
