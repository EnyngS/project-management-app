import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { exit } from '../../store/authReduser';
import style from './HomePage.module.scss';
import Boards from '../Boards/Boards';

const HomePage = () => {
  //   const state = useSelector((state: any) => state.auth.user);
  //   const dispatch = useDispatch();

  return (
    <div className={style.homePage}>
      <Boards />

      {/* {user.name}
	Home page <Link to={'/'}>Выйти</Link> */}
    </div>
    //  <div className={style.homePage}>
    //    <div className={style.user}>
    //      <span>login: {state.login}</span>
    //      <br />
    //      <span>password: {state.password}</span>
    //      <br />
    //      <span>id: {state.id} </span>
    //      <span>name: {state.username}</span>
    //      <span>token: {state.token}</span>
    //    </div>
    //    <Link
    //      to={'/'}
    //      onClick={() => {
    //        dispatch(exit({}));
    //      }}
    //    >
    //      Выйти
    //    </Link>
    //  </div>

    //  <div className={style.homePage}>
    //    <span>login: {state.login}</span>
    //    <br />
    //    <span>password: {state.password}</span>
    //    <br />
    //    {/* <span>token: {state.token}</span>*/}
    //    <Link
    //      to={'/'}
    //      onClick={() => {
    //        dispatch(exit({}));
    //      }}
    //    >
    //      Выйти
    //    </Link>
    //    {console.log(state)}
    //  </div>
  );
};

export default HomePage;
