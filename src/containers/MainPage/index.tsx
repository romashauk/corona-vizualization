import React, { useState, useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { getCountry, getAllCases } from '../../api';
import { ICountryStatistic, IDateStatistic } from '../../models';
import Loader from '../../components/Loader';

const MainPage: React.FC = () => {
  const [currentCountry, setCountry] = useState<string>('');
  const [allCases, setCases] = useState<IDateStatistic>();
  const [error, handleError] = useState<string>('');
  const [activeCountry, setCurrentCountryInfo] = useState<ICountryStatistic>();
  const [isLoaded, setLoaded] = useState<boolean>(false);

  const getUsersCountry = async () => {
    try {
      const locationResponse = await getCountry();
      if (locationResponse.status === 'success') {
        setCountry(locationResponse.country);
      }
    } catch (e) {
      handleError(e);
    }
  };
  const getInfo = async () => {
    try {
      const cases = await getAllCases();
      setCases(cases);
    } catch (e) {
      handleError(e);
    }
  };

  useEffect(() => {
    if (activeCountry) {
      setLoaded(true);
    }
  }, [activeCountry]);

  useEffect(() => {
    if (allCases && allCases.data.length && currentCountry) {
      const currentCountryData = allCases.data.find((countryData: ICountryStatistic) => countryData['Country/Region'] === currentCountry);
      if (currentCountryData) {
        setCurrentCountryInfo(currentCountryData);
      } else {
        const currentCountryData = allCases.data.find((countryData: ICountryStatistic) => countryData['Country/Region'] === 'Ukraine');
        setCurrentCountryInfo(currentCountryData);
      }
    }
  }, [allCases, currentCountry]);

  useEffect(() => {
    getUsersCountry();
    getInfo();
  }, []);
  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div>
      <div>Confirmed: {allCases.total_confirmed}</div>
      <div>Death: {allCases.total_death}</div>
      <div>Recovered: {allCases.total_recovered}</div>
      <div>In {currentCountry}</div>
    </div>
  );
};

export default MainPage;
