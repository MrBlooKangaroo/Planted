import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const FETCH_NOOKS = gql`
  query fetchNooks {
    nooks {
      id
      name
      wishes {
        plantType {
          id
          name
          photoUrlVerticalCrop
        }
      }
    }
  }
`;

export function fetchNooks() {
  return useQuery(FETCH_NOOKS);
}
