import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_NOOK = gql`
  query findNook($id: ID!) {
    nook(id: $id) {
      name
      luxLevel
      plants {
        plantType {
          name
          photoUrl
        }
      }
      wishes {
        plantType {
          name
          photoUrl
        }
      }
    }
  }
`;

export function FetchNook(nookId) {
  return useQuery(GET_NOOK, {
    variables: { id: nookId },
  });
}
