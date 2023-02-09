import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

export const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        const newState = { ...state, status: 'loading' };
        return newState;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        const newState = {
          ...state,
          status: 'succeeded',
          countries: action.payload,
        };
        return newState;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        const newState = {
          ...state,
          status: 'failed',
          error: action.error.message,
        };
        return newState;
      });
  },
});

export const getAllCountries = (state) => state.countries.countries;
export const getCountriesStatus = (state) => state.countries.status;
export const getCountriesError = (state) => state.countries.error;
export const getCountry = (id) => (state) => {
  const idInt = parseInt(id, 10);
  const country = state.countries.countries.filter(
    (country) => country.id === idInt,
  );
  return country[0];
};

export default countriesSlice.reducer;
