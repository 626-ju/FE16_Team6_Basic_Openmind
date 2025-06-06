//hooks
import { useState } from 'react';
//images
import TalkIcon from '../../assets/icons/Messages.svg?react';
//modules
import {
  AnswerBox,
  QuestionCount,
} from '../../components/AnswerCabinetStyle.jsx';
import AnswerItem from './AnswerItem.jsx';

function AnswerCabinet({ profile, nickname, countOfQuestion, questions }) {
  //const [questions, setQuestions] = useState([]);
  //props 로 답변 /미답변 여부를 보내고 그 여부에 따라 ui도 변경 해야함  .
  const complete1 = false;
  const questionNum = countOfQuestion; //api 에서 id 가져와서 셀것
  return (
    <>
      <AnswerBox>
        <QuestionCount>
          <TalkIcon />
          <div>{questionNum}개의 질문이 있습니다.</div>
        </QuestionCount>
        {questions.map((question) => (
          <AnswerItem
            key={question.id}
            id={question.id}
            profile={profile}
            nickname={nickname}
            contents={
              question.answer?.content === null ? '' : question?.answer?.content
            }
            question={question?.content}
            complete={question?.answer?.content == null ? false : true}
            answer={
              question.answer?.content === null ? '' : question?.answer?.content
            }
            like={question.like}
            dislike={question.dislike}
            createdate={question.createdAt}
            answerdate={
              question.answer?.createdAt === null
                ? ''
                : question?.answer?.createdAt
            }
            rejected={
              question?.answer?.isRejected === null
                ? ''
                : question?.answer?.isRejected
            }
            questionID={
              question?.answer?.id === null ? '' : question?.answer?.id
            }
          />
        ))}
        <AnswerItem
          profile={profile}
          nickname={nickname}
          contents={questions[3]?.answer.content}
          question={questions[3]?.content}
          complete={questions[3]?.answer.content == null ? false : true}
          answer={questions[3]?.answer.content}
          like={questions[3]?.like}
          dislike={questions[3]?.dislike}
          createdate={questions[3]?.createdAt}
          answerdate={questions[5]?.answer.createdAt}
        />
        <AnswerItem
          profile={profile}
          nickname={nickname}
          question={questions[1]?.content}
          complete={complete1}
          like={questions[5]?.like}
          dislike={questions[5]?.dislike}
          createdate={questions[5].createdAt}
          answerdate={questions[5]?.answer.createdAt}
        />
      </AnswerBox>
    </>
  );
}

export default AnswerCabinet;
