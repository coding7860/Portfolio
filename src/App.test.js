import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/building fast, elegant, and production-ready/i);
  expect(heading).toBeInTheDocument();
});
