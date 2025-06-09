import ThumbsDown from '@assets/icons/ThumbsDown.svg?react';
import styled from 'styled-components';

import { theme } from '../styles/theme';

function DislikeButton({ onClick, isPressed, disabled }) {
  return (
    <DislikeButtonWrapper
      isPressed={isPressed}
      onClick={onClick}
      disabled={disabled}
    >
      <ThumbsDown
        fill={isPressed ? theme.color.gray60 : theme.color.gray40}
        height='16'
      />
      싫어요
    </DislikeButtonWrapper>
  );
}

export default DislikeButton;

const DislikeButtonWrapper = styled.button.withConfig({
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
    props.isPressed ? props.theme.color.gray60 : props.theme.color.gray40};
`;
