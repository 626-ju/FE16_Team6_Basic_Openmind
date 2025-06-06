//modules
import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

//imgs
import ThumbsDown from '../../assets/icons/thumbs-down.svg?react';
import ThumbsUp from '../../assets/icons/thumbs-up.svg?react';
//component
import AnswerInputBox from './AnswerInputBox.jsx';
//style
import {
  ItemBox,
  ItemBoxHeader,
  ItemBoxFooter,
  GrayLine,
  AnswerOrNot,
} from '../../components/AnswerItemStyle.jsx';
import { ButtonBrown10 } from '../../components/ButtonComponent.jsx';
import Meatball from '../../components/Meatball.jsx';

function AnswerItem({
  id,
  profile,
  nickname,
  contents,
  complete,
  question,
  answer,
  like,
  dislike,
  createdate,
  answerdate,
  rejected,
  questionID,
}) {
  console.log(`key 의 값은 : ${id}`);
  console.log(`questionID 의 값은 : ${questionID}`);
  console.log(`글의 작성 시간 : ${createdate}/ 답변의 작성 시간 ${answerdate}`);
  let Answer = '답변 완료'; //이것도 state 로 ?
  if (complete == false) {
    Answer = '미답변';
  }
  function AnswerWhether() {
    return <AnswerOrNot $textStatus={Answer}>{Answer}</AnswerOrNot>;
  }

  function ReactionButton() {
    const [thumbColor, setThumbcolor] = useState('var(--gray-40)');
    const [unThumbColor, setUnThumbcolor] = useState('var(--gray-40)');
    const [toggle, setToggle] = useState(false);
    const [togglee, setTogglee] = useState(false);

    const [likeCount, setLikeCount] = useState(like);
    const [disLikeCount, setDisLikeCount] = useState(dislike);
    const handleClickLike = (e) => {
      const colorSet = toggle ? 'var(--gray-40)' : 'var(--blue-50)';
      setThumbcolor(colorSet);
      setToggle(!toggle);
      if (unThumbColor == 'var(--gray-40)') {
        return;
      } else {
        const revColorSet = 'var(--gray-40)';
        setUnThumbcolor(revColorSet);
        setTogglee(!togglee);
      }
    };

    const handleClickDislike = (e) => {
      const colorSet = togglee ? 'var(--gray-40)' : 'var(--red-50)';
      setUnThumbcolor(colorSet);
      setTogglee(!togglee);
      if (thumbColor == 'var(--gray-40)') {
        return;
      } else {
        const revColorSet = 'var(--gray-40)';
        setThumbcolor(revColorSet);
        setToggle(!toggle);
      }
    };

    return (
      <div
        style={{
          margin: '24px',
          display: 'flex',
          gap: '32px',
          alignItem: 'center',
        }}
      >
        <button
          onClick={handleClickLike}
          style={{
            display: 'flex',
            gap: '6px',
            justifyContent: 'center',
            alignItem: 'center',
            color: thumbColor,
            background: 'none',
            border: 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <ThumbsUp />
          </div>
          <div style={{ fontSize: '14px' }}>
            좋아요 {likeCount !== 0 && <span>{likeCount}</span>}
          </div>
        </button>

        <button
          onClick={handleClickDislike}
          style={{
            display: 'flex',
            gap: '6px',
            color: unThumbColor,
            background: 'none',
            border: 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <ThumbsDown />
          </div>
          <div style={{ fontSize: '14px' }}>
            싫어요 {disLikeCount !== 0 && <span>{disLikeCount}</span>}
          </div>
        </button>
      </div>
    );
  }

  return (
    <>
      <ItemBox>
        <ItemBoxHeader>
          <AnswerWhether />
          <Meatball
            complete={complete}
            rejected={rejected}
            questionID={questionID}
            id={id}
          />
        </ItemBoxHeader>
        <AnswerInputBox
          profile={profile}
          nickname={nickname}
          contents={contents}
          complete={complete}
          question={question}
          createdate={createdate}
          answerdate={answerdate}
          rejected={rejected}
          questionID={questionID}
          id={id}
        />
        <ItemBoxFooter>
          <GrayLine />
          <ReactionButton />
        </ItemBoxFooter>
      </ItemBox>
    </>
  );
}
export default AnswerItem;
