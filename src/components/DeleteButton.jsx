import styled from 'styled-components';

import { ButtonBrown40 } from './ButtonComponent.jsx';

function DeleteButton() {
  const Button = styled(ButtonBrown40)`
    width: 72px;
    height: 25px;
    font-size: 10px;
    border-radius: 20px;
    padding: 1px;
    justify-content: center;
    align-items: right;
    margin-left: auto;
    margin-right: 24px;
    margin-top: 145px;
    box-shadow: var(--shadow-2);
    font-weight: normal;

    @media (min-width: 768px) {
      width: 100px;
      height: 35px;
      font-size: 15px;
      margin-right: 32px;
    }
  `;
  return (
    <>
      <Button $shadow>삭제하기</Button>
    </>
  );
}

export default DeleteButton;
