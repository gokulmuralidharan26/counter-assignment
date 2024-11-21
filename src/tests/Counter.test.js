/*

// import necessary react testing library helpers here
// import the Counter component here

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
});




import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterHeading = screen.getByText(/Counter/i);
  expect(counterHeading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('-1');
});

*/




import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

// Render the Counter component before each test
beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  // Verify that the heading is present
  const headingElement = screen.getByText(/Counter/i);
  expect(headingElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Select the count element and check its initial value
  const counterValue = screen.getByTestId('count');
  expect(counterValue.textContent).toEqual('0');
});

test('clicking + increments the count', () => {
  // Find the increment button and the counter display
  const plusButton = screen.getByText('+');
  const displayedCount = screen.getByTestId('count');

  // Simulate a click event on the "+" button and check the new value
  fireEvent.click(plusButton);
  expect(displayedCount.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Find the decrement button and the counter display
  const minusButton = screen.getByText('-');
  const displayedCount = screen.getByTestId('count');

  // Simulate a click event on the "-" button and verify the count
  fireEvent.click(minusButton);
  expect(displayedCount.textContent).toBe('-1');
});

