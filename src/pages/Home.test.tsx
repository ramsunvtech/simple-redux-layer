import React from 'react';
import { render, waitForElement } from "@testing-library/react";
import { Home } from './Home';

const loadParts = jest.fn();
const parts: any = [{ name: "first part", id: 1592928182403, status: true }];

describe("home", () => {
  it('should take a snapshot', () => {
    const HomeComponent = <Home loadParts={loadParts} parts={parts} />;
    const { asFragment } = render(HomeComponent)
    expect(asFragment(HomeComponent)).toMatchSnapshot()
  });

  it('should take a snapshot', async () => {
    const HomeComponent = <Home loadParts={loadParts} parts={parts} />;
    const { getByTestId } = render(HomeComponent)
    const elem = getByTestId('name');
    expect(elem).toHaveTextContent('first part');
  });
});