import React from 'react';
import { useSelector } from 'react-redux';
import style from './HomePage.module.scss';

const HomePage = () => {
	const state:any = useSelector((state: any)=> state.auth.user)

  return (
    <div className={style.homePage}>
		 <div className={style.user}>
		 <span>login: {state.login}</span><br />
		 <span>password: {state.password}</span><br />
		 <span>id: {state.id} </span>
		 <span>name: {state.username}</span>
		 <span>token: {state.token}</span>
		 </div>

    </div>
  );
};

export default HomePage;
