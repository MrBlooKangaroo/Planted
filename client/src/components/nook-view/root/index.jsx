import React from 'react';
import styles from './styles.css';
import { LightLevelPicture } from 'components/UI/lightLevelPicture';
import { NookPlants } from '../NookPlants';
import { SuggestionsList } from '../SuggestionsList';
import { WishlistCarousel } from '../WishlistCarousel';
import { fetchNook } from '../../../api/queries/fetchNook';

const text = {
  altPhoto: 'User photo url from google profile',
};

export const NookDetail = ({ match }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const userPhotoUrl = currentUser.photoUrl;
  const { nookId } = match.params;
  const { loading, error, data } = fetchNook(nookId);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { nook } = data;

  return (
    <div>
      <div className={styles.title}>{nook.name}</div>
      <div className={styles.lux}>
        <LightLevelPicture lightLevel={nook.luxLevel} styles={styles.suns} />
        <img src={userPhotoUrl} className={styles.proPic} alt={text.altPhoto} />
      </div>
      <NookPlants {...nook} />
      <WishlistCarousel plants={nook.wishes} />
      <SuggestionsList luxLevel={nook.luxLevel} />
    </div>
  );
};
