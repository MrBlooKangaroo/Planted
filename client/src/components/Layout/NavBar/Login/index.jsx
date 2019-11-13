import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import fetchGoogleUser from '../../../../api/mutations/fetchGoogleUser';
import { loginContainer, googleButton } from './styles.css';
import UserInfo from '../UserInfo';

export const loginText = {
  login: 'Log in',
};

export const Login = () => {
  let userInfo, tokenInfo;
  const [photoUrl, setPhotoUrl] = useState('');
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  const onLogout = () => {
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
      setPhotoUrl(userInfo.photoUrl);
    }
  };

  const baseProps = {
    isAuthenticated,
    googleResponse,
    onLogout,
    photoUrl,
  };

  return <BaseLogin {...baseProps} />;
};

export const BaseLogin = ({
  isAuthenticated,
  googleResponse,
  onLogout,
  name,
  photoUrl,
}) => (
  <div className={loginContainer}>
    {isAuthenticated ? (
      <UserInfo name={name} onLogout={onLogout} photoUrl={photoUrl} />
    ) : (
      <GoogleLogin
        className={googleButton}
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText={loginText.login}
        onSuccess={googleResponse}
        onFailure={error => alert(error)}
      />
    )}
  </div>
);