import { gql } from 'apollo-boost';

export default gql`
  mutation($wish: CreateWishInput!) {
    createWish(input: $wish) {
      wish {
        id
        user {
          id
        }
        plantType {
          id
        }
        nook {
          id
        }
      }
    }
  }
`;
