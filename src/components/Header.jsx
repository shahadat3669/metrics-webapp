import React from 'react';
import { FaMicrophone, FaCog, FaChevronLeft } from 'react-icons/fa';
import styles from '../styles/components/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__item}>
      <FaChevronLeft className={styles.header__icon_btn} />
      2015
    </div>
    <div className={styles.header__item}>
      <p>most views</p>
    </div>
    <div
      className={`${styles.header__item} ${styles['header__item--gap-hug']}`}
    >
      <FaMicrophone className={styles.header__icon_btn} />
      <FaCog className={styles.header__icon_btn} />
    </div>
  </header>
);

export default Header;
