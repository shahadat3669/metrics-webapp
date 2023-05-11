import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import { Pagination } from 'swiper';
import styles from '../styles/components/Category.module.scss';
import {
  fetchCountries,
  getCountriesStatus,
} from '../features/countries/countriesSlice';

import regions from '../utils/regions';

const Category = () => {
  const dispatch = useDispatch();

  const countriesStatus = useSelector(getCountriesStatus);
  useEffect(() => {
    if (countriesStatus === 'idle') {
      dispatch(fetchCountries('europe'));
    }
  }, [countriesStatus, dispatch]);

  return (
    <div>
      <Swiper
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {regions.map((region) => (
          <SwiperSlide key={region.id}>
            <div className={styles.category}>
              <div className={styles.category__wrapper}>
                <div className={styles['category__img-wrapper']}>
                  <img
                    className={styles.category__img}
                    src={`assets/${region.img}`}
                    alt={region.name}
                  />
                </div>
                <div className={styles.category__content}>
                  <div className={styles['category__content-wrapper']}>
                    <h3 className={styles.category__title}>{region.name}</h3>
                    <button
                      className={styles.category__button}
                      type="button"
                      onClick={() => {
                        dispatch(fetchCountries(region.name));
                      }}
                      aria-hidden="true"
                    >
                      view
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
