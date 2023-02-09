import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchCountries,
  getCountriesStatus,
} from '../features/countries/countriesSlice';

const Category = () => {
  const dispatch = useDispatch();

  const countriesStatus = useSelector(getCountriesStatus);
  useEffect(() => {
    if (countriesStatus === 'idle') {
      dispatch(fetchCountries('europe'));
    }
  }, [countriesStatus, dispatch]);

  return <>Category</>;
};

export default Category;
