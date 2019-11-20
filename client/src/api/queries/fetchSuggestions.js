import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const FETCH_SUGGESTIONS = gql`
  query fetchSuggestions($luxLevel: LuxLevel) {
    plantTypes(luxLevel: $luxLevel) {
      id
      name
      photoUrlVerticalCrop
    }
  }
`;

export const fetchSuggestions = luxLevel =>
  useQuery(FETCH_SUGGESTIONS, {
    variables: { luxLevel: luxLevel },
  });
