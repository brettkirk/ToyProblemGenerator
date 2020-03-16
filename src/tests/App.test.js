import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders settings button', () => {
  const { getByTestId } = render(<App />);
  const settingsButtonId = getByTestId('settings-button');
  expect(settingsButtonId).toBeInTheDocument();
});
