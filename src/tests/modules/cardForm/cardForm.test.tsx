import { render, screen } from '@testing-library/react';
import CardForm from '../../../modules/cardForm/cardForm';

test('renders CardForm', () => {
  render(<CardForm />);
  const linkElement = screen.getByText('Submit');
  expect(linkElement).toBeInTheDocument();
});
