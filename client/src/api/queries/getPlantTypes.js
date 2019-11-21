import { gql } from 'apollo-boost';

export default gql`
  {
    plantTypes {
      id
      photoUrlVerticalCrop
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
