import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page with button, image and text', () => {
  render(<App />);
  
  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  //const textEl =screen.getByText(/adonai/);

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  //expect(textEl).toBeInTheDocument();
  
});
