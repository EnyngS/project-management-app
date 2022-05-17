import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { boolean } from 'yup';
import { signin } from '../../store/authReduser';
import LoginPage from './LoginPage/LoginPage';
const axios = require('axios').default;

const LoginPageContainer:FC = () => {
	const state = useSelector((state: any) => state.auth)
	const dispatch = useDispatch()

	interface IUser {
		isAuth: boolean;
		username: string;
		login: string,
		email: string,
		password: string,
		token: string,
	 }
	let user: IUser;
	let setUser: any;

	[user, setUser] = useState({
		isAuth: false,
		username: '',
		login: '',
		email: '',
		password: '',
		token: ''
	});

	useEffect( () => {

		if(user.isAuth){
			axios.post('https://quiet-bastion-49623.herokuapp.com/signin',{
			"login": user.login,
			"password": user.password,
			})
			.then((res:any)=>{
				let result ={
					...user,
					token: res.data.token 
				}
				return(
					dispatch(signin(result)),
					setUser({
						isAuth: false,
						username: '',
						login: '',
						email: '',
						password: '',
						token: ''
					})
				)
			})
			.catch((error: any) => {
				console.log(error)
			})
		}
		
	}, [user] )

  return (<LoginPage addUser = {setUser}/>);
};

export default LoginPageContainer;
