import React from 'react';
import { render } from '@testing-library/react';
import { except } from '@testing-library/jest-dom/extend-expect'
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
