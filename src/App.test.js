import { render, screen } from '@testing-library/react';
import App from './App';

describe('test app', () => {
  test('sample', () => {
    render(<App />);

    const helloWorldEl = screen.getByText(/hello world/i);
    const btnEl = screen.getByRole('button');
    const inputEl = screen.getByPlaceholderText(/type in me.../i);

    expect(helloWorldEl).toBeInTheDocument();
    expect(btnEl).toBeInTheDocument();
    expect(inputEl).toMatchSnapshot();
  });

  test('sample async and styles', async () => {
    render(<App />);
    const asyncDataEl = await screen.findByText(/data/i);
    expect(asyncDataEl).toBeInTheDocument();
    expect(asyncDataEl).toHaveStyle({ color: 'red' });
  });
});
