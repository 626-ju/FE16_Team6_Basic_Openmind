import axios from 'axios';
import styled from 'styled-components';
import UserImg from '@assets/images/ProfileImg.svg';
import { useState } from 'react';
import { useModal } from '@context/ModalContext';
import { ButtonBrown40 } from '@components/Button';

function Modal() {
  const [text, setText] = useState(``);
  const { isOpen, closeModal } = useModal();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https:/openmind-api.vercel.app/16-6/subjects/11028/questions/`,
        {
          content: text,
        },
      );
      console.log('등록 성공:', response.data);
      closeModal();
    } catch (err) {
      console.error('등록 실패:', err.response?.data || err);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  if (!isOpen) return null;
  return (
    <ModalBackground onClick={closeModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <h2>질문을 작성하세요</h2>
        <ButtonClose onClick={closeModal}></ButtonClose>
        <UserName>
          To.
          <img src={UserImg} alt='회원 이미지' width={25} height={25} />
          <span>아초는 고양이</span>
        </UserName>
        <StyleTextarea
          id='question'
          value={text}
          placeholder='질문을 입력해주세요'
          onChange={handleChange}
        ></StyleTextarea>
        <ModalSendButton onClick={handleSubmit} disabled={text.trim() === ''}>
          질문 보내기
        </ModalSendButton>
      </ModalWrapper>
    </ModalBackground>
  );
}
const ModalWrapper = styled.div`
  padding: 24px;
  position: fixed;
  top: 50px;
  left: 50%;
  width: 90%;
  height: auto;
  transform: translateX(-50%);
  border-radius: 24px;
  background: ${({ theme }) => theme.color.gray10};
  box-shadow: ${({ theme }) => theme.boxShadow.shadow3};
  @media (min-width: 768px) {
    box-shadow: ${({ theme }) => theme.boxShadow.shadow2};
  }
  @media (min-width: 1024px) {
    box-shadow: ${({ theme }) => theme.boxShadow.shadow3};
  }

  h2 {
    font-size: 24px;
    margin-bottom: 40px;
    padding-left: 36px;
    background-image: url(src/assets/images/icons/ModalTitleIcon.png);
    background-size: 28px;
    background-repeat: no-repeat;
    background-position: left;
  }

  @media (min-width: 768px) {
    top: 172px;
    width: 612px;
    height: 454px;
    padding: 40px;
  }
`;

const ButtonClose = styled.button`
  position: fixed;
  right: 24px;
  top: 24px;
  width: 28px;
  height: 28px;
  background: url(src/assets/images/icons/ModalClose.png);
  background-size: 100%;

  @media (min-width: 768px) {
    right: 40px;
    top: 40px;
  }
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  img {
    display: block;
    margin: 0 4px;
  }
`;

const StyleTextarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.color.gray20};

  @media (min-width: 768px) {
    width: 532px;
    height: 180px;
  }
`;

const ModalSendButton = styled(ButtonBrown40)`
  display: block;
  width: 100%;
  margin-top: 8px;
  text-align: center;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.56);
`;
export default Modal;
