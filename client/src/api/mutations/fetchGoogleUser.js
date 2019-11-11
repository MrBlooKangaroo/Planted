export default async response => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token'),
  };

  const query = JSON.stringify({
    query: `
      mutation { 
        authGoogle(input: {
          accessToken: "${response.accessToken}" 
        }) {
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
        }
      }
    `,
  });

  const options = {
    method: 'POST',
    headers,
    body: query,
  };

  const resourceResponse = await fetch(
    process.env.REACT_APP_BACKEND_URL,
    options,
  );
  return await resourceResponse.json();
};
