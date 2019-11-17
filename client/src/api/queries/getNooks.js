import { gql } from 'apollo-boost';

export const GET_NOOKS_BY_USERID = userId => {
  const query = `
    {
      nooks(userId: "${userId}") {
        name
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
  return gql`
    ${query}
  `;
};
