import { render, screen } from '@testing-library/react';
import App from './App';

test('sample', () => {
  render(<App />);
  const helloWorldEl = screen.getByText('');
  expect(helloWorldEl).toBeInTheDocument();
});
