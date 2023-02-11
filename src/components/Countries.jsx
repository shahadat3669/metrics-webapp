import React from 'react';
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getAllCountries } from '../features/countries/countriesSlice';
import styles from '../styles/components/Countries.module.scss';

const Countries = () => {
  const countries = useSelector(getAllCountries);
  return (
    <div className={styles.countries}>
      <div className={styles.countries__bar}> COUNTRIES</div>
      <div className={styles.countries__list}>
        {countries.map((country) => (
          <Link
            to={`country/${country.id}`}
            key={country.id}
            className={styles.countries__item}
          >
            <div className={styles['countries__icon-wrapper']}>
              <FaArrowRight className={styles.countries__icon} />
            </div>
            <div className={styles['countries__item-img-wrapper']}>
              <img
                className={styles['countries__item-img']}
                src={country.flag}
                alt={country.name}
              />
            </div>
            <div className={styles.countries__details}>
              <h3 className={styles['countries__item-name']}>{country.name}</h3>
              <p className={styles['countries__item-population']}>
                {country.population}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
