import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import Error from '../pages/Error';
import Main from '../pages/Main';
import User from '../pages/User';
import Users from '../pages/Users';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/about' element={<About />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<User />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  );
}

export default AppRouter;
