import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

export function Login(props) {
  const [isAuthenticated, toggleIsAuthenticated] = useState(
    props.isAuthenticated || false,
  );
  const [name, setName] = useState('');

  function logout() {
    toggleIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  async function googleResponse(response) {
    const headers = {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    };

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

    const resourceResponse = await fetch('http://localhost:1337/', options);
    const user = await resourceResponse.json();
    const userInfo = user.data.authGoogle.user;
    const tokenInfo = user.data.authGoogle.token;

    window.localStorage.setItem('token', tokenInfo);
    window.localStorage.setItem('user', userInfo);

    if (user) {
      toggleIsAuthenticated(true);
      setName(userInfo.firstName + ' ' + userInfo.lastName);
      setToken(userInfo.accessToken);
    }
  }

  function onFailure(error) {
    alert(error);
  }

  let content = isAuthenticated ? (
    <div>
      <p>Authenticated</p>
      <div>{name}</div>
      <div>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  ) : (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={googleResponse}
        onFailure={onFailure}
      />
    </div>
  );

  return <div>{content}</div>;
}
