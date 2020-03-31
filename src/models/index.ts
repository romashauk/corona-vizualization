export interface ITimeLineResponse {
  date: string;
  time: [INews];
}

export interface INews {
  time: string;
  description: string;
  source: string;
}

export interface IError {
  code: string;
  message: string;
}

export interface ICountry {
  status: string;
  country: string;
}

export interface IDateStatistic {
  total_confirmed: number;
  total_recovered: number;
  total_death: number;
  data: [ICountryStatistic];
}

export interface ICountryStatistic {
  'Province/State': string;
  'Country/Region': string;
  dates: [IDayStatistic];
}

export interface IDayStatistic {
  date: string;
  confirmed: number;
  recovered: number;
  death: number;
}

export interface IVirtualizationResponse {
  timestamp: string;
  max: string;
  worldwide: IWordlWideData;
  countries: ICountryJSON;
}

export interface ICountryJSON {
  [key: string]: IVizualiztionCountry;
}

export interface IWordlWideData {
  reports: number;
  deadths: number;
  recovered: number;
}

export interface IVizualiztionCountry {
  name: string;
  flag: string;
  reports: number;
  cases: number;
  deaths: number;
  recovered: number;
}

export interface IFeature {
  type: string;
  geometry: any;
  bbox: [number];
  properties: IFeatureProperty;
  statistic?: IVizualiztionCountry;
}

export interface IFeatureProperty {
  SOVEREIGNT: string;
  SOV_A3: string;
  REGION_WB: string;
  NAME_SORT: string;
  [key: string]: any;
}
