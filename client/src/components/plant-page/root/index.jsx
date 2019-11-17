import { getPlantType } from 'src/api/queries/getPlantType';
import { ProTipsCard } from '../ProTipsCard';
import { SummaryCard } from '../SummaryCard';
import { TopCard } from '../TopCard';
import React from 'react';
import styles from './styles.css';

export const PlantTypePage = ({ match }) => {
  const { plantTypeId } = match.params;
  const { loading, error, data } = getPlantType(plantTypeId);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { plantType } = data;

  return (
    <div className={styles.plantView}>
      <TopCard {...plantType} />
      <ProTipsCard {...plantType} />
      <SummaryCard {...plantType} />
    </div>
  );
};
