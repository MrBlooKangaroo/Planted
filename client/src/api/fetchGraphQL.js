import { backendUri } from '../constants/variables';

export const fetchGraphQL = async ({ query, variables }) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    authorization: token,
  };
  console.log(query);
  console.log(variables);
  const body = JSON.stringify({ query, variables });
  console.log(body);
  const options = {
    method: 'POST',
    headers,
    body,
  };
  const response = await fetch(backendUri, options);
  console.log('Respone', response);
  const responseBody = await response.json();
  console.log(responseBody);
  return responseBody;
};
