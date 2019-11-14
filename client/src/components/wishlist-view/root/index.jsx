import React from 'react';
import styles from './styles.css';
import { fetchNooks } from 'api/queries/fetchNooks';
import { NookWishlist } from '../nook-wishlist';

const text = {
  wishlist: 'Wishlist',
};

export const WishlistView = () => {
  const { loading, error, data } = fetchNooks();
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { nooks } = data;

  return (
    <div>
      <h1 className={styles.title}>{text.wishlist}</h1>
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
