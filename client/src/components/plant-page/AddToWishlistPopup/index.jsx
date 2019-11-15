import React from 'react';
import styles from './styles.css';
import { AddToWishlistOption } from '../AddToWishlistOption';
import { arrowConnecting, exit } from 'assets/icons';

export const text = {
  buttonType: 'submit',
  buttonValue: 'Save',
  closeButtonHeader: 'The X in the top right of the header to close it',
  connectorAlt: 'Connecting piece from heart to popupBox',
  wishlistHeader: 'Add to Wishlist',
};

export const AddToWishlistPopup = ({ nooks, togglePopUp }) => (
  <div>
    <img
      src={arrowConnecting}
      className={styles.wishlistConnector}
      alt={text.connectorAlt}
    />
    <div className={styles.wishlistContainer}>
      <div className={styles.wishlistHeaderContainer}>
        <h5 className={styles.header}>{text.wishlistHeader}</h5>
        <button className={styles.exit} onClick={togglePopUp}>
          <img src={exit} alt={text.closeButtonHeader} />
        </button>
      </div>
      <div className={styles.optionList}>
        {nooks &&
          nooks.map(nook => <AddToWishlistOption {...nook} key={nook.id} />)}
      </div>
      <div className={styles.saveButtonContainer}>
        <input
          type={text.buttonType}
          value={text.buttonValue}
          className={styles.saveButton}
          onClick={togglePopUp}
        />
      </div>
    </div>
  </div>
);
