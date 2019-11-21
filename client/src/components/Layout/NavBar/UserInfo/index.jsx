import React from 'react';
import { userInfoContainer, userPhoto, logoutButton } from './styles.css';

export const userInfoText = {
  logout: 'Log Out',
};

const UserInfo = ({
  photoUrl,
  onLogout,
  isLogoutVisible,
  toggleLogoutButton,
}) => (
  <div className={userInfoContainer}>
    <img
      className={userPhoto}
      src={photoUrl}
      alt={photoUrl}
      onClick={() => toggleLogoutButton(!isLogoutVisible)}
    />
    {isLogoutVisible && (
      <button className={logoutButton} onClick={onLogout}>
        {userInfoText.logout}
      </button>
    )}
  </div>
);

export default UserInfo;
