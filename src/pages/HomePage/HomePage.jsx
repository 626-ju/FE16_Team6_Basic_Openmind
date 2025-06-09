import axios from 'axios';
import LogoImg from '@components/Logo';
import styled from 'styled-components';
import ArrowRight from '@assets/images/icons/ArrowRight.svg?react';
import { useState } from 'react';
import { useModal } from '@context/ModalContext';
import { useNavigate } from 'react-router-dom';
import { ButtonBrown40, ButtonBrown10 } from '@components/Button';

function HomePage() {
  const { openModal } = useModal();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://openmind-api.vercel.app/16-6/subjects/',
        {
          name: name,
        },
      );
      const subjectId = response.data.id;

      localStorage.setItem('subjectId', subjectId);
      navigate(`/post/${subjectId}/answer`);
      console.log('보냄', subjectId);
    } catch (err) {
      console.error('등록 실패:', err.response?.data || err);
    }
  };
  return (
    <HomePageWrapper>
      <LogoImg className='logo' />
      <HomePageButton onClick={openModal}>
        질문하러 가기 <ArrowRight width={18} height={18} />
      </HomePageButton>
      <InputWrapper>
        <StyledInput
          placeholder='이름을 입력하세요'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <HomeButton onClick={handleSubmit}>질문 받기</HomeButton>
      </InputWrapper>
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div`
  padding: 80px 0px 120px;
  background-size: 120%;
  background-image: url(src/assets/images/HomePageBg.jpg);
  background-repeat: no-repeat;
  background-position: bottom center;

  img {
    width: 248px;
  }

  @media (min-width: 768px) {
    padding: 130px 0px 150px;
    background-size: 90%;
  }
  @media (min-width: 1024px) {
    padding: 160px 0px 300px;
    background-size: 80%;
  }
  .logo {
    display: block;
    max-width: 248px;
    width: 100%;
    margin: 0 auto 24px;

    @media (min-width: 768px) {
      max-width: 380px;
      width: 100%;
    }
  }
`;

const HomePageButton = styled(ButtonBrown10)`
  position: static;
  right: 50px;
  top: 44px;
  margin: 0 auto;
  padding: 8px 12px;

  @media (min-width: 768px) {
    position: absolute;
  }
`;

const InputWrapper = styled.div`
  width: 305px;
  margin: 24px auto 0px;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.color.gray10};
  border-radius: 16px;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const HomeButton = styled(ButtonBrown40)`
  display: block;
  width: 100%;
  max-width: 257px;

  margin: 0 auto;
  text-align: center;
  padding: 12px 0;

  @media (min-width: 768px) {
    max-width: 336px;
  }
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  max-width: 257px;
  padding: 12px 0 12px 40px;
  font-size: 16px;
  margin: 0 auto 16px;
  border: 1px solid ${({ theme }) => theme.color.gray40};
  border-radius: 8px;
  background-image: url(src/assets/images/icons/Person.png);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: left 16px center;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.gray40};
  }

  @media (min-width: 768px) {
    max-width: 336px;
  }
`;
export default HomePage;
