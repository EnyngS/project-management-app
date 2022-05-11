import React, { Component, useReducer, createContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './MainPage.module.scss';
// import React, { Component, useReducer, createContext, useEffect } from 'react';
import { useAppSelector } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { getUsers } from '../../store/sliceUsers';
import Boards from '../Boards/Boards';
const HomePage = () => {
  //   const user = useAppSelector((store) => store.sliceBoards.user);
  //   const dispatch = useAppDispatch();
  //   useEffect(() => {
  //     dispatch(getUsers());
  //   }, []);
  return (
    <div className={style.homePage}>
      <Boards />

      {/* {user.name}
      Home page <Link to={'/'}>Выйти</Link> */}
    </div>
  );
};

export default HomePage;
