import React from 'react';
import { render, screen } from '@testing-library/react';
import Widget from '.';

test('renders learn react link', () => {
  render(<Widget />);
  const linkElement = screen.getByText(/Main/i);
  expect(linkElement).toBeInTheDocument();
});
