import ThumbsUp from '@assets/icons/ThumbsUp.svg?react';
import styled from 'styled-components';

import { theme } from '../styles/theme';

function LikeButton({ onClick, isPressed, disabled, likeCount }) {
  return (
    <LikeButtonWrapper
      isPressed={isPressed}
      onClick={onClick}
      disabled={disabled}
    >
      <ThumbsUp
        fill={isPressed ? theme.color.blue50 : theme.color.gray40}
        height='16'
      />
      <span>좋아요</span>
      {likeCount && <LikeCount isPressed={isPressed}>{likeCount}</LikeCount>}
    </LikeButtonWrapper>
  );
}

export default LikeButton;

const LikeButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isPressed',
})`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) =>
    props.isPressed ? props.theme.color.blue50 : props.theme.color.gray40};
`;

const LikeCount = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isPressed',
})`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) =>
    props.isPressed ? props.theme.color.blue50 : props.theme.color.gray40};
`;
