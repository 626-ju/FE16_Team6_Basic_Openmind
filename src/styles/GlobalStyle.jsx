import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    /*Pretendard폰트*/
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
        format("woff");
    font-weight: 400;
    font-style: normal;
  }

  /* CSS reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background: ${({ theme }) => theme.color.gray20};
  }

  ul,li{
    list-style:none
  }

  img {
    display: block;
    max-width: 100%;
  }

  svg{
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    border-radius: 0;
    cursor: pointer;
  }
`;
