import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const FETCH_NOOK = gql`
  query fetchNook($id: ID!) {
    nook(id: $id) {
      name
      luxLevel
      plants {
        plantType {
          name
          photoUrlVerticalCrop
        }
      }
      wishes {
        plantType {
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
