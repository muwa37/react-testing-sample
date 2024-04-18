import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('router test', () => {
  test('simple routing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');

    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();

    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('error page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');

    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();

    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
