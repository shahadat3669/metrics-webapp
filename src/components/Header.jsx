import React from 'react';
import { FaMicrophone, FaCog, FaChevronLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/components/Header.module.scss';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.header__item}>
        <FaChevronLeft
          className={styles.header__icon_btn}
          onClick={() => navigate('/')}
        />
        2015
      </div>
      <div className={styles.header__item}>
        <p>{location.pathname === '/' ? 'most views' : 'town/city views'}</p>
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
