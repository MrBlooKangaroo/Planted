import React from 'react';
import styles from './styles.css';
import { diamond, humidity, pets, travel } from 'assets/icons';
import { ProTip } from '../ProTip';

export const text = {
  petAlt: 'pet icon',
  humidityAlt: 'humidity icon',
  travelAlt: 'travel icon',
  diamondAlt: 'diamond icon',
  proTips: 'Pro Tips',
};

export const ProTipsCard = ({
  petToxicity,
  humidityAdvice,
  travelAdvice,
  careAdvice,
}) => {
  const proTips = [
    {
      icon: pets,
      iconText: petToxicity,
      altContent: text.petAlt,
    },
    {
      icon: humidity,
      iconText: humidityAdvice,
      altContent: text.humidityAlt,
    },
    {
      icon: travel,
      iconText: travelAdvice,
      altContent: text.travelAlt,
    },
    {
      icon: diamond,
      iconText: careAdvice,
      altContent: text.diamondAlt,
    },
  ];

  return (
    <div className={styles.proTipsCard}>
      <h3 className={styles.header}>{text.proTips}</h3>
      {proTips &&
        proTips.map(proTip => <ProTip {...proTip} key={proTip.altContent} />)}
    </div>
  );
};
