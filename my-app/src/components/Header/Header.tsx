import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// let styles = require("./Header.module.css");
// import './Header.module.css';
import style from './Header.module.scss';
const Header = () => {
  return (
    <header>
      <div className={style.boxBtn}>
        <Link className={style.welBtn} to={'/AuthPage'}>
          log in
        </Link>
        <Link className={style.welBtn} to={'/AuthPage'}>
          sing up
        </Link>
        {/* <Link className={style.welBtn} to={'/AuthPage'}>Go to Main Page</Link> */}
      </div>
    </header>
  );
};

export default Header;
