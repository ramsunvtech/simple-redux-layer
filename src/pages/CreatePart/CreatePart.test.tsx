import React from 'react';
import {
  render,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// `Test` Component.
import { CreatePart } from './CreatePart';

jest.mock('../../lib/tinyReactRedux', () => {
  return {
    tinyConnect: (a, b) => (Component:any) => {
      return <Component createPart={() => {}} />
    },
  };
});

describe('CreatePart', () => {
  afterEach(cleanup);

  it('should take a snapshot', () => {
    const { asFragment } = render(<CreatePart />);
    expect(asFragment(<CreatePart />)).toMatchSnapshot();
  });
});
