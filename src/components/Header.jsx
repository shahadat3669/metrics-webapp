import React from 'react';
import { FaMicrophone, FaCog, FaChevronLeft } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import styles from '../styles/components/Header.module.scss';

const Header = () => {
  const location = useLocation();
  console.log();
  return (
    <header className={styles.header}>
      <div className={styles.header__item}>
        <FaChevronLeft className={styles.header__icon_btn} />
        2015
      </div>
      <div className={styles.header__item}>
        <p>
          {location.pathname === '/about' ? 'town/city views' : 'most views'}
        </p>
      </div>
      <div
        className={`${styles.header__item} ${styles['header__item--gap-hug']}`}
      >
        <FaMicrophone className={styles.header__icon_btn} />
        <FaCog className={styles.header__icon_btn} />
      </div>
    </header>
  );
};

export default Header;
