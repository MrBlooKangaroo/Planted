import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const FETCH_NOOKS_FROM_USER = gql`
  query fetchNooksFromUser($id: ID!) {
    user(id: $id) {
      nooks {
        id
        name
      }
    }
  }
`;

export function fetchNooksFromUser(userId) {
  return useQuery(FETCH_NOOKS_FROM_USER, {
    variables: { id: userId },
  });
}
