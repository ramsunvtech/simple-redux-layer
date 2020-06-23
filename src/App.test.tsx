import React from 'react';
import {
  render,
  cleanup,
} from '@testing-library/react';

// `Test` Component.
import App from './App';

jest.mock('./pages/Home', () => {
  return null;
});

describe('App', () => {
  afterEach(cleanup);

  it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
