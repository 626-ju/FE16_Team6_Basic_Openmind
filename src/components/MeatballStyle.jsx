import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative; /* 자식인 DropdownMenu의 위치 기준점이 됩니다. */
  display: inline-block; /* 버튼 옆에 자연스럽게 배치될 수 있도록 */
  height: 24px;
`;

// 3. 드롭다운 메뉴 스타일 (absolute로 버튼 아래에 위치)
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; /* 부모(DropdownContainer)의 높이 바로 아래에 위치 */
  right: 0; /* (선택 사항) 오른쪽 정렬, 필요시 left: 0; 또는 가운데 정렬 */
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 120px; /* 메뉴의 최소 너비 */
  z-index: 1000; /* 다른 요소 위에 보이도록 */
  overflow: hidden; /* 자식 요소의 border-radius 적용을 위해 */
`;

// 4. 드롭다운 메뉴 아이템 스타일

export const DropdownMenuItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 */
  &:hover {
    background-color: #f0f0f0;
  }
  text-align: center;
`;

export const MeatballButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f0f0f0;
    border-radius: 50%; /* 원형 호버 효과 */
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
`;
