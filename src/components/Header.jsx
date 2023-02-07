import React from 'react';
import { FaMicrophone, FaCog, FaChevronLeft } from 'react-icons/fa';

const Header = () => (
  <header>
    <div>
      <FaChevronLeft />
      2015
    </div>
    <div>
      <p>most views</p>
    </div>
    <div>
      <FaMicrophone />
      <FaCog />
    </div>
  </header>
);

export default Header;
