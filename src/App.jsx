import ToastContainer from '@components/Toast';
import AnswerCluster from '@pages/AnswerPage/AnswerCluster';
import FeedPage from '@pages/FeedPage/FeedPage';
import UserList from '@pages/list/UserList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/post/:id' element={<FeedPage />} />
        <Route path='/list' element={<UserList />} />
        <Route path='/post/answer' element={<AnswerCluster />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
