import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry } from '../features/countries/countriesSlice';
import styles from '../styles/pages/Country.module.scss';

const Country = () => {
  const { id } = useParams();
  const country = useSelector(getCountry(id));
  let contentToDisplay = '';
  if (!country) {
    contentToDisplay = <div className={styles.country__status}>Loading...</div>;
  } else {
    contentToDisplay = (
      <div className={styles.country__wrapper}>
        <div className={styles.country__top}>
          <div className={styles['country__flag-wrapper']}>
            <img
              className={styles.country__flag}
              src={country?.flag}
              alt={country?.name}
            />
          </div>
          <div className={styles.country__data}>
            <h3 className={styles.country__title}>{country?.name}</h3>
            <p className={styles.country__population}>{country?.population}</p>
          </div>
        </div>
        <div className={styles.country__details}>
          <h4 className={styles['country__details-title']}>Country Details</h4>
          <ul className={styles['country__details-list']}>
            <li className={styles['country__details-item']}>
              <div className={styles['country__details-item-title']}>
                Latitude, Longitude
              </div>
              <div className={styles['country__details-item-content']}>
                {`(${country.latlng[0]}, ${country?.latlng[1]})`}
              </div>
            </li>
            <li className={styles['country__details-item']}>
              <div className={styles['country__details-item-title']}>
                Total Area
              </div>
              <div className={styles['country__details-item-content']}>
                {country?.area}
              </div>
            </li>
            <li className={styles['country__details-item']}>
              <div className={styles['country__details-item-title']}>
                Population
              </div>
              <div className={styles['country__details-item-content']}>
                {country?.population}
              </div>
            </li>
            <li className={styles['country__details-item']}>
              <div className={styles['country__details-item-title']}>
                Capital
              </div>
              <div className={styles['country__details-item-content']}>
                {country?.capital[0]}
              </div>
            </li>
            <li className={styles['country__details-item']}>
              <div className={styles['country__details-item-title']}>
                Region
              </div>
              <div className={styles['country__details-item-content']}>
                {country.region}
              </div>
            </li>
            <li className={styles['country__details-item']}>
              <div className={styles['country__details-item-title']}>
                Time Zone
              </div>
              <div className={styles['country__details-item-content']}>
                {country?.timezones[0]}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return <div className={styles.country}>{contentToDisplay}</div>;
};

export default Country;
