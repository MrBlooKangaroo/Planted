import React from 'react';
import getLuxOrCycleIcon from '../../../../../utils/getLuxOrCycleIcon';
import {
  nookCardName,
  userPhoto,
  plantTotal,
  luxLevelIcon,
  nookInfoTop,
  nookInfoBottom,
} from './styles.css';

const NookInfo = ({
  nook: { name: nookName, luxLevel },
  currentUser,
  plantTotalText,
}) => (
  <>
    <div className={nookInfoTop}>
      <span className={nookCardName}>{nookName}</span>
      {getLuxOrCycleIcon('luxLevel', luxLevel, 'unselected', luxLevelIcon)}
    </div>
    <div className={nookInfoBottom}>
      {currentUser && (
        <img
          className={userPhoto}
          src={currentUser.photoUrl}
          alt={currentUser.firstName}
        />
      )}
      <span className={plantTotal}>{plantTotalText}</span>
    </div>
  </>
);

export default NookInfo;
