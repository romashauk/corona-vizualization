import { ITimeLineResponse, ICountry, ICountryStatistic, IDateStatistic, IVirtualizationResponse, IFeature } from '../models';

export const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.the2019ncov.com/api/';
export const codevizApi = 'https://cors-anywhere.herokuapp.com/https://www.covidvisualizer.com/api';

export const getAllCases = (): Promise<IDateStatistic> => {
  return new Promise<IDateStatistic>(async (resolve, reject) => {
    const link = `${apiUrl}/cases`;
    fetch(link)
      .then((res) => res.json())
      .catch((err) => reject({ code: 401, message: err.message }))
      .then((res) => resolve(res));
  });
};

export const getTimeLineNews = (): Promise<ITimeLineResponse[]> => {
  return new Promise<ITimeLineResponse[]>((resolve, reject) => {
    const link = `${apiUrl}/timeline`;
    fetch(link)
      .then((res) => res.json())
      .catch((err) => reject({ code: 401, message: err.message }))
      .then((res) => resolve(res));
  });
};

export const getCountry = (): Promise<ICountry> => {
  return new Promise<ICountry>((resolve, reject) => {
    fetch('http://ip-api.com/json')
      .then((res) => res.json())
      .catch((err) => reject({ code: 401, message: err.message }))
      .then((res) => resolve({ status: res.status, country: res.country }));
  });
};

export const getDataForMap = (): Promise<IVirtualizationResponse> => {
  return new Promise<IVirtualizationResponse>((resolve, reject) => {
    fetch(codevizApi)
      .then((res) => res.json())
      .catch((err) => reject({ code: 401, message: err.message }))
      .then((res) => resolve(res));
  });
};

export const getD3Data = (): Promise<IFeature[]> => {
  return new Promise<IFeature[]>((resolve, reject) => {
    fetch('https://vasturiano.github.io/globe.gl/example/datasets/ne_110m_admin_0_countries.geojson')
      .then((res) => res.json())
      .then((res) => resolve(res.features))
      .catch((err) => reject({ code: 401, message: err.message }));
  });
};
