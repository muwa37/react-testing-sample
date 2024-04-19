import counterReducer, { decrement, increment } from '../counterReducer';

describe('getCounterValue reducer', () => {
  test('should increment', () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  test('should decrement', () => {
    expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: -1 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
  });
});
