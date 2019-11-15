import { gql } from 'apollo-boost';

export default gql`
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
          id
          luxLevel
        }
      }
    }
  }
`;
