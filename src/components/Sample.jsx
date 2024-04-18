import React, { useEffect, useState } from 'react';

const Sample = () => {
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
    </div>
  );
};

export default Sample;
