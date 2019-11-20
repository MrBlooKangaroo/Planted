import { gql } from 'apollo-boost';

export default gql`
  {
    plantTypes {
      id
      name
      photoUrl
      luxLevel
      waterCycle
      hasJungleVibes
      isAiryFresh
      isAirPurifying
    }
  }
`;
