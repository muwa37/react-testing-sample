import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('router test', () => {
  test('error page', () => {
    render(
      <MemoryRouter initialEntries={['/not-existing-route']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
