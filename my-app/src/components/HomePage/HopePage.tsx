import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { exit } from '../../store/authReduser';
import style from './HomePage.module.scss';

const HomePage = () => {
	const state = useSelector((state: any)=> state.auth.user)
	const dispatch = useDispatch()
  return (
    <div className={style.homePage}>

		 <span>login: {state.login}</span><br />
		 <span>password: {state.password}</span><br />
		 {/* <span>token: {state.token}</span>*/}
      <Link to={'/'} onClick={()=> { dispatch(exit({})) }}>Выйти</Link>
		{console.log(state)}
    </div>
  );
};

export default HomePage;
