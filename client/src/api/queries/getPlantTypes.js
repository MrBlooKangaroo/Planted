import { gql } from 'apollo-boost';

export default gql`
  {
    plantTypes {
      name
      luxLevel
      photoUrl
    }
  }
`;
