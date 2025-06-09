import { useEffect, useState, useRef } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import MeatballIcon from '../../../assets/icons/More.png';

function Meatball({ rejected, result, onEditChange, onRejectChange }) {
  const dropdownRef = useRef(null);
  const [RejectedState, SetRejectedState] = useState(false); // 원래 rejected 를 초기값으로 잡음
  const [MeatballOpenClose, SetMeatballOpenClose] = useState(false);
  const [CompleteState, SetCompleteState] = useState(true);
  console.log(rejected);

  useEffect(() => {
    if (rejected != null && rejected.isRejected === true) {
      SetRejectedState(true);
    } else if (
      rejected != null &&
      rejected.isRejected === false &&
      RejectedState === true
    ) {
      SetRejectedState(false);
    }
    if (rejected == null) {
      SetCompleteState(false);
    }
  }, [rejected, RejectedState]);

  const toggleDropdown = () => {
    // 드롭다운 토글 함수 .
    SetMeatballOpenClose((prev) => !prev);
  };

  const handleEditClick = () => {
    //수정하기 클릭 시 발동
    onEditChange(true);
    SetMeatballOpenClose(false); //Menu close
  };

  const handleDeleteClick = () => {
    SetMeatballOpenClose(false); //Menu close
  };

  async function handleRejectedClick() {
    const requestBody = {
      isRejected: true,
      content: '답변이 거절됨',
    };
    SetMeatballOpenClose(false); //Menu close
    try {
      let responseData;
      onRejectChange(true);
      if (rejected == null) {
        const response = await axios.post(
          `https://openmind-api.vercel.app/16-6/questions/${result.id}/answers/`,
          requestBody,
        );
        responseData = response.data;
      } else {
        const response = await axios.put(
          `https://openmind-api.vercel.app/16-6/answers/${result.answer.id}/`,
          requestBody,
        );
        responseData = response.data;
      }
      SetRejectedState(response.data.isRejected);
    } catch (error) {
      console.error('Axios Error:', error.response.data);
    }
  }

  async function handleUnRejectedClick() {
    const requestBody = {
      isRejected: false,
      content: '(empty)',
    };
    try {
      let responseData;
      onRejectChange(false);
      const response = await axios.put(
        `https://openmind-api.vercel.app/16-6/answers/${result.answer.id}/`,
        requestBody,
      );
      responseData = response.data;
      SetRejectedState(response.data.isRejected);
    } catch (error) {
      console.error('Axios Error:', error.response.data);
    }
    SetMeatballOpenClose(false); //Menu close
  }

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
          ) : CompleteState ? (
            <>
              <DropdownMenuItem onClick={handleEditClick}>
                수정하기
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDeleteClick}>
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

const ButtonStyleClear = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 24px;
`;

const DropdownMenuItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: #f0f0f0;
  }
  text-align: center;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  z-index: 1000;
  overflow: hidden;
`;
