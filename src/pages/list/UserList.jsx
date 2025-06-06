import styled from 'styled-components';

import ListHeader from './ListHeader';
import Pagination from './Pagination';
import SortSelector from './SortSelector';
import UserProfile from './UserProfileCard';

function UserList() {
  const userList = [1, 2, 3, 4, 5, 6];

  return (
    <UserListContainer>
      <ListHeader />
      <main>
        <div className='flex-container'>
          <h2>누구에게 질문할까요?</h2>
          <SortSelector />
        </div>
        <UserGrid>
          {userList.map((user) => {
            return <UserProfile key={user} user={user} />;
          })}
        </UserGrid>
      </main>
      <Pagination />
    </UserListContainer>
  );
}

export default UserList;

// 브레이크 포인트 1200, 768
const UserListContainer = styled.div`
  .flex-container {
    width: 100%;
    padding: 52px 24px 16px;
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.fz24};
      line-height: 1.2;
      font-weight: 400;
    }
  }

  @media screen and (min-width: 768px) {
    .flex-container {
      flex-direction: column;
      gap: 12px;
      text-align: center;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 30px;

      h2 {
        font-size: ${({ theme }) => theme.fontSize.fz40};
      }
    }

    button {
      padding: 12px 24px;
      font-size: ${({ theme }) => theme.fontSize.fz16};
      line-height: ${({ theme }) => theme.lineHeight.lh22};
    }
  }
`;

const UserGrid = styled.div`
  margin: 0 auto;
  padding: 0 24px 0;
  display: grid;
  justify-content: center;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(155.5px, 1fr));

  @media screen and (min-width: 768px) {
    padding: 0 32px 0;
    margin: 0 auto;
    grid-template-columns: repeat(3, minmax(186px, 220px));
    gap: 20px;
  }

  /* 186(카드너비)*4+20(gap)*3+32(양옆 마진)*2 =  뷰포트 844일때 => 4개 배치시 186보다 작아짐  */
  @media screen and (min-width: 868px) {
    grid-template-columns: repeat(4, minmax(186px, 220px));
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 220px);
  }
`;
