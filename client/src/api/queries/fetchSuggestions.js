import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const FETCH_SUGGESTIONS = gql`
  query fetchSuggestions($luxInput: LuxLevel) {
    suggestedPlantTypes(luxInput: $luxInput) {
      name
      photoUrlVerticalCrop
    }
  }
`;

export const fetchSuggestions = luxLevel =>
  useQuery(FETCH_SUGGESTIONS, {
    variables: { luxInput: luxLevel },
  });
