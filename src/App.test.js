// App.test.js
global.fetchAPI = (date) => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders the navigation and homepage specials', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/this week's specials/i);
  expect(linkElement).toBeInTheDocument();
});
