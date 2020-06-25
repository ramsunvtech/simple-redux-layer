import React from 'react';
import { render } from '@testing-library/react';

// `Test` Component.
import PartItem from './PartItem';

describe('PartItem', () => {
  it('should have part name', () => {
    const itemProps = {
      name: 'first part',
      id: 1592928182403,
      status: true,
    };
    const { getByTestId, asFragment } = render(<PartItem {...itemProps} />);
    const partName = getByTestId('name');
    expect(partName).toHaveTextContent('first part');
    expect(asFragment(<PartItem {...itemProps}/>)).toMatchSnapshot();
  });
});
