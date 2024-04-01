import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

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
        click me
      </button>
      <input type='text' placeholder='type in me...' />
      {data && <div style={{ color: 'red' }}>data</div>}
    </div>
  );
}

export default App;
