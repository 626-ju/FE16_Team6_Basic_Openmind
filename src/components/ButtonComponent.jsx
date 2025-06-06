import styled from 'styled-components';

export const ButtonBrown10 = styled.button`
  border-radius: 8px;
  border: 1px var(--brown-40) solid;
  padding: 12px 24px;
  color: var(--brown-40);
  background-color: var(--brown-10);
  font-size: var(--font-size-16);
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    border-color: transparent;
    outline: 2px solid var(--brown-40);
  }
  &:active {
    border-color: transparent;
    outline: 2px solid var(--brown-40);
    background-color: var(--brown-20);
  }
  &:disabled {
    border-color: var(--brown-30);
    background-color: var(--brown-10);
    color: var(--brown-30);
    outline: none;
    cursor: default;
  }
  border-radius: ${(props) => (props.round ? '200px' : '8px')};
  box-shadow: ${(props) => (props.shadow ? `var(--shadow-3)` : 'none')};
`;
export const ButtonBrown40 = styled(ButtonBrown10)`
  color: var(--gray-10);
  background-color: var(--brown-40);
  &:hover {
    border-color: transparent;
    outline: 2px solid var(--brown-50);
  }
  &:active {
    border-color: transparent;
    outline: 2px solid var(--brown-50);
    background-color: var(--brown-50);
  }
  /* disable가 prop으로 있을 경우 */
  &:disabled {
    border-color: var(--brown-30);
    background-color: var(--brown-30);
    outline: none;
    color: var(--gray-10);
  }
`;
export function ArrowRightIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 
11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 
4.25 12Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L19.5303 
11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L12.5303 19.5303C12.2374 
19.8232 11.7626 19.8232 11.4697 19.5303C11.1768 19.2374 11.1768 18.7626 11.4697 
18.4697L17.9393 12L11.4697 5.53033C11.1768 5.23744 11.1768 4.76256 11.4697 
4.46967Z'
        fill='currentColor'
      />
    </svg>
  );
}
