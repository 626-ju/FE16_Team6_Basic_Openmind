import styled from 'styled-components';

import { ButtonBrown40 } from '../../../components/Button.jsx';

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
    margin-top: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    font-weight: normal;

    @media (min-width: 768px) {
      width: 100px;
      height: 35px;
      font-size: 15px;
      margin: 0px;
    }
  `;
  return (
    <>
      <Button>삭제하기</Button>
    </>
  );
}

export default DeleteButton;
