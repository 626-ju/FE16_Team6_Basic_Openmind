import { useEffect, useRef, useState } from 'react';

import { useToastContext } from '@context/ToastContext';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

const TOAST_DELAY = 5000; // ms
const TOAST_DURATION = 500; // ms
const TOAST_HEIGHT = 40;
const TOAST_GAP = 10;

// Toast 컴포넌트
function Toast({ message, id, delay = TOAST_DELAY, order }) {
  const { deleteToast } = useToastContext();
  const toastRef = useRef();

  useEffect(() => {
    const TIMER = setTimeout(() => {
      deleteToast(id); // 해당 하는 id의 토스트를 삭제
    }, delay + TOAST_DURATION);

    return () => {
      clearTimeout(TIMER);
    };
  }, []);

  return (
    <StyledToast $delay={delay} $order={order} ref={toastRef}>
      {message}
    </StyledToast>
  );
}

// ToastContainer 컴포넌트
export default function ToastContainer() {
  const { toasts } = useToastContext();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.setAttribute('id', 'toast-container');
      document.body.appendChild(toastContainer);
    }
    setContainer(toastContainer);
  }, []);

  if (!container) return;

  return createPortal(
    <StyledToastContainer>
      {toasts.map((toast, id) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          delay={toast.delay}
          order={toasts.length - id}
        />
      ))}
    </StyledToastContainer>,
    container,
  );
}

const toastShow = keyframes`
    0% {
      transform: translateY(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
`;

const toastHide = keyframes`
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-20px);
      opacity: 0;
    }
`;

const StyledToastContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 60px;
  pointer-events: none;
  z-index: 9999;
`;

const StyledToast = styled.div`
  position: absolute;
  bottom: ${({ $order }) => $order * (TOAST_HEIGHT + TOAST_GAP)}px;
  padding: 12px 20px;
  font-size: ${({ theme }) => theme.fontSize.fz14};
  font-weight: 500;
  color: #fff;
  background-color: ${({ theme }) => theme.color.gray60};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow2};
  animation:
    ${toastShow} ${TOAST_DURATION}ms ease forwards,
    ${toastHide} ${TOAST_DURATION}ms ease forwards
      ${({ $delay }) => $delay || TOAST_DELAY}ms;
  transition: all ${TOAST_DURATION * 0.7}ms ease;
`;
