import React, { useState, Fragment } from 'react';
import { GoogleLogin } from 'react-google-login';
import { fetchGoogleUser } from '../../../api/fetchGoogleUser';

export const Login = () => {
  let userInfo;
  let tokenInfo;

  const [name, setName] = useState('');
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  function logout() {
    toggleIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  async function googleResponse(response) {
    const user = await fetchGoogleUser(response);
    console.log(user);
    userInfo = user.data.authGoogle.user;
    tokenInfo = user.data.authGoogle.token;

    window.localStorage.setItem('token', tokenInfo);
    window.localStorage.setItem('user', userInfo);

    if (user) {
      toggleIsAuthenticated(true);
      setName(fullName);
    }
  }

  const onFailure = error => {
    alert(error);
  };

  const fullName = () => {
    return userInfo.firstName + ' ' + userInfo.lastName;
  };

  const baseProps = {
    isAuthenticated,
    name,
    logout,
    googleResponse,
    onFailure,
  };

  return <BaseLogin {...baseProps} />;
};

export const BaseLogin = ({
  isAuthenticated,
  name,
  logout,
  googleResponse,
  onFailure,
}) => {
  return (
    <Fragment>
      {isAuthenticated ? (
        <div>
          <p>Authenticated</p>
          <p>{name}</p>
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={googleResponse}
          onFailure={onFailure}
        />
      )}
    </Fragment>
  );
};
