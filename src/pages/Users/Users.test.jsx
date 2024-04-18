import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import User from '../User';
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

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('component should load data', async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('redirect to single user page', async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter initialEntries={['/users']}>
        <Routes>
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User />} />
        </Routes>
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId('user-item');
    userEvent.click(users[0]);
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
});
