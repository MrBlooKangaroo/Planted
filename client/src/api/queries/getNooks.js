import { gql } from 'apollo-boost';

export const GET_NOOKS_BY_USER_ID = gql`
  query getNooksByUserId($userId: ID!) {
    nooks(userId: $userId) {
      name
      luxLevel
      plants {
        plantType {
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
