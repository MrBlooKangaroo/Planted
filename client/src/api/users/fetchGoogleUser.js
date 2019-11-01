import { fetchGraphQL } from '../fetchGraphQL';

export const fetchGoogleUser = async ({ accessToken }) => {
  const query = require('./fetchGoogleUser.graphql');
  const variables = {
    input: {
      accessToken,
    },
  };
  console.log(query);
  console.log(variables);
  const user = await fetchGraphQL({ query, variables });
  return user;
};
