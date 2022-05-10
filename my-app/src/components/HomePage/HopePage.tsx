import React from 'react';
import { Link } from 'react-router-dom';
import style from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={style.homePage}>
      Home page <Link to={'/'}>Выйти</Link>
    </div>
  );
};

export default HomePage;
