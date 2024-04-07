import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('sample testid with event', () => {
    render(<App />);
    const btnByTestId = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btnByTestId);
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btnByTestId);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('sample input event', () => {
    render(<App />);
    const inputEl = screen.getByPlaceholderText(/type in me.../i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    userEvent.type(inputEl, 'test');
    expect(screen.queryByTestId('value-elem')).toContainHTML('test');
  });
});
