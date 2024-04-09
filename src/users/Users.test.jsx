import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Users from './Users';

jest.mock('axios');

describe('sample component with async loading', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },

        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    };
  });
  test('component should load data', async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
