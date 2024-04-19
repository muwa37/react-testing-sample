import { getCounterValue } from '.';

describe('getCounterValue', () => {
  test('should work with empty state', () => {
    expect(getCounterValue({})).toBe(0);
  });

  test('should work with filled state', () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
