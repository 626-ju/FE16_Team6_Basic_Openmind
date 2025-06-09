import ToastContainer from '@components/Toast';
import FeedPage from '@pages/FeedPage/FeedPage';
import HomePage from '@pages/HomePage/HomePage';
import ModalPage from '@components/ModalPage';
import UserList from '@pages/list/UserList';
import AnswerPage from '@pages/AnswerPage/AnswerPage.jsx';

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  return (
    <>
      <Routes>
        <Route path='/post/:id' element={<FeedPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/modal' element={<ModalPage />} />
        <Route path='/list' element={<UserList />} />
        <Route path='/answer/:id' element={<AnswerPage />} />
      </Routes>
      <ModalPage />
      <ToastContainer />
    </>
  );
}

export default App;
