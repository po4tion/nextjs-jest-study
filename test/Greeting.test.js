import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from '../pages/index';

describe('Greeting component', () => {
  test('renders Hello world as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldEl = screen.getByText('Hello World!');
    expect(helloWorldEl).toBeInTheDocument();
  });

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting />);

    const paragraphEl = screen.getByText('good to see you', { exact: false });
    expect(paragraphEl).toBeInTheDocument();
  });

  test('renders Changed!', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnEl = screen.getByRole('button');
    userEvent.click(btnEl);

    // Assert
    const changedEl = screen.getByText('Changed!');
    expect(changedEl).toBeInTheDocument();
  });
});
