import App from './App';

describe('router test', () => {
  test('simple routing', () => {
    render(<App />);

    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');

    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();

    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
