import { gql } from 'apollo-boost';

export const GET_NOOKS_BY_USER_ID = gql`
  query getNooksByUserId($userId: ID!) {
    nooks(userId: $userId) {
      id
      name
      luxLevel
      plants {
        id
        photoUrl
        plantType {
          id
          name
          photoUrlHorizontalCrop
          luxLevel
        }
        nook {
          luxLevel
        }
      }
    }
  }
`;
