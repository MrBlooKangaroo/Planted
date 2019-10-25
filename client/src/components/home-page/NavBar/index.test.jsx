import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { HomePageRoot, text } from './index';

afterEach(cleanup);

describe('HomePageRoot', () => {
  let getByText;

  beforeEach(() => {
    ({ getByText } = render(<HomePageRoot />));
  });

  it('should render headline text', () => {
    getByText(text.headline);
  });

  it('should render greeting text', () => {
    getByText(text.greeting);
  });
});
