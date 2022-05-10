import React from 'react';
import { Link } from 'react-router-dom';
import style from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <div className={style.AuthPage}>
      AuthPage
      <Link to={'/HomePage'}>Прошла успешна!</Link>
    </div>
  );
};

export default AuthPage;
