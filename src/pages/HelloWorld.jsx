import React, { useState } from 'react';

function HelloWorld() {
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    value === 'hello' && setIsVisible(prev => !prev);
  };
  const onInputChangeHandler = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        id='search'
        type='text'
        value={value}
        onChange={onInputChangeHandler}
      />
      <button id='toggle' onClick={toggleIsVisible}>
        hello world
      </button>
      {isVisible && <h1 id='hello'>hello world</h1>}
    </div>
  );
}

export default HelloWorld;
