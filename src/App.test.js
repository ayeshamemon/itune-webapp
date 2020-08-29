import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders search box', () => {
  const { getByPlaceholderText } = render(<App />);
  const placeholder = getByPlaceholderText(/search/i);
  expect(placeholder).toBeInTheDocument();
});

test('renders no data found text', () => {
  const { getByText } = render(<App />);
  const initialText = getByText(/NO RESULTS FOR CURENT SEARCH KEYWORDS/i);
  expect(initialText).toBeInTheDocument();
});
