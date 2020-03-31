import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import styles from './styles.module.scss';
import { getDataForMap, getD3Data } from '../../api';
import Loader from '../../components/Loader';
import { IVirtualizationResponse, IError, IFeature } from '../../models';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';
import CountryInfoModal from './CountryInfoModal';

const WorldMap: React.FC = () => {
  const globeEl = useRef(null);
  const [isLoaded, handleLoaded] = useState<boolean>(false);
  const [data, handleData] = useState<IVirtualizationResponse>();
  const [error, handleError] = useState<IError | undefined>(undefined);
  const [countries, setCountries] = useState<IFeature[]>();
  const [hoverD, setHoverD] = useState();
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<IFeature>();

  const fetchData = async () => {
    try {
      const featureData = await getD3Data();
      setCountries(featureData);
    } catch (e) {
      handleError(e);
    }
  };

  const fetchDataForMap = async () => {
    try {
      const data = await getDataForMap();
      handleData(data);
    } catch (e) {
      handleError(e);
    }
  };

  const handleGlobeClick = (): void => {
    if (hoverD) {
      setSelectedCountry(hoverD);
      setModalState(true);
    } else {
      setModalState(false);
      setSelectedCountry(undefined);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataForMap();
  }, []);

  useEffect(() => {
    // aim at continental Ukraine centroid
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 49, lng: 32, altitude: 0.8 });
    }
  }, [JSON.stringify(globeEl.current)]);

  const scaleSequentialSqrt = d3['scaleSequentialSqrt'];

  useEffect(() => {
    if (data && countries) {
      countries.forEach((country: IFeature) => {
        const dataCountriesValues = Object.values(data.countries);
        for (let i = 0; i < dataCountriesValues.length; i++) {
          if (
            dataCountriesValues[i].name === country.properties.NAME_LONG ||
            dataCountriesValues[i].name === country.properties.SOVEREIGNT ||
            dataCountriesValues[i].name === country.properties.FORMAL_EN
          ) {
            return (country.statistic = dataCountriesValues[i]);
          }
        }
      });
    }
  }, [data, countries]);

  useEffect(() => {
    if (countries) {
      handleLoaded(true);
    }
  }, [countries]);

  const maxCases = 2000000;

  const colorScale = scaleSequentialSqrt(d3.interpolateYlOrRd);

  const getVal = (feat: any) => {
    if (feat.statistic) {
      return feat.statistic.cases / Math.max(1e5, maxCases);
    } else {
      return feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
    }
  };

  const maxVal = useMemo(() => countries && Math.max(...countries.map(getVal)), [countries]);

  colorScale.domain([0, maxVal]);

  const getLabelString = (properties: any): string => {
    if (!hoverD) {
      setHoverD(properties);
    }
    if (properties.statistic)
      return `<div> ${properties.statistic.name}</div>
    `;
    else
      return `
      <div>${properties.properties.NAME_SORT}</div>
    `;
  };

  const onPolygonClick = useCallback(
    (feature: any) => {
      setModalState(true);
      if (feature) {
        setSelectedCountry(feature);
      } else {
        setSelectedCountry(undefined);
        setModalState(false);
      }
    },
    [selectedCountry]
  );

  if (error) {
    return <div>Something went wrong </div>;
  }
  if (!isLoaded) {
    return <Loader />;
  }

  const isMobile = window.innerWidth < 700;

  return (
    <div ref={globeEl} onClick={handleGlobeClick} className={styles.worldMapContainer}>
      <Globe
        //@ts-ignore
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        polygonsData={countries}
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
        polygonCapColor={(d) => (d === hoverD ? 'steelblue' : colorScale(getVal(d)))}
        polygonStrokeColor={() => '#111'}
        polygonLabel={!isMobile ? (item) => getLabelString(item) : ''}
        onPolygonHover={setHoverD}
        onPolygonClick={(r) => onPolygonClick(r)}
        polygonsTransitionDuration={300}
      />
      {selectedCountry && selectedCountry.statistic && (
        <CountryInfoModal isOpen={isModalOpen} coutryStatistic={selectedCountry.statistic} />
      )}
    </div>
  );
};

export default WorldMap;
