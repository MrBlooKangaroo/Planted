import React from 'react';
import { userInfoContainer, userPhoto, logoutButton } from './navbar.css';

export const userInfoText = {
  logout: 'Log out',
};

const UserInfo = ({ photoUrl, onLogout }) => {
  debugger;
  return (
    <div className={userInfoContainer}>
      <img className={userPhoto} src={photoUrl} alt={photoUrl} />
      <button className={logoutButton} onClick={onLogout}>
        {userInfoText.logout}
      </button>
    </div>
  );
};

export default UserInfo;
