import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';

describe('Counter component', () => {
  test('should first', () => {
    render(renderWithRedux(<Counter />));
    const incrementBtn = screen.getByTestId('increment-btn');
    const valueTitle = screen.getByTestId('value-title');
    expect(valueTitle).toHaveTextContent('0');
    userEvent.click(incrementBtn);
    expect(valueTitle).toHaveTextContent('1');
  });
});
