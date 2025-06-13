import { useEffect, useState } from 'react';

import IconKakaoShare from '@assets/icons/IconKakaoShare.svg?react';
import { useGetUser } from '@context/UserContext';

function KakaoShareButton() {
  const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY;
  const KAKAO_APP_URL = import.meta.env.VITE_KAKAO_APP_URL;
  const KAKAO_APP_INTEGRITY = import.meta.env.VITE_KAKAO_APP_INTEGRITY;
  const { user } = useGetUser();
  const { name, subjectId } = user;
  const [Kakao, setKakao] = useState(null);

  useEffect(() => {
    if (window.Kakao) {
      setKakao(window.Kakao);
      return;
    }

    const script = document.createElement('script');
    script.src = KAKAO_APP_URL;
    script.integrity = KAKAO_APP_INTEGRITY;
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      if (window.Kakao) {
        setKakao(window.Kakao);
      }
    };

    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!Kakao) return;
    Kakao.cleanup();
    Kakao.init(KAKAO_APP_KEY);
  }, [Kakao]);

  const handleKakaoShare = () => {
    Kakao.Share.sendCustom({
      templateId: 121287, // 카카오톡 개발센터에서 설정한 template 설정
      templateArgs: {
        userName: name,
        id: subjectId,
      },
    });
  };

  return (
    <button onClick={handleKakaoShare}>
      <IconKakaoShare
        width='40'
        height='40'
        aria-label='카카오톡 공유 아이콘'
      />
    </button>
  );
}

export default KakaoShareButton;
