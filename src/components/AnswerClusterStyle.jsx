import styled from 'styled-components';

import OpenmindTwoMans from '../assets/images/openmind-twomans.png';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--gray-20);
  padding-bottom: 100px;
  align-items: center;
`;

export const LogoStyle = styled.img`
  /*OPENMIND LOGO*/
  position: flex;
  margin: 40px auto 88px auto;
  width: 124px;
  height: 49px;

  @media (min-width: 768px) {
    width: 170px;
    height: 67px;
  }
`;

export const LogoBackground = styled.div`
  /*OPENMIND IMAGE*/
  display: flex;
  width: 906px;
  height: 177px;
  align-items: center;
  background-image: url(${OpenmindTwoMans});
  background-size: cover;
  background-position: center center;

  @media (min-width: 768px) {
    width: 1200px;
    height: 234px;
  }
  @media (min-width: 1199px) {
    width: 1200px;
  }
`;

export const Profile = styled.div`
  /*PROFILE IMAGE*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  gap: 12px;
`;

export const ProfileImage = styled.img`
  width: 104px;
  height: 104px;
  justify-content: center;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 136px;
    height: 136px;
  }
`;

export const ProfilePosition = styled.div`
  position: absolute;
  top: 100px;
  left: 50%; /* 가로 중앙 */
  transform: translateX(-50%); /* 이거 해야 가운데로 옴*/

  @media (min-width: 768px) {
    top: 130px;
  }
`;

export const NickName = styled.span`
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SnsList = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  gap: 12px;
  margin: 0px;
`;
