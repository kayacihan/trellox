import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add Column text', () => {
  render(<App />);
  const titleElement = screen.getByText(/Add Column/i);
  expect(titleElement).toBeInTheDocument();
});
