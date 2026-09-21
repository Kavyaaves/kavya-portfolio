import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the intro heading', () => {
  render(<App />);
  const heading = screen.getByText(/Kavya Murali/i);
  expect(heading).toBeInTheDocument();
});
