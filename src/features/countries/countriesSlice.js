import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk(
  'countries/FETCH_COUNTRIES',
  async (region) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`,
    );
    const countries = await response.json();
    const modifiedCountries = await countries.map((country, id) => ({
      id,
      name: country.name.common,
      area: country.area,
      population: country.population,
      latlng: country.latlng,
      capital: country.capital,
      timezones: country.timezones,
      region: country.region,
      flag: country.flags.svg,
    }));
    return modifiedCountries;
  },
);
