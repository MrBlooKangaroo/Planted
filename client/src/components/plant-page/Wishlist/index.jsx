import React from 'react';
import styles from './styles.css';
import { WishlistItem } from '../WishListItem';
import { arrowConnecting } from 'assets/icons';

export const text = {
  connectorAlt: 'Connecting piece from heart to popupBox',
  wishlistHeader: 'Add to Wishlist',
};

export const Wishlist = ({ nooks, togglePopUp }) => {
  return (
    <div>
      <img
        src={arrowConnecting}
        className={styles.wishlistConnector}
        alt={text.connectorAlt}
      />
      <div className={styles.wishlistContainer}>
        <div className={styles.wishlistMargin}>
          <div className={styles.wishlistHeaderContainer}>
            <h5 className={styles.header}>{text.wishlistHeader}</h5>
            <button className={styles.exit} onClick={togglePopUp}>
              {' '}
              X{' '}
            </button>
          </div>
          <div className={styles.optionList}>
            {nooks.map(nook => (
              <WishlistItem {...nook} key={nook.id} />
            ))}
          </div>
          <div className={styles.saveButtonContainer}>
            <input
              type="submit"
              value="Save"
              className={styles.saveButton}
              onClick={togglePopUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
