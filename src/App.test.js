import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const spinnerElement = screen.getByTestId('spinner');
  expect(spinnerElement).toBeInTheDocument();
});
