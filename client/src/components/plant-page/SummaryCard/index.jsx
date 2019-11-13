import React from 'react';
import styles from './styles.css';

export const text = {
  plantFeatures: 'Plant Features',
  growingFeatures: 'Growing Instructions',
};

export const SummaryCard = ({ featuresWeb, instructionsWeb }) => (
  <div className={styles.summaryCard}>
    <svg
      viewBox="0 0 500 500"
      height="500"
      width="500"
      className={styles.largeCircle}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={250} cy={250} r={250} fill={'#ffe5a4'} />
    </svg>
    <svg
      viewBox="0 0 370 370"
      height="370"
      width="370"
      className={styles.smallCircle}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={185} cy={185} r={185} fill={'#ffe5a4'} />
    </svg>
    <div className={styles.summaryTextPanel}>
      <section>
        <h4 className={styles.headers}>{text.plantFeatures}</h4>
        <p className={styles.description}>{featuresWeb}</p>
      </section>
      <section>
        <h5 className={styles.headers}>{text.growingFeatures}</h5>
        <p className={styles.description}>{instructionsWeb}</p>
      </section>
    </div>
  </div>
);
