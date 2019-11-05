import React, { useState, Fragment } from 'react';
import { GoogleLogin } from 'react-google-login';
import { fetchGoogleUser } from '../../../api/mutations';
import { googleClientId } from '../../../constants/config';

const logText = {
  login: 'Log in',
  logout: 'Log out',
  authenticated: 'Authenticated',
};

export const Login = () => {
  let userInfo;
  let tokenInfo;

  const [name, setName] = useState('');
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  const logout = () => {
    toggleIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const googleResponse = async response => {
    const user = await fetchGoogleUser(response);
    userInfo = user.data.authGoogle.user;
    tokenInfo = user.data.authGoogle.token;

    window.localStorage.setItem('token', tokenInfo);
    window.localStorage.setItem('user', userInfo);

    if (user) {
      toggleIsAuthenticated(true);
      setName(fullName);
    }
  };

  const onFailure = error => {
    alert(error);
  };

  const fullName = () => userInfo.firstName + ' ' + userInfo.lastName;

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
}) => (
  <Fragment>
    {isAuthenticated ? (
      <div>
        <p>{logText.authenticated}</p>
        <p>{name}</p>
        <button onClick={logout}>{logText.logout}</button>
      </div>
    ) : (
      <GoogleLogin
        clientId={googleClientId}
        buttonText={logText.login}
        onSuccess={googleResponse}
        onFailure={onFailure}
      />
    )}
  </Fragment>
);
