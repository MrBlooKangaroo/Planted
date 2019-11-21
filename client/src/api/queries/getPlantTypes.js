import { gql } from 'apollo-boost';

export default gql`
  {
    plantTypes {
      id
      name
      photoUrl
      photoUrlHorizontalCrop
      photoUrlVerticalCrop
      luxLevel
      waterCycle
      hasJungleVibes
      isAiryFresh
      isAirPurifying
    }
  }
`;
