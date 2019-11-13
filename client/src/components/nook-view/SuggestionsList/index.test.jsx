import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { SuggestionsList } from './index';
import { FETCH_SUGGESTIONS } from 'api/queries/fetchSuggestions';
import 'jest-enzyme';

afterEach(cleanup);

describe('SuggestionsList component', () => {
  let wrapper, props;

  props = {
    luxLevel: 'HIGH',
  };

  const mocks = [
    {
      request: {
        query: FETCH_SUGGESTIONS,
        variables: {
          luxInput: 'HIGH',
        },
      },
      result: () => {
        return {
          data: {
            name: 'aPlantTye',
            photoUrl: 'aPlantTypePhoto',
          },
        };
      },
    },
  ];

  beforeAll(() => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SuggestionsList {...props} />
      </MockedProvider>,
    );
  });

  it('should render a Suggestions List element', () => {
    const element = document.querySelector('SuggestionsList');
    expect(element).toBeDefined();
  });

  it('should render a Suggestions Carousel element', () => {
    const element = document.querySelector('SuggestionsCarousel');
    expect(element).toBeDefined();
  });
});
