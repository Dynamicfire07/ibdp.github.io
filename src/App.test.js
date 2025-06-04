import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Timer link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Timer/i });
  expect(linkElement).toBeInTheDocument();
});
