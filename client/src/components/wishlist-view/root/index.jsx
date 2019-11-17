import React from 'react';
import styles from './styles.css';
import { fetchNooks } from 'api/queries/fetchNooks';
import { NookWishlist } from '../nook-wishlist';
import { DropDown } from '../drop-down';

const text = {
  wishlist: 'Wishlist',
};

export const WishlistView = () => {
  const {
    loading,
    error,
    data: { nooks },
  } = fetchNooks();
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h1 className={styles.title}>{text.wishlist}</h1>
      <DropDown />
      {nooks &&
        nooks.map(
          nook =>
            nook.wishes.length > 0 && <NookWishlist {...nook} key={nook.id} />,
        )}
    </div>
  );
};
