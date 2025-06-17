import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the Choose date label', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const labelElement = screen.getByText(/choose date/i); // case-insensitive
  expect(labelElement).toBeInTheDocument();
});
