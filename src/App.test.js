import { render, screen } from '@testing-library/react';
import App from './App';

test('sample', () => {
  render(<App />);

  const helloWorldEl = screen.getByText(/hello world/i);
  const btnEl = screen.getByRole('button');
  const inputEl = screen.getByPlaceholderText(/type in me.../i);

  expect(helloWorldEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(inputEl).toMatchSnapshot();
});
