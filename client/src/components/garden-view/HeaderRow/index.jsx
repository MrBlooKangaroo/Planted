import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
  gardenContainer,
  headerClass,
  gardenStatsClass,
  sortSpan,
  alphaSortText,
  caretUp,
  caretDown,
} from './styles.css';

export const headerRowText = {
  header: 'Garden',
  forwardsSort: 'A to Z',
  backwardsSort: 'Z to A',
  gardenStats: (nookTotal, plantTotal) =>
    `${nookTotal} nooks • ${plantTotal} plants`,
};

const HeaderRow = ({ nooks, plantTotal, isForwardSort, toggleSort }) => {
  const { header, forwardsSort, backwardsSort, gardenStats } = headerRowText;
  return (
    <div className={gardenContainer}>
      <div className={headerClass}>{header}</div>
      <div className={gardenStatsClass}>
        {gardenStats(nooks.length, plantTotal)}
      </div>
      <div className={sortSpan} onClick={() => toggleSort(!isForwardSort)}>
        <span className={alphaSortText}>
          {isForwardSort ? forwardsSort : backwardsSort}
        </span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isForwardSort ? caretUp : caretDown}
        />
      </div>
    </div>
  );
};

export default HeaderRow;
