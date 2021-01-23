import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders name box button', () => {
  const { getByText } = render(<App />);
  const fill_squares_button = getByText(/Fill Squares!/i);
  expect(fill_squares_button).toBeInTheDocument();
});
