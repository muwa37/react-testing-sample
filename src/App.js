import { Link, Route, Routes } from 'react-router-dom';
import Users from './pages/Users/Users';

import About from './pages/About';
import Error from './pages/Error';
import Main from './pages/Main';
import User from './pages/User';

function App() {
  return (
    <div>
      <Link to='/' data-testid='main-link'>
        main
      </Link>
      <Link to='/about' data-testid='about-link'>
        about
      </Link>
      <Link to='/users' data-testid='users-link'>
        about
      </Link>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
