import React from 'react';
import styles from './styles.css';
import { LightLevelPicture } from 'components/UI/lightLevelPicture';
import { NookPlants } from '../NookPlants';
import { SuggestionsList } from '../SuggestionsList';
import { WishlistCarousel } from '../WishlistCarousel';
import fetchNook from 'api/queries/fetchNook';

export const nookDetailText = {
  loadingText: 'Loading...',
  errorText: 'Error: ',
};

export const NookDetail = props => {
  const { nookId } = props.match && props.match.params;
  const { loadingText, errorText } = nookDetailText;

  const { loading, error, data } = fetchNook(nookId);
  if (data) debugger;
  if (loading) return loadingText;
  if (error) return errorText + error.message;
  const { nook } = data,
    { name, luxLevel, wishes } = nook;

  const localUser = localStorage.getItem('user');
  const userPhotoUrl = localUser && JSON.parse(localUser).photoUrl;
  return (
    <div>
      <div className={styles.title}>{name}</div>
      <div className={styles.lux}>
        <LightLevelPicture lightLevel={luxLevel} styles={styles.suns} />
        <img src={userPhotoUrl} alt={userPhotoUrl} className={styles.proPic} />
      </div>
      <NookPlants {...nook} />
      <WishlistCarousel plants={wishes} />
      <SuggestionsList luxLevel={luxLevel} />
    </div>
  );
};
