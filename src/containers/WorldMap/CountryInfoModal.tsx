import React, { useState, useContext, useEffect } from 'react';
import { ICountryStatistic, ICountryJSON, IVizualiztionCountry } from '../../models';
import styles from './styles.module.scss';

export interface ICountryInfoModal {
  coutryStatistic: IVizualiztionCountry;
  isOpen: boolean;
}

const CountryInfoModal: React.FC<ICountryInfoModal> = (props) => {
  const { coutryStatistic, isOpen } = props;
  if (!isOpen) {
    return <></>;
  }
  return (
    <div className={styles.infoModal} style={{ position: 'fixed', top: 0, left: 0 }}>
      <img src={coutryStatistic.flag} />
      <div className={styles.titleContainer}>
        <span>
          <em>{coutryStatistic.name}</em>
        </span>
        <span>{coutryStatistic.cases} total cases</span>
      </div>
      <div className={styles.detailedInfo}>
        <span>{coutryStatistic.reports} active</span>
        <span>{coutryStatistic.deaths} deadths</span>
        <span>{coutryStatistic.recovered} recovered</span>
      </div>
    </div>
  );
};

export default React.memo(CountryInfoModal);
