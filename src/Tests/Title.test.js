import { render, screen } from '@testing-library/react';
import Title from '../Components/Title';

test('see if title includes', () => {
  render(<Title />);
  const testElement = screen.getByText(/Wine Recommendations/i);
  expect(testElement).toBeInTheDocument();
})