import React from 'react';
import { fetchNooksFromUser } from 'api/queries/fetchNooksFromUser';
import { AddToWishlistPopup } from '../AddToWishlistPopup';

export const Wishlist = ({ togglePopUp }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const userId = currentUser.id;
  const { loading, error, data } = fetchNooksFromUser(userId);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const nooks = data.user.nooks;

  return <AddToWishlistPopup nooks={nooks} togglePopUp={togglePopUp} />;
};
