import { gql } from 'apollo-boost';

export default gql`
  {
    plantTypes {
      id
      photoUrlVerticalCrop
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
