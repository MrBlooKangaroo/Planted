import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import fetchGoogleUser from 'api/mutations/fetchGoogleUser';
import { loginContainer, googleButton } from './styles.css';
import UserInfo from '../UserInfo';

export const loginText = {
  login: 'Log in',
};

export default ({
  isLogoutVisible,
  toggleLogoutVisible,
  isAuthenticated,
  toggleIsAuthenticated,
}) => {
  let userInfo, tokenInfo;
  const [photoUrl, setPhotoUrl] = useState('');
  const cachedUser = localStorage.getItem('user');
  if (cachedUser && !photoUrl) setPhotoUrl(JSON.parse(cachedUser).photoUrl);

  const onLogout = () => {
    toggleIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  const googleResponse = async response => {
    const user = await fetchGoogleUser(response);
    userInfo = user.data.authGoogle.user;
    tokenInfo = user.data.authGoogle.token;
    window.localStorage.setItem('token', tokenInfo);
    window.localStorage.setItem('user', JSON.stringify(userInfo));
    if (user) {
      toggleIsAuthenticated(true);
      setPhotoUrl(userInfo.photoUrl);
    }
    window.location.reload();
  };

  const baseProps = {
    isLogoutVisible,
    toggleLogoutVisible,
    isAuthenticated,
    googleResponse,
    onLogout,
    photoUrl,
  };

  return <BaseLogin {...baseProps} />;
};

export const BaseLogin = ({
  name,
  photoUrl,
  onLogout,
  isLogoutVisible,
  toggleLogoutVisible,
  isAuthenticated,
  googleResponse,
}) => (
  <div className={loginContainer}>
    {isAuthenticated ? (
      <UserInfo
        name={name}
        photoUrl={photoUrl}
        onLogout={onLogout}
        isLogoutVisible={isLogoutVisible}
        toggleLogoutVisible={toggleLogoutVisible}
      />
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
