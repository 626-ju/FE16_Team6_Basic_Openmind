import styled from 'styled-components';

const viewTxt = window.innerWidth < 768 ? '질문 작성' : '질문 작성하기';

const FloatingButton = () => {
  return <StyledFloatingButton>{viewTxt}</StyledFloatingButton>;
};

export default FloatingButton;

const StyledFloatingButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 15px 24px;
  color: ${({ theme }) => theme.color.gray10};
  font-size: ${({ theme }) => theme.fontSize.fz20};
  background: ${({ theme }) => theme.color.brown40};
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow2};

  @media (min-width: 768px) {
    width: 208px;
  }
`;
