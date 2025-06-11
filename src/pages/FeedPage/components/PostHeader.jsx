import PostHeaderBg from '@assets/images/PostHeaderBg.jpg';
import Logo from '@components/Logo';
import { useGetUser } from '@context/UserContext';
import styled, { keyframes } from 'styled-components';

import FacebookShareButton from './FacebookShareButton';
import KakaoShareButton from './KakaoShareButton';
import LinkCopyButton from './LinkCopyButton';

function PostHeader() {
  const { user } = useGetUser();
  const { imageSource, name } = user;

  const image = new Image();
  image.src = imageSource;

  return (
    <PostHeaderWrapper>
      <PostTitle>
        <Logo className='logo' />
      </PostTitle>
      <UserInfo>
        <UserThumbnail>
          {image.complete ? (
            <img src={imageSource} alt={`${name}의 프로필 이미지`} />
          ) : (
            <ImgSkeleton />
          )}
        </UserThumbnail>
        <UserName>{name}</UserName>
      </UserInfo>
      <PostUtils>
        <li>
          <LinkCopyButton />
        </li>
        <li>
          <KakaoShareButton />
        </li>
        <li>
          <FacebookShareButton />
        </li>
      </PostUtils>
    </PostHeaderWrapper>
  );
}

export default PostHeader;

const PostHeaderWrapper = styled.div``;

const PostTitle = styled.h1`
  height: 177px;
  padding-top: 40px;
  background: #fff url(${PostHeaderBg}) top center no-repeat;
  background-size: auto 100%;

  @media (min-width: 768px) {
    height: 234px;
    padding-top: 50px;
  }
  .logo {
    display: block;
    width: 124px;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 170px;
    }
  }
`;

const UserThumbnail = styled.div`
  width: 104px;
  height: 104px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 136px;
    height: 136px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  margin-top: -76px;

  @media (min-width: 768px) {
    margin-top: -105px;
  }
`;

const UserName = styled.h2`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.fontSize.fz24};
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray60};
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight.lh30};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.fz32};
    line-height: ${({ theme }) => theme.lineHeight.lh40};
  }
`;

const PostUtils = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  gap: 12px;

  a,
  button,
  svg {
    display: block;
  }
`;

const SkeletonAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ImgSkeleton = styled.div`
  width: 100%;
  height: 100%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.color.gray20} 25%, ${theme.color.gray30} 50%, ${theme.color.gray20} 75%)`};
  background-size: 200% 100%;
  animation: ${SkeletonAnimation} 1.5s infinite linear;
`;
