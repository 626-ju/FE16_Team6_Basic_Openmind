import { useState } from 'react';

import styled from 'styled-components';

import axios from 'axios';

import TimePassedQuestionString from '../../components/TimePassedQuestionString.jsx';

import {
  InputBox,
  MinisizeProfileImg,
  ContentsBox,
  GrayColorFont,
  SubstantialInput,
  NickFont,
} from '../../components/AnswerInputBoxStyle.jsx';
import { ButtonBrown40 } from '../../components/ButtonComponent.jsx';

function AnswerInputBox({
  profile,
  nickname,
  contents,
  complete,
  question,
  createdate,
  answerdate,
  rejected,
  questionID,
  id,
}) {
  const [answerText, setAnswerText] = useState('');
  console.log(
    `타이틀 :${question} 리잭 값 : ${rejected} / 질문ID: ${questionID} complete 여부: ${complete} contents : ${contents}`,
  ); //잘 받아왔는가 확인
  const defaultQuestion = '좋아하는 동물은 ?'; //기본값 제목
  let title = defaultQuestion; // 보기용 제목 . 수정해야함
  title = question || defaultQuestion; // question prop 의 값을 할당 . 만약 없다면 디폴트 값으로 타이틀 지정.

  const AnswerCompleteButton = styled(ButtonBrown40)`
    justify-content: center;
    font-size: 16px;
  `;
  const handleAnswerChange = (e) => {
    setAnswerText(e.target.value); //입력값을 answerText 에 담는다.
    console.log(e.target.value); // 입력 확인
  };
  const handleSubmitAnswer = async () => {
    if (answerText.trim().length > 0) {
      const requestBody = {
        content: answerText,
        isRejected: false,
      };
      if (contents == null) {
        try {
          const response = await axios.post(
            `https://openmind-api.vercel.app/16-6/questions/${id}/answers/`,
            requestBody,
          );
          /*const newAnswerData = response.data;
          if (onUpperAnswer) {
            onUpperAnswer(newAnswerData);
          }*/
        } catch (err) {
          console.error(err);
        }
      } else {
        try {
          const response = await axios.put(
            `https://openmind-api.vercel.app/16-6/answers/${questionID}/`,
            requestBody,
          );
          /*const newAnswerData = response.data;
          if (onUpperAnswer) {
            onUpperAnswer(newAnswerData);
          }*/
        } catch (err) {
          console.error(err);
        }
      }
      setAnswerText(''); // 제출 후 입력 필드 초기화
    }
  };
  const buttonEnabled = answerText.trim().length > 0; // trim 을 통해 앞 뒤 공백 제거 후 길이가 0보다 크면 true .

  return (
    <>
      <InputBox>
        <div>
          <div>
            <GrayColorFont>
              질문 · <TimePassedQuestionString createdate={createdate} />
            </GrayColorFont>
          </div>
          <div>{title}</div>
        </div>
        <ContentsBox>
          <MinisizeProfileImg src={profile} alt='profileImage' />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: '4px',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <NickFont>{nickname}</NickFont>
              {complete ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <GrayColorFont>
                    <TimePassedQuestionString createdate={answerdate} />
                  </GrayColorFont>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            {rejected ? (
              <div style={{ fontSize: '16px', color: 'var(--red-50)' }}>
                답변 거절
              </div>
            ) : (complete && contents != '(empty)') ||
              (contents != null && contents != '(empty)') ? (
              <div style={{ wordBreak: 'break-all', width: '100%' }}>
                {contents}
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <SubstantialInput
                  onChange={handleAnswerChange}
                  value={answerText}
                  placeholder='답변을 입력해 주세요'
                ></SubstantialInput>
                <AnswerCompleteButton
                  onClick={handleSubmitAnswer}
                  disabled={!buttonEnabled}
                >
                  답변 완료
                </AnswerCompleteButton>
              </div>
            )}
          </div>
        </ContentsBox>
      </InputBox>
    </>
  );
}

export default AnswerInputBox;
