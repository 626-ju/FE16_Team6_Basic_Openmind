/**************************************/
/* LET'S GET THIS SHOW ON THE ROAD !  */
/**************************************/

//hooks
import { useState, useEffect } from 'react';
//axios
import axios from 'axios';
import AnswerCabinet from './AnswerCabinet.jsx';
//Imgs
import facebookIcon from '../../assets/images/Facebook-Logo.png';
import kakaoIcon from '../../assets/images/Kakao-Logo.png';
import linkIcon from '../../assets/images/Link-logo.png';
import Logo from '../../assets/images/openmind.png';
import defaultSampleProfileIMG from '../../assets/images/Photo_Sample.png';
import {
  Main,
  LogoStyle,
  LogoBackground,
  Profile,
  ProfileImage,
  ProfilePosition,
  NickName,
  SnsList,
} from '../../components/AnswerClusterStyle.jsx';
//components
import DeleteButton from '../../components/DeleteButton.jsx';
import Sns from '../../components/Sns.jsx';

function AnswerCluster() {
  const [datas, setDatas] = useState(null);
  const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(true);
  const [datas2, setDatas2] = useState(null);
  const [error2, setError2] = useState(null);
  //const [loading2, setLoading2] = useState(true);

  const id = 10947; // ** 임의 id 값 이거 성주님께서 받아오는 걸로 해야함. **

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://openmind-api.vercel.app/16-6/subjects/${id}/`,
        );
        setDatas(response.data); // 응답 데이터
      } catch (err) {
        setError(err);
        console.log(error);
      }
    };
    fetchData(); // 함수 호출
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get(
          `https://openmind-api.vercel.app/16-6/subjects/${id}/questions/`,
        );
        setDatas2(response.data); // 응답 데이터
      } catch (err) {
        setError2(err);
        console.log(error2);
      }
    };
    fetchData2(); // 함수 호출
  }, []);

  if (!datas || !datas2) {
    //로딩 처리
    return <div>데이터를 받아오는중입니다. . .</div>;
  }

  console.log(datas.questionCount); //갯수 잘 세어지나 ?

  const nickname = datas.name;
  const questions = datas2?.results || [];
  console.log(questions); // 실질 콘텐츠가 담긴 데이터 출력 확인

  let profileIMG = datas.imageSource;
  if (datas.imageSource == null) {
    let profileIMG = defaultSampleProfileIMG;
  }

  return (
    <Main>
      <LogoBackground>
        <LogoStyle src={Logo} />
      </LogoBackground>
      <ProfilePosition>
        <Profile>
          <ProfileImage src={profileIMG} />
          <NickName>{nickname}</NickName>
          <SnsList>
            <Sns img={linkIcon} />
            <Sns img={kakaoIcon} />
            <Sns img={facebookIcon} />
          </SnsList>
        </Profile>
      </ProfilePosition>
      <div>
        <DeleteButton />

        <AnswerCabinet
          profile={profileIMG}
          nickname={nickname}
          countOfQuestion={datas.questionCount}
          questions={questions}
        />
      </div>
    </Main>
  );
}

export default AnswerCluster;
