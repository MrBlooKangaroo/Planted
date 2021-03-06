import React from 'react';
import { title, wishlistViewContainer } from './styles.css';
import { fetchWishesfromNooksByUser } from 'api/queries/fetchWishesfromNooksByUser';
import { NookWishlist } from '../nook-wishlist';
import { SortDropDown } from '../SortDropDown';

const text = {
  wishlist: 'Wishlist',
};

export const WishlistView = () => {
  let userId;
  const currentUser = JSON.parse(localStorage.getItem('user'));
  if (currentUser) userId = currentUser.id;
  else window.location.replace('/');
  const { loading, error, data } = fetchWishesfromNooksByUser(userId);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { nooks } = data;
  const wishlistNooks = nooks
    ? nooks.filter(nook => nook.wishes.length > 0)
    : [];

  return (
    <div className={wishlistViewContainer}>
      <h1 className={title}>{text.wishlist}</h1>
      <SortDropDown />
      {nooks &&
        wishlistNooks.map(nook => <NookWishlist nook={nook} key={nook.id} />)}
    </div>
  );
};
