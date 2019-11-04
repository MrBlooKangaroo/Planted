export const fetchGoogleUser = async response => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token'),
  };

  const uri = 'http://localhost:1337/';

  const query = JSON.stringify({
    query: `mutation { authGoogle(input: { accessToken: "${
      response.accessToken
    }" }) {
      token 
      user {
        id
        googleId
        firstName
        lastName
        email
        accessToken
        photoUrl
      }
      } } `,
  });

  const options = {
    method: 'POST',
    headers,
    body: query,
  };

  const resourceResponse = await fetch(uri, options);
  const user = await resourceResponse.json();
  return user;
};
