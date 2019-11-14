import React from 'react';
import { fetchNooksFromUser } from 'api/queries/fetchNooksFromUser';
import { Wishlist } from '../Wishlist';

export const WishlistInPlantType = ({ showWishlist, togglePopUp }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const userId = currentUser.id;
  const { loading, error, data } = fetchNooksFromUser(userId);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const nooks = data.user.nooks;

  return (
    <Wishlist
      nooks={nooks}
      showWishlist={showWishlist}
      togglePopUp={togglePopUp}
    />
  );
};
