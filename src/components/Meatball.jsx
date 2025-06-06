import { useEffect, useState, useRef } from 'react';

import axios from 'axios';

import { ButtonStyleClear } from './AnswerItemStyle.jsx';
import {
  DropdownContainer,
  DropdownMenuItem,
  DropdownMenu,
} from './MeatballStyle.jsx';
import MeatballIcon from '../assets/icons/More.png';

function Meatball({ complete, rejected, questionID, id }) {
  // 미트볼 . . .

  const [MeatballOpenClose, SetMeatballOpenClose] = useState(false);
  const dropdownRef = useRef(null);
  const [RejectedState, SetRejectedState] = useState(rejected);
  console.log(`리젝티드 여부 by 미트볼 : ${RejectedState} ${id}`);
  const toggleDropdown = () => {
    // 드롭다운 토글 함수 .
    SetMeatballOpenClose((prev) => !prev);
  };

  const handleEditClick = () => {
    //수정하기 클릭 시 발동
    alert('수정하기를 클릭했습니다!'); //일단 샘플임 **********
    SetMeatballOpenClose(false); //Menu close
  };

  async function handleRejectedClick() {
    if (RejectedState == null) {
      SetRejectedState(false);
    }
    const requestBody = {
      isRejected: true,
      content: '답변이 거절됨',
    };
    try {
      if (rejected == null) {
        const response = await axios.post(
          `https://openmind-api.vercel.app/16-6/questions/${id}/answers/`,
          requestBody,
        );
        return response.data;
      } else {
        const response = await axios.put(
          `https://openmind-api.vercel.app/16-6/answers/${questionID}/`,
          requestBody,
        );
        SetRejectedState(response.data.isRejected);
        SetMeatballOpenClose(false); //Menu close
        return response.data;
      }
    } catch (error) {
      console.error('Axios Error:', error.response.data);
    }
  } //답변 거부 클릭

  async function handleUnRejectedClick() {
    const requestBody = {
      isRejected: false,
      content: '(empty)',
    };
    try {
      const response = await axios.put(
        `https://openmind-api.vercel.app/16-6/answers/${questionID}/`,
        requestBody,
      );
      SetRejectedState(response.data.isRejected);
      SetMeatballOpenClose(false); //Menu close
      return response.data;
    } catch (error) {
      console.error('Axios Error:', error.response.data);
    }
  } //답변 거부를 거부한다.*/

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        SetMeatballOpenClose(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  //** API 구조가 작성 된 질문에만 답변거부로 표시하게끔 되어있음. 거부 를 행사하려면
  // rejected 값이 필요한데 답장 객체에 그것이 들어있음.
  // 그래서 궂이 미답변에 거부를 하려면(그게 더 자연스러우니 궂이 시도하자면)
  // POST 해서 빈 답을 만들고 거기서 reject 값을 false 로 해주어야함. */
  //이벤트 리스너 추가. click 보다 mousedown 으로 감지하는 이유는 click 은 눌렀다 때야 하지만, mousedown 은 누르자마자 발동
  return (
    <DropdownContainer ref={dropdownRef}>
      <ButtonStyleClear onClick={toggleDropdown}>
        <img src={MeatballIcon} alt='더보기 옵션' />
      </ButtonStyleClear>

      {MeatballOpenClose && (
        <DropdownMenu>
          {RejectedState ? (
            <DropdownMenuItem onClick={handleUnRejectedClick}>
              답변거부 취소
            </DropdownMenuItem>
          ) : complete ? (
            <>
              <DropdownMenuItem onClick={handleEditClick}>
                수정하기
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert('삭제하기')}>
                삭제하기
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleRejectedClick}>
                답변거부
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem onClick={handleRejectedClick}>
              답변거부
            </DropdownMenuItem>
          )}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

export default Meatball;
