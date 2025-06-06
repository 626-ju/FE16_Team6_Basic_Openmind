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
    :root{
    /* 색상 변수 */
    --gray-10: #FFFFFF;
    --gray-20: #F9F9F9;
    --gray-30: #CFCFCF;  
    --gray-40: #818181;  
    --gray-50: #515151; 
    --gray-60: #000000;  
    
    --brown-10: #F5F1EE;  
    --brown-20: #E4D5C9;  
    --brown-30: #C7BBB5;  
    --brown-40: #542F1A;  
    --brown-50: #341909;  
    
    --blue-50: #1877F2;  
    --yellow-50: #FEE500;  
    --red-50: #B93333;  
    }
`;
