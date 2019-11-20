import React from 'react';
import currentUser from 'utils/currentUser';
import { fetchNooksFromUser } from 'api/queries/fetchNooksFromUser';
import { Wishlist } from '../Wishlist';

export const WishlistInPlantType = props => {
  const { loading, error, data } = fetchNooksFromUser(currentUser.id);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return <Wishlist nooks={data.user.nooks} {...props} />;
};
