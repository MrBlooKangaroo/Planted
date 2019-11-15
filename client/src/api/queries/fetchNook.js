import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const FETCH_NOOK = gql`
  query fetchNook($id: ID!) {
    nook(id: $id) {
      name
      luxLevel
      plants {
        plantType {
          id
          name
          photoUrlVerticalCrop
        }
      }
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

export function fetchNook(nookId) {
  return useQuery(FETCH_NOOK, {
    variables: { id: nookId },
  });
}
