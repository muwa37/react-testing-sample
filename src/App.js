import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const onToggle = () => setToggle(prev => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      {toggle && <div data-testid='toggle-elem'>toggle</div>}
      <h2>hello world</h2>
      <button data-testid='toggle-btn' onClick={onToggle}>
        click on me to toggle
      </button>
      <h3 data-testid={'value-elem'}>{value}</h3>
      <input
        type='text'
        placeholder='type in me...'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {data && <div style={{ color: 'red' }}>data</div>}

      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
