import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/reducers/counterReducer';
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue';

function Counter() {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{value} </h1>
      <div>
        <button data-testid='increment-btn' onClick={incrementHandler}>
          inc
        </button>
        <button data-testid='decrement-btn' onClick={decrementHandler}>
          dec
        </button>
      </div>
    </div>
  );
}

export default Counter;
