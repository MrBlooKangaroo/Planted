import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
  gardenContainer,
  header as headerClass,
  gardenStats as gardenStatsClass,
  sortSpan,
  alphaSortText,
  caretUp,
  caretDown,
} from './styles.css';

export const headerRowText = {
  header: 'Garden',
  alphabeticalOrderText: 'A to Z',
  reverseAlphabeticalOrderText: 'Z to A',
  gardenStats: (nookTotal, plantTotal) =>
    `${nookTotal} nooks • ${plantTotal} plants`,
};

const HeaderRow = ({
  nooks,
  plantTotal,
  isAlphabeticallySorted,
  toggleSort,
}) => {
  const {
    header,
    alphabeticalOrderText,
    reverseAlphabeticalOrderText,
    gardenStats,
  } = headerRowText;
  return (
    <div className={gardenContainer}>
      <h1 className={headerClass}>{header}</h1>
      <div className={gardenStatsClass}>
        {gardenStats(nooks.length, plantTotal)}
      </div>
      <div
        className={sortSpan}
        onClick={() => toggleSort(!isAlphabeticallySorted)}
      >
        <span className={alphaSortText}>
          {isAlphabeticallySorted
            ? alphabeticalOrderText
            : reverseAlphabeticalOrderText}
        </span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={isAlphabeticallySorted ? caretUp : caretDown}
        />
      </div>
    </div>
  );
};

export default HeaderRow;
