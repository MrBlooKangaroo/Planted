import React from 'react';
import styles from './styles.css';
import { fetchWishesfromNooksByUser } from 'api/queries/fetchWishesfromNooksByUser';
import { NookWishlist } from '../nook-wishlist';
import { SortDropDown } from '../SortDropDown';

const text = {
  wishlist: 'Wishlist',
};

export const WishlistView = () => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const userId = currentUser.id;
  const { loading, error, data } = fetchWishesfromNooksByUser(userId);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { nooks } = data;

  return (
    <div>
      <h1 className={styles.title}>{text.wishlist}</h1>
      <SortDropDown />
      {nooks &&
        nooks.map(
          nook =>
            nook.wishes.length > 0 && (
              <NookWishlist nook={nook} key={nook.id} />
            ),
        )}
    </div>
  );
};
