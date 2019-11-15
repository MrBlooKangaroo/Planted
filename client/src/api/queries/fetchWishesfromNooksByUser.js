import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const FETCH_WISHES_FROM_NOOKS_BY_USER = gql`
  query fetchWishesfromNooksByUser($id: ID!) {
    user(id: $id) {
      nooks {
        id
        name
        wishes {
          plantType {
            name
            photoUrlVerticalCrop
          }
        }
      }
    }
  }
`;

export function fetchWishesfromNooksByUser(userId) {
  return useQuery(FETCH_WISHES_FROM_NOOKS_BY_USER, {
    variables: { id: userId },
  });
}
