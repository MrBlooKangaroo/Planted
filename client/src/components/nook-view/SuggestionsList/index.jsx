import React from 'react';
import { fetchSuggestions } from '../../../api/queries/fetchSuggestions';
import { SuggestionsCarousel } from '../SuggestionsCarousel';

export const SuggestionsList = ({ luxLevel }) => {
  console.log(luxLevel);
  const { loading, error, data } = fetchSuggestions(luxLevel);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <SuggestionsCarousel plants={data.plantTypes} />;
};
