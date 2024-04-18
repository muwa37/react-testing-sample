import { Link, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Link to='/' data-testid='main-link'>
        main
      </Link>
      <Link to='/about' data-testid='about-link'>
        about
      </Link>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
