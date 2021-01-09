import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app container', () => {
  render(<App />);
  const linkElement = screen.getByText('Enter your credit card information');
  expect(linkElement).toBeInTheDocument();
});
