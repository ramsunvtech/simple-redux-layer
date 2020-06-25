import React from 'react';
import {
  render,
  cleanup,
} from '@testing-library/react';

// `Test` Component.
import App from './App';

// Mock the Home Page.
jest.mock('./pages/Home');

describe('App', () => {
  afterEach(cleanup);

  it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
