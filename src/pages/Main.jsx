import React from 'react';
import Counter from '../components/Counter';

function Main() {
  return (
    <div data-testid='main-page'>
      Main page
      <Counter />
    </div>
  );
}

export default Main;
