import { gql } from 'apollo-boost';

export default gql`
  {
    plantTypes {
      id
      name
      luxLevel
      photoUrl
    }
  }
`;
