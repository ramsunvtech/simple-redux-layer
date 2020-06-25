import React from 'react';
import { render } from '@testing-library/react';

// `Test` Component.
import Header from './Header';

// `Mock`
jest.mock('react-router-dom', () => {
  return {
    Link: () => null,
  };
});

describe('Header', () => {
  it('should have title', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('title');
    expect(title).toHaveTextContent('Simple Redux Layer');
  });
});
