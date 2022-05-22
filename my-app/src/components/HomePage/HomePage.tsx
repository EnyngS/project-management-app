import React from 'react';
import style from './HomePage.module.scss';
import Boards from '../Boards/Boards';

const HomePage = () => {

  return (
    <div className={style.homePage}>
      <Boards />
    </div>
  );
};

export default HomePage;
