import { useRef, useState } from 'react';

import ArrowDown from '@assets/icons/ArrowDown.svg?react';
import ArrowUp from '@assets/icons/ArrowUp.svg?react';
import useClickOutside from '@hooks/useClickOutside';
import styled from 'styled-components';

const sortObj = {
  time: '최신순',
  name: '이름순',
};

function SortSelector() {
  // 나중에 쿼리스트링으로 편입
  const [order, setOrder] = useState('time');
  const selectorRef = useRef();

  const [isOpen, handleToggle] = useClickOutside(selectorRef);

  function handleClick(key) {
    setOrder(key);
  }

  return (
    <Selector
      ref={selectorRef}
      onClick={handleToggle}
      className={isOpen ? 'isActive' : null}
      aria-label='정렬 순서 선택'
    >
      <button className={`sortBtn ${isOpen ? 'isActive' : null}`}>
        {sortObj[order]}
        <ArrowUp
          className={!isOpen ? 'show' : null}
          aria-label='정렬 드롭다운 올리기'
        />
        <ArrowDown
          className={isOpen ? 'show' : null}
          aria-label='정렬 드롭다운 내리기'
        />
      </button>
      {isOpen && (
        <SortUl>
          {Object.keys(sortObj).map((key) => {
            return (
              <li
                onClick={() => handleClick(key)}
                key={key}
                className={key === order ? 'selected' : null}
              >
                {sortObj[key]}
              </li>
            );
          })}
        </SortUl>
      )}
    </Selector>
  );
}

export default SortSelector;

// 커스텀 셀렉터
const Selector = styled.div`
  position: relative;

  .sortBtn {
    padding: 8px 12px;
    border-radius: 8px;
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.fz14};
    line-height: ${({ theme }) => theme.lineHeight.lh18};
    gap: 4px;
    align-items: center;
    font-weight: 500;

    border: 1px solid ${({ theme }) => theme.color.gray40};
    background-color: ${({ theme }) => theme.color.gray10};
    color: ${({ theme }) => theme.color.gray40};

    &.isActive {
      border-color: ${({ theme }) => theme.color.gray60};
      color: ${({ theme }) => theme.color.gray60};
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }

  .show {
    display: none;
  }
`;

const SortUl = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 8px;
  box-shadow: var(--shadow-1);
  width: 100%;
  margin-top: 4px;

  & li {
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.fz14};
    line-height: ${({ theme }) => theme.lineHeight.lh18};
    padding: 6px 16px;
    color: ${({ theme }) => theme.color.gray50};
    border: 1px solid ${({ theme }) => theme.color.gray30};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.gray10};

    &:first-child {
      border-bottom: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:nth-child(2) {
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }

    &.selected {
      color: ${({ theme }) => theme.color.blue50};
    }
  }
`;
