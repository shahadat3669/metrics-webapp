import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer from '../features/countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
