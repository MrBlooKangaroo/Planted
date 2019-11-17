import React from 'react';
import { Link } from 'react-router-dom';
import getLuxOrCycleIcon from 'utils/getLuxOrCycleIcon';
import {
  nookCardName,
  userPhoto,
  plantTotal,
  luxLevelIcon,
  nookInfoTop,
  nookInfoBottom,
} from './styles.css';

const NookInfo = ({
  nook: { id, name: nookName, luxLevel },
  currentUser,
  plantTotalText,
}) => (
  <>
    <div className={nookInfoTop}>
      <Link to={`/nooks/${id}`} className={nookCardName}>
        {nookName}
      </Link>
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
